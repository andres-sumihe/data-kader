import React from "react";
import "./style.css";
import "./../../grid.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faList,
  faTh,
  faEye,
  faUser,
  faChevronLeft,
  faChevronRight,
  faCamera,
  faIdCard,
  faSave
} from "@fortawesome/free-solid-svg-icons";

class InfoKepartaian extends React.Component {
  render() {
    return (
      <div className="Kepartaian row">
        <div className="box-item column-6">
          <fieldset>
            <legend className="label">Struktural</legend>
            <div className="content">Lorem Ipsum</div>
          </fieldset>
        </div>
        <div className="box-item column-6">
          <fieldset>
            <legend className="label">Departemen</legend>
            <div className="content">Lorem Ipsum</div>
          </fieldset>
        </div>
        <div className="box-item column-6">
          <fieldset>
            <legend className="label">Alat Kelengkapan</legend>
            <div className="content">Lorem Ipsum</div>
          </fieldset>
        </div>
        <div className="box-item column-6">
          <fieldset>
            <legend className="label">Komite</legend>
            <div className="content">Lorem Ipsum</div>
          </fieldset>
        </div>
        <div className="box-item column-6">
          <fieldset>
            <legend className="label">Sekolah Partai</legend>
            <div className="content">Lorem Ipsum</div>
          </fieldset>
        </div>
        <div className="box-item column-6">
          <fieldset>
            <legend className="label">Penugasan</legend>
            <div className="content">Lorem Ipsum</div>
          </fieldset>
        </div>
        <div className="box-item column-6">
          <fieldset>
            <legend className="label">Komunitas Juang</legend>
            <div className="content">Lorem Ipsum</div>
          </fieldset>
        </div>
      </div>
    );
  }
}

class InfoBiodata extends React.Component {
  render() {
    return (
      <div className="Biodata row">
        <div className="box-item column-6">
          <fieldset>
            <legend className="label">Wilayah</legend>
            <div className="content">Kota Salatiga</div>
          </fieldset>
        </div>
        <div className="box-item column-6">
          <fieldset>
            <legend className="label">Alamat</legend>
            <div className="content">Jl. Diponegoro No. 77</div>
          </fieldset>
        </div>
        <div className="box-item column-6">
          <fieldset>
            <legend className="label">Kontak</legend>
            <div className="content">Lorem Ipsum</div>
          </fieldset>
        </div>
        <div className="box-item column-6">
          <fieldset>
            <legend className="label">Pendidikan</legend>
            <div className="content">Lorem Ipsum</div>
          </fieldset>
        </div>
        <div className="box-item column-6">
          <fieldset>
            <legend className="label">Pekerjaan</legend>
            <div className="content">Lorem Ipsum</div>
          </fieldset>
        </div>
        <div className="box-item column-6">
          <fieldset>
            <legend className="label">Bahasa</legend>
            <div className="content">Lorem Ipsum</div>
          </fieldset>
        </div>
        <div className="box-item column-6">
          <fieldset>
            <legend className="label">Organisasi</legend>
            <div className="content">Lorem Ipsum</div>
          </fieldset>
        </div>
        <div className="box-item column-6">
          <fieldset>
            <legend className="label">Bakat</legend>
            <div className="content">Lorem Ipsum</div>
          </fieldset>
        </div>
      </div>
    );
  }
}

class DetailBodyInfoProfil extends React.Component {
  render() {
    return (
      <div className="DetailBodyInfoProfil">
        {this.props.tabActive === "Kepartaian" ? (
          <InfoKepartaian />
        ) : (
          <InfoBiodata />
        )}
      </div>
    );
  }
}

class DetailTabInfoProfil extends React.Component {
  constructor(props) {
    super(props);
    this.biodataTabRef = React.createRef();
    this.kepartaianTabRef = React.createRef();
    this.handleClickTab = this.handleClickTab.bind(this);
  }

  handleClickTab(event, tabTarget) {
    if (this.props.tabActive !== tabTarget) {
      switch (tabTarget) {
        case "Kepartaian":
          this.biodataTabRef.current.classList.remove("Active");
          this.kepartaianTabRef.current.classList.add("Active");
          break;
        case "Biodata":
        default:
          this.kepartaianTabRef.current.classList.remove("Active");
          this.biodataTabRef.current.classList.add("Active");
      }
      this.props.onTabClicked(tabTarget);
      event.preventDefault();
    }
  }

