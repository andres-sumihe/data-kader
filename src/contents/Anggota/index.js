import React from "react";
import "./style.css";
import "../../grid.css";
import SearchAnggota from "./SearchAnggota";
import DataAnggota from "./DataAnggota";

class Anggota extends React.Component {
  render() {
    return (
      <div className="AnggotaContent container-fluid">
        <SearchAnggota />
        <DataAnggota />
      </div>
    );
  }
}

export default Anggota;
