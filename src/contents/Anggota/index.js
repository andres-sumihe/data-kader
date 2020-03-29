import React from "react";
import "./style.css";
import "../../grid.css";
import "./../../skin.css";
import SearchAnggota from "./SearchAnggota";
import PreviewAnggota from "./PreviewAnggota";
import AddAnggota from "./AddAnggota";

class Anggota extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typeOfSearch: "Pencarian-Cepat",
      valueOfFastSearch: "",
      valueOfFullSearch: []
    };
  }

  handleTypeOfSearchChange(typeOfSearch) {
    this.setState({
      typeOfSearch: typeOfSearch
    });
  }

  render() {
    const { typeOfSearch, valueOfFastSearch, valueOfFullSearch } = this.state;
    return (
      <div className="AnggotaContent container-fluid">
        <AddAnggota />
        <SearchAnggota
          typeOfSearch={typeOfSearch}
          onTypeOfSearchChange={this.state.handleTypeOfSearchChange}
          valueOfFastSearch={valueOfFastSearch}
        />
        <PreviewAnggota
          typeOfSearch={typeOfSearch}
          valueOfFastSearch={valueOfFastSearch}
          valueOfFullSearch={valueOfFullSearch}
        />
      </div>
    );
  }
}

export default Anggota;