  render() {
    return (
      <div className="DetailTabInfoProfil">
        <div
          className="SingleTabWrapper Active"
          ref={this.biodataTabRef}
          onClick={event => this.handleClickTab(event, "Biodata")}
        >
          <span className="SingleTab">Biodata</span>
        </div>
        <div
          className="SingleTabWrapper"
          ref={this.kepartaianTabRef}
          onClick={event => this.handleClickTab(event, "Kepartaian")}
        >
          <span className="SingleTab">Kepartaian</span>
        </div>
      </div>
    );
  }
}

class DetailMainProfil extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickDetailKTA = this.handleClickDetailKTA.bind(this);
  }

  handleClickDetailKTA(event) {
    this.props.onDetailKTAClicked();
    event.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
        <div className="MainInfoAnggota">
          <div
            className="ProfilePhotoAnggota"
            style={{
              backgroundImage: `url(${require("../../photos/photo1.jpg")})`
            }}
          >
            <div className="ChangePhotoAnggota">
              <FontAwesomeIcon icon={faCamera} />
            </div>
          </div>
          <div className="ProfileTextAnggota">
            <div className="Nama">Sugeno Moto Fuzzy</div>
            <div className="NoKTA">
              <span>9283924245999201</span>
            </div>
            <div className="Jabatan">Presiden</div>
          </div>
        </div>
        <div className="ButtonAction">
          <div className="DetailKTAAnggota" onClick={this.handleClickDetailKTA}>
            <FontAwesomeIcon icon={faIdCard} />
            <span>Detail KTA</span>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

class DetailKTA extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickShowQRCode = this.handleClickShowQRCode.bind(this);
    this.handleClickBackToMainProfile = this.handleClickBackToMainProfile.bind(
      this
    );
  }

  handleClickShowQRCode(event) {
    this.props.onShowQRCodeClicked();
    event.preventDefault();
  }

  handleClickBackToMainProfile(event) {
    this.props.onBackToMainProfileClicked();
    event.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
        <div className="KTACard">
          <img src={require("../../photos/photo4.jpeg")} alt="KTA" />
        </div>
        <div className="ButtonAction">
          <div
            className="BackToMainProfile"
            onClick={this.handleClickBackToMainProfile}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
            <span>Kembali</span>
          </div>
          <div className="ShowQRCode" onClick={this.handleClickShowQRCode}>
            <FontAwesomeIcon icon={faEye} />
            <span>Tampilkan QR Code</span>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

class DetailHeadInfoProfil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headInfoProfilActive: "Info Profil"
    };
    this.handleDetailKTAClicked = this.handleDetailKTAClicked.bind(this);
    this.handleBackToMainProfileClicked = this.handleBackToMainProfileClicked.bind(
      this
    );
    this.handleClickClose = this.handleClickClose.bind(this);
    this.handleShowQRCodeClicked = this.handleShowQRCodeClicked.bind(this);
  }

  handleDetailKTAClicked() {
    this.setState({ headInfoProfilActive: "Detail KTA" });
  }

  handleBackToMainProfileClicked() {
    this.setState({ headInfoProfilActive: "Info Profil" });
  }

  handleClickClose(event) {
    this.props.onCloseClicked();
    event.preventDefault();
  }

  handleShowQRCodeClicked() {
    this.props.onShowQRCodeClicked();
  }

  render() {
    const headInfoProfilActive = this.state.headInfoProfilActive;
    return (
      <React.Fragment>
        <div className="DetailHeadTopInfoProfil">
          <h5>
            <FontAwesomeIcon icon={faUser} />
            <span>Info Profil</span>
          </h5>
          <span className="CloseIcon" onClick={this.handleClickClose}>
            <FontAwesomeIcon icon={faTimes} />
          </span>
        </div>
        <div className="DetailHeadBodyInfoProfil">
          {headInfoProfilActive === "Detail KTA" ? (
            <DetailKTA
              onBackToMainProfileClicked={this.handleBackToMainProfileClicked}
              onShowQRCodeClicked={this.handleShowQRCodeClicked}
            />
          ) : (
            <DetailMainProfil
              onDetailKTAClicked={this.handleDetailKTAClicked}
            />
          )}
        </div>
      </React.Fragment>
    );
  }
}

