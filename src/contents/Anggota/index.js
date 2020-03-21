import React from "react";
import "./style.css";
import "../../grid.css";
import "./../../skin.css";
import SearchAnggota from "./SearchAnggota";
import DataAnggota from "./DataAnggota";

class Anggota extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			typeOfSearch: "Pencarian-Cepat",
			valueOfFastSearch: "",
			valueOfFullSearch: []
		}
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
        <SearchAnggota typeOfSearch={typeOfSearch} onTypeOfSearchChange={this.state.handleTypeOfSearchChange} valueOfFastSearch={valueOfFastSearch} />
        <DataAnggota typeOfSearch={typeOfSearch} valueOfFastSearch={valueOfFastSearch} valueOfFullSearch={valueOfFullSearch} />
      </div>
    );
  }
}

export default Anggota;