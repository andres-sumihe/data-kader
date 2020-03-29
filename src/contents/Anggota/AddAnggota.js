import React from "react";
import "./style.css";
import "../../grid.css";
import "./../../skin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faUser, faPlus } from "@fortawesome/free-solid-svg-icons";
import Select from "react-select";

class Kepartaian extends React.Component {
  constructor(props) {
    super(props);
    this.kepartaianRef = React.createRef();
  }

  render() {
    return (
      <div className="Kepartaian Active" ref={this.kepartaianRef}>
        Kepartaian
      </div>
    );
  }
}

class Biodata extends React.Component {
  constructor(props) {
    super(props);
    this.biodataRef = React.createRef();
  }

  render() {
    return (
      <div className="Biodata Active" ref={this.biodataRef}>
        Biodata
      </div>
    );
  }
}

class PopupAddAnggota extends React.Component {
  constructor(props) {
    super(props);
    this.popupAddAnggotaRef = React.createRef();
    this.biodataTabRef = React.createRef();
    this.kepartaianTabRef = React.createRef();
    this.BiodataRef = React.createRef();
    this.KepartaianRef = React.createRef();
    this.state = {
      tabActive: "Biodata"
    };
    this.handleClickClose = this.handleClickClose.bind(this);
    this.handleClickTab = this.handleClickTab.bind(this);
  }

  handleClickTab(event, tabTarget) {}

  handleClickClose(event) {
    this.popupAddAnggotaRef.current.classList.remove("Active");
    event.preventDefault();
  }

  render() {
    return (
      <div className="full-overlay" ref={this.popupAddAnggotaRef} >
        <div className="AddAnggota">
          <div className="Head">
            <h5>
              <FontAwesomeIcon icon={faUser} />
              <span>Tambah Anggota</span>
            </h5>
            <span className="CloseIcon" onClick={this.handleClickClose}>
              <FontAwesomeIcon icon={faTimes} />
            </span>
          </div>
          <div className="Body">
            <div className="Tab">
              <div
                className="SingleTabWrapper Active"
                ref={this.biodataTabRef}
                onClick={event => this.handleClickTab(event, "Biodata")}
              >
                <span className="SingleTab Biodata">Biodata</span>
              </div>
              <div
                className="SingleTabWrapper"
                ref={this.kepartaianTabRef}
                onClick={event => this.handleClickTab(event, "Kepartaian")}
              >
                <span className="SingleTab Kepartaian">Kepartaian</span>
              </div>
            </div>
            <div className="Content">
              <Biodata ref={this.BiodataRef} />
              <Kepartaian ref={this.KepartaianRef} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class AddAnggota extends React.Component {
  constructor(props) {
    super(props);
    this.PopupAddAnggotaRef = React.createRef();
    this.handleClickAddAnggota = this.handleClickAddAnggota.bind(this);
  }

  handleClickAddAnggota(event) {
    this.PopupAddAnggotaRef.current.popupAddAnggotaRef.current.classList.add("Active");
    event.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
        <div className="AddAnggotaButton" onClick={this.handleClickAddAnggota}>
          <FontAwesomeIcon icon={faPlus} />
          <span>Tambah Anggota</span>
        </div>
        <PopupAddAnggota ref={this.PopupAddAnggotaRef} />
      </React.Fragment>
    );
  }
}

export default AddAnggota;