class DetailInfoProfil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabActive: "Biodata"
    };
    this.handleTabClicked = this.handleTabClicked.bind(this);
    this.handleCloseClicked = this.handleCloseClicked.bind(this);
    this.handleShowQRCodeClicked = this.handleShowQRCodeClicked.bind(this);
  }

  handleTabClicked(tabTarget) {
    this.setState({ tabActive: tabTarget });
  }

  handleCloseClicked() {
    this.props.onCloseClicked();
  }

  handleShowQRCodeClicked() {
    this.props.onShowQRCodeClicked();
  }

  render() {
    return (
      <div className="DetailInfoProfil Active">
        <DetailHeadInfoProfil
          onCloseClicked={this.handleCloseClicked}
          onShowQRCodeClicked={this.handleShowQRCodeClicked}
        />
        <DetailTabInfoProfil
          tabActive={this.state.tabActive}
          onTabClicked={this.handleTabClicked}
        />
        <DetailBodyInfoProfil tabActive={this.state.tabActive} />
      </div>
    );
  }
}

class EditKepartaian extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputType = this.handleInputType.bind(this);
  }

  handleInputType(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form className="Kepartaian">
        <table className="InputWrapper">
          <tbody>
            <tr className="SingleInput">
              <td className="Label">
                <label htmlFor="KepartaianStruktural">Struktural</label>
              </td>
              <td className="Value">
                <input
                  type="text"
                  value="Lorem Ipsum"
                  onChange={this.handleInputType}
                  id="KepartaianStruktural"
                />
              </td>
            </tr>
            <tr className="SingleInput">
              <td className="Label">
                <label htmlFor="KepartaianDepartemen">Departemen</label>
              </td>
              <td className="Value">
                <input
                  type="text"
                  value="Lorem Ipsum"
                  onChange={this.handleInputType}
                  id="KepartaianDepartemen"
                />
              </td>
            </tr>
            <tr className="SingleInput">
              <td className="Label">
                <label htmlFor="KepartaianAlatKelengkapan">
                  Alat Kelengkapan
                </label>
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
                <input
                  type="text"
                  value="Lorem Ipsum"
                  onChange={this.handleInputType}
                  id="KepartaianSekolahPartai"
                />
              </td>
            </tr>
            <tr className="SingleInput">
              <td className="Label">
                <label htmlFor="KepartaianPenugasan">Penugasan</label>
              </td>
              <td className="Value">
                <input
                  type="text"
                  value="Lorem Ipsum"
                  onChange={this.handleInputType}
                  id="KepartaianPenugasan"
                />
              </td>
            </tr>
            <tr className="SingleInput">
              <td className="Label">
                <label htmlFor="KepartaianKomunitasJuang">
                  Komunitas Juang
                </label>
              </td>
              <td className="Value">
                <input
                  type="text"
                  value="Lorem Ipsum"
                  onChange={this.handleInputType}
                  id="KepartaianKomunitasJuang"
                />
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
class EditBiodata extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputType = this.handleInputType.bind(this);
  }

  handleInputType(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form className="Biodata">
        <table className="InputWrapper">
          <tbody>
            <tr className="SingleInput">
              <td className="Label">
                <label htmlFor="BiodataNama">Nama</label>
              </td>
              <td className="Value">
                <input
                  type="text"
                  value="Lorem Ipsum"
                  onChange={this.handleInputType}
                  id="BiodataNama"
                />
              </td>
            </tr>
            <tr className="SingleInput">
              <td className="Label">
                <label htmlFor="BiodataNoKTA">No. KTA</label>
              </td>
              <td className="Value">
                <input
                  type="text"
                  value="Lorem Ipsum"
                  onChange={this.handleInputType}
                  id="BiodataNoKTA"
                />
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
                <label htmlFor="BiodataJabatan">Jabatan</label>
              </td>
              <td className="Value">
                <input
                  type="text"
                  value="Lorem Ipsum"
                  onChange={this.handleInputType}
                  id="BiodataJabatan"
                />
              </td>
            </tr>
            <tr className="SingleInput">
              <td className="Label">
                <label htmlFor="BiodataWilayah">Wilayah</label>
              </td>
              <td className="Value">
                <input
                  type="text"
                  value="Lorem Ipsum"
                  onChange={this.handleInputType}
                  id="BiodataWilayah"
                />
              </td>
            </tr>
            <tr className="SingleInput">
              <td className="Label">
                <label htmlFor="BiodataAlamat">Alamat</label>
              </td>
              <td className="Value">
                <input
                  type="text"
                  value="Lorem Ipsum"
                  onChange={this.handleInputType}
                  id="BiodataAlamat"
                />
              </td>
            </tr>
            <tr className="SingleInput">
              <td className="Label">
                <label htmlFor="BiodataKontak">Kontak</label>
              </td>
              <td className="Value">
                <input
                  type="text"
                  value="Lorem Ipsum"
                  onChange={this.handleInputType}
                  id="BiodataKontak"
                />
              </td>
            </tr>
            <tr className="SingleInput">
              <td className="Label">
                <label htmlFor="BiodataPendidikan">Pendidikan</label>
              </td>
              <td className="Value">
                <input
                  type="text"
                  value="Lorem Ipsum"
                  onChange={this.handleInputType}
                  id="BiodataPendidikan"
                />
              </td>
            </tr>
            <tr className="SingleInput">
              <td className="Label">
                <label htmlFor="BiodataPekerjaan">Pekerjaan</label>
              </td>
              <td className="Value">
                <input
                  type="text"
                  value="Lorem Ipsum"
                  onChange={this.handleInputType}
                  id="BiodataPekerjaan"
                />
              </td>
            </tr>
            <tr className="SingleInput">
              <td className="Label">
                <label htmlFor="BiodataBahasa">Bahasa</label>
              </td>
              <td className="Value">
                <input
                  type="text"
                  value="Lorem Ipsum"
                  onChange={this.handleInputType}
                  id="BiodataBahasa"
                />
              </td>
            </tr>
            <tr className="SingleInput">
              <td className="Label">
                <label htmlFor="BiodataOrganisasi">Organisasi</label>
              </td>
              <td className="Value">
                <input
                  type="text"
                  value="Lorem Ipsum"
                  onChange={this.handleInputType}
                  id="BiodataOrganisasi"
                />
              </td>
            </tr>
            <tr className="SingleInput">
              <td className="Label">
                <label htmlFor="BiodataBakat">Bakat</label>
              </td>
              <td className="Value">
                <input
                  type="text"
                  value="Lorem Ipsum"
                  onChange={this.handleInputType}
                  id="BiodataBakat"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    );
  }
}

