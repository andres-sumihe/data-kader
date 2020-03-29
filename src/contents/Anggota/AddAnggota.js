import React from "react";
import "./style.css";
import "../../grid.css";
import "./../../skin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faUser, faPlus, faAddressCard, faChevronLeft, faChevronRight, faSave } from "@fortawesome/free-solid-svg-icons";
import Select from "react-select";

class Kepartaian extends React.Component {
  constructor(props) {
    super(props);
    this.kepartaianRef = React.createRef();
    this.handleClickSubmit = this.handleClickSubmit.bind(this);
  }

  handleClickSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form className="Kepartaian" ref={this.kepartaianRef} onSubmit={this.handleClickSubmit}>
        <table className="InputWrapper">
          <tbody>
            <tr className="SingleInput">
              <td className="Label">
                <label htmlFor="KepartaianStruktural">Struktural</label>
              </td>
              <td className="Value">
                <input type="text" id="KepartaianStruktural" value="" />
              </td>
            </tr>
            <tr className="SingleInput">
              <td className="Label">
                <label htmlFor="KepartaianDepartemen">Departemen</label>
              </td>
              <td className="Value">
                <input type="text" id="KepartaianDepartemen" value="" />
              </td>
            </tr>
            <tr className="SingleInput">
              <td className="Label">
                <label htmlFor="KepartaianAlatKelengkapan">Alat Kelengkapan</label>
              </td>
              <td className="Value">
                <input type="file" id="KepartaianAlatKelengkapan" />
              </td>
            </tr>
            <tr className="SingleInput">
              <td className="Label">
                <label htmlFor="KepartaianKomite">Komite</label>
              </td>
              <td className="Value">
                <input type="file" id="KepartaianKomite" />
              </td>
            </tr>
            <tr className="SingleInput">
              <td className="Label">
                <label htmlFor="KepartaianSekolahPartai">Sekolah Partai</label>
              </td>
              <td className="Value">
                <input type="text" id="KepartaianSekolahPartai" value="" />
              </td>
            </tr>
            <tr className="SingleInput">
              <td className="Label">
                <label htmlFor="KepartaianPenugasan">Penugasan</label>
              </td>
              <td className="Value">
                <input type="text" id="KepartaianPenugasan" value="" />
              </td>
            </tr>
            <tr className="SingleInput">
              <td className="Label">
                <label htmlFor="KepartaianKomunitasJuang">Komunitas Juang</label>
              </td>
              <td className="Value">
                <input type="text" id="KepartaianKomunitasJuang" value="" />
              </td>
            </tr>
            <tr className="SingleInput">
              <td></td>
              <td className="SubmitArea">
                <button type="submit" className="SaveButton">
                  <FontAwesomeIcon icon={faSave} />
                  <span>Simpan</span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
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
      <form className="Biodata Active" ref={this.biodataRef}>
        <table className="InputWrapper">
          <tbody>
            <tr className="SingleInput">
              <td className="Label">
                <label htmlFor="BiodataNama">Nama</label>
              </td>
              <td className="Value">
                <input type="text" id="BiodataNama" value="" />
              </td>
            </tr>
            <tr className="SingleInput">
              <td className="Label">
                <label htmlFor="BiodataNoKTA">No. KTA</label>
              </td>
              <td className="Value">
                <input type="text" id="BiodataNoKTA" value="" />
              </td>
            </tr>
            <tr className="SingleInput">
              <td className="Label">
                <label htmlFor="BiodataFotoKTA">Foto KTA</label>
              </td>
              <td className="Value">
                <input type="file" id="BiodataFotoKTA" />
              </td>
            </tr>
            <tr className="SingleInput">
              <td className="Label">
                <label htmlFor="BiodataFotoProfil">Foto Profil</label>
              </td>
              <td className="Value">
                <input type="file" id="BiodataFotoProfil" />
              </td>
            </tr>
            <tr className="SingleInput">
              <td className="Label">
                <label htmlFor="BiodataJabatan">Jabatan</label>
              </td>
              <td className="Value">
                <input type="text" id="BiodataJabatan" value="" />
              </td>
            </tr>
            <tr className="SingleInput">
              <td className="Label">
                <label htmlFor="BiodataWilayah">Wilayah</label>
              </td>
              <td className="Value">
                <input type="text" id="BiodataWilayah" value="" />
              </td>
            </tr>
            <tr className="SingleInput">
              <td className="Label">
                <label htmlFor="BiodataAlamat">Alamat</label>
              </td>
              <td className="Value">
                <input type="text" id="BiodataAlamat" value="" />
              </td>
            </tr>
            <tr className="SingleInput">
              <td className="Label">
                <label htmlFor="BiodataKontak">Kontak</label>
              </td>
              <td className="Value">
                <input type="text" id="BiodataKontak" value="" />
              </td>
            </tr>
            <tr className="SingleInput">
              <td className="Label">
                <label htmlFor="BiodataPendidikan">Pendidikan</label>
              </td>
              <td className="Value">
                <input type="text" id="BiodataPendidikan" value="" />
              </td>
            </tr>
            <tr className="SingleInput">
              <td className="Label">
                <label htmlFor="BiodataPekerjaan">Pekerjaan</label>
              </td>
              <td className="Value">
                <input type="text" id="BiodataPekerjaan" value="" />
              </td>
            </tr>
            <tr className="SingleInput">
              <td className="Label">
                <label htmlFor="BiodataBahasa">Bahasa</label>
              </td>
              <td className="Value">
                <input type="text" id="BiodataBahasa" value="" />
              </td>
            </tr>
            <tr className="SingleInput">
              <td className="Label">
                <label htmlFor="BiodataOrganisasi">Organisasi</label>
              </td>
              <td className="Value">
                <input type="text" id="BiodataOrganisasi" value="" />
              </td>
            </tr>
            <tr className="SingleInput">
              <td className="Label">
                <label htmlFor="BiodataBakat">Bakat</label>
              </td>
              <td className="Value">
                <input type="text" id="BiodataBakat" value="" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
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
    this.handleClickStep = this.handleClickStep.bind(this);
    this.handleChangeContent = this.handleChangeContent.bind(this);
  }

  handleChangeContent(target) {
    switch(target) {
      case "Kepartaian":
        this.biodataTabRef.current.classList.remove("Active");
        this.kepartaianTabRef.current.classList.add("Active");
        this.BiodataRef.current.biodataRef.current.classList.remove("Active");
        this.KepartaianRef.current.kepartaianRef.current.classList.add("Active");
      break;
      case "Biodata":
      default:
        this.kepartaianTabRef.current.classList.remove("Active");
        this.biodataTabRef.current.classList.add("Active");
        this.KepartaianRef.current.kepartaianRef.current.classList.remove("Active");
        this.BiodataRef.current.biodataRef.current.classList.add("Active");
    }
    this.setState({ tabActive: target });
  }

  handleClickStep(event, stepTarget) {
    if(this.state.tabActive === "Biodata" && stepTarget === "Next") {
      this.handleChangeContent("Kepartaian");
      event.preventDefault();
    } else if(this.state.tabActive === "Kepartaian" && stepTarget === "Prev") {
      this.handleChangeContent("Biodata");
      event.preventDefault();
    }
  }

  handleClickTab(event, tabTarget) {
    if(this.state.tabActive !== tabTarget) {
      this.handleChangeContent(tabTarget);   
      event.preventDefault();
    }
  }

  handleClickClose(event) {
    this.popupAddAnggotaRef.current.classList.remove("Active");
    event.preventDefault();
  }

  render() {
    const tabActive = this.state.tabActive;
    return (
      <div className="full-overlay PopupAddAnggota" ref={this.popupAddAnggotaRef} >
        <div className="AddAnggota">
          <div className="Head">
            <h5>
              <FontAwesomeIcon icon={faAddressCard} />
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
            <div className="Step">
              <div className={`Prev${tabActive === "Biodata" ? "" : " Active"}`} onClick={event => this.handleClickStep(event, "Prev")}>
                <FontAwesomeIcon icon={faChevronLeft} />
                <span>Sebelumnya</span>
              </div>
              <div className={`Next${tabActive === "Biodata" ? " Active" : ""}`} onClick={event => this.handleClickStep(event, "Next")}>
                <span>Berikutnya</span>
                <FontAwesomeIcon icon={faChevronRight} />
              </div>
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
