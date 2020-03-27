import React from "react";
import "./style.css";
import "../../grid.css";
import "./../../skin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Select from "react-select";

class PopupAddAnggota extends React.Component {}

class AddAnggota extends React.Component {
  render() {
    return (
      <div className="AddAnggotaButton">
        <FontAwesomeIcon icon={faPlus} />
        <span>Tambah Anggota</span>
      </div>
    );
  }
}

export default AddAnggota;