class DetailTabEditProfil extends React.Component {
  constructor(props) {
    super(props);
    this.biodataTabRef = React.createRef();
    this.kepartaianTabRef = React.createRef();
    this.handleClickTab = this.handleClickTab.bind(this);
  }

  handleClickTab(event, tabTarget) {
    if (this.props.tabActive !== tabTarget) {
      switch (tabTarget) {
        case "Kepartaian":
          this.biodataTabRef.current.classList.remove("Active");
          this.kepartaianTabRef.current.classList.add("Active");
          break;
        case "Biodata":
        default:
          this.kepartaianTabRef.current.classList.remove("Active");
          this.biodataTabRef.current.classList.add("Active");
      }
      this.props.onTabClicked(tabTarget);
      event.preventDefault();
    }
  }

  render() {
    return (
      <div className="DetailTabEditProfil">
        <div
          className="SingleTabWrapper Active"
          ref={this.biodataTabRef}
          onClick={event => this.handleClickTab(event, "Biodata")}
        >
          <span className="SingleTab">Biodata</span>
        </div>
        <div
          className="SingleTabWrapper"
          ref={this.kepartaianTabRef}
          onClick={event => this.handleClickTab(event, "Kepartaian")}
        >
          <span className="SingleTab">Kepartaian</span>
        </div>
      </div>
    );
  }
}

class DetailHeadEditProfil extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickClose = this.handleClickClose.bind(this);
  }

  handleClickClose(event) {
    this.props.onCloseClicked();
    event.preventDefault();
  }

  render() {
    return (
      <div className="DetailHeadEditProfil">
        <h5>
          <FontAwesomeIcon icon={faUser} />
          <span>Edit Profil</span>
        </h5>
        <span className="CloseIcon" onClick={this.handleClickClose}>
          <FontAwesomeIcon icon={faTimes} />
        </span>
      </div>
    );
  }
}

class DetailBodyEditProfil extends React.Component {
  render() {
    return (
      <div className="DetailBodyEditProfil">
        {this.props.tabActive === "Kepartaian" ? (
          <EditKepartaian />
        ) : (
          <EditBiodata />
        )}
      </div>
    );
  }
}

class DetailEditProfil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabActive: "Biodata"
    };
    this.handleCloseClicked = this.handleCloseClicked.bind(this);
    this.handleTabClicked = this.handleTabClicked.bind(this);
  }

  handleCloseClicked() {
    this.props.onCloseClicked();
  }

  handleTabClicked(tabTarget) {
    this.setState({ tabActive: tabTarget });
  }

  render() {
    return (
      <div className="DetailEditProfil Active">
        <DetailHeadEditProfil onCloseClicked={this.handleCloseClicked} />
        <DetailTabEditProfil
          tabActive={this.state.tabActive}
          onTabClicked={this.handleTabClicked}
        />
        <DetailBodyEditProfil tabActive={this.state.tabActive} />
      </div>
    );
  }
}

class DetailAnggota extends React.Component {
  constructor(props) {
    super(props);
    this.detailAnggotaOverlayRef = React.createRef();
    this.detailAnggotaRef = React.createRef();
    this.QRCodeOverlayRef = React.createRef();
    this.state = {
      pageActive: "InfoProfil"
    };
    this.handleCloseClicked = this.handleCloseClicked.bind(this);
    this.handleCloseQRCode = this.handleCloseQRCode.bind(this);
    this.handleShowQRCodeClicked = this.handleShowQRCodeClicked.bind(this);
    this.handleClickStep = this.handleClickStep.bind(this);
  }

  handleClickStep(event, pageTarget) {
    if (
      (this.state.pageActive === "InfoProfil" && pageTarget === "EditProfil") ||
      (this.state.pageActive === "EditProfil" && pageTarget === "InfoProfil")
    ) {
      this.setState({ pageActive: pageTarget });
      event.preventDefault();
    }
  }

  handleCloseClicked() {
    document.body.style.overflowY = "auto";
    this.detailAnggotaRef.current.classList.remove("Active");
    this.detailAnggotaOverlayRef.current.classList.remove("Active");
  }

  handleCloseQRCode() {
    this.QRCodeOverlayRef.current.classList.remove("Active");
  }

  handleShowQRCodeClicked() {
    this.QRCodeOverlayRef.current.classList.add("Active");
  }

  render() {
    const pageActive = this.state.pageActive;
    return (
      <div
        className="full-overlay DetailAnggotaOverlay"
        ref={this.detailAnggotaOverlayRef}
      >
        <div className="DetailAnggota" ref={this.detailAnggotaRef}>
          {pageActive === "EditProfil" ? (
            <DetailEditProfil onCloseClicked={this.handleCloseClicked} />
          ) : (
            <DetailInfoProfil
              onCloseClicked={this.handleCloseClicked}
              onShowQRCodeClicked={this.handleShowQRCodeClicked}
            />
          )}
          <div className="Step">
            <div
              className={`GoToInfoProfil${
                pageActive === "InfoProfil" ? "" : " Active"
              }`}
              onClick={event => this.handleClickStep(event, "InfoProfil")}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
              <span>Info Profil</span>
            </div>
            <div
              className={`GoToEditProfil${
                pageActive === "InfoProfil" ? " Active" : ""
              }`}
              onClick={event => this.handleClickStep(event, "EditProfil")}
            >
              <span>Edit Profil</span>
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </div>
          <div className="QRCodeOverlay" ref={this.QRCodeOverlayRef}>
            <span className="CloseIcon" onClick={this.handleCloseQRCode}>
              <FontAwesomeIcon icon={faTimes} />
            </span>
            <div className="BoxQRCode">
              <div className="QRCodeArea">
                <img src={require("../../photos/photo5.png")} alt="QR Code" />
              </div>
              <div className="InfoArea">
                <div>
                  Scan <span className="bold">QRCode</span> di atas untuk
                  berteman dan kebutuhan lainnya
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailAnggota;
