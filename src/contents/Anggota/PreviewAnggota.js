import React from "react";
import "./style.css";
import "./../../grid.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faList,
  faTh,
  faEye,
  faPlus,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import DetailAnggota from "./DetailAnggota";

class GridPreview extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickLihatProfil = this.handleClickLihatProfil.bind(this);
  }

  handleClickLihatProfil(event, noKTA) {
    this.props.onLihatProfilClicked(noKTA);
    event.preventDefault();
  }

  render() {
    return (
      <div className="GridPreview row no-gutters">
        <div className="SingleDataAnggota">
          <div className="BoxSingleDataAnggota">
            <div className="InnerBoxTopWrapper">
              <div className="InnerBoxTop">
                <FontAwesomeIcon icon={faPlus} />
              </div>
            </div>
            <div className="InnerBoxBottomWrapper">
              <div className="FloatBox AddAnggotaBaru">
                <span className="FloatBoxContent">Tambah Anggota Baru</span>
              </div>
            </div>
          </div>
        </div>
        <div className="SingleDataAnggota">
          <div className="BoxSingleDataAnggota">
            <div className="InnerBoxTopWrapper">
              <div className="InnerBoxTop">
                <div
                  className="Foto"
                  style={{
                    backgroundImage: `url(${require("../../photos/photo1.jpg")})`,
                  }}
                ></div>
                <div className="Nama">Sugeno Fuzzy</div>
                <div className="Jabatan">Ketua DPC</div>
                <div className="Wilayah">Kabupaten Magelang</div>
              </div>
            </div>
            <div className="InnerBoxBottomWrapper">
              <div className="FloatBox">
                <span className="FloatBoxContent NoKTA">
                  33093020082307890001
                </span>
              </div>
            </div>
            <div className="BoxOverlay">
              <div
                className="ViewProfileButton"
                onClick={(event) =>
                  this.handleClickLihatProfil(event, "9922090922309201")
                }
              >
                <FontAwesomeIcon icon={faEye} />
                <span>Lihat Profil</span>
              </div>
            </div>
          </div>
        </div>
        <div className="SingleDataAnggota">
          <div className="BoxSingleDataAnggota">
            <div className="InnerBoxTopWrapper">
              <div className="InnerBoxTop">
                <div
                  className="Foto"
                  style={{
                    backgroundImage: `url(${require("../../photos/photo1.jpg")})`,
                  }}
                ></div>
                <div className="Nama">Sugeno Fuzzy</div>
                <div className="Jabatan">Ketua DPC</div>
                <div className="Wilayah">Kabupaten Magelang</div>
              </div>
            </div>
            <div className="InnerBoxBottomWrapper">
              <div className="FloatBox">
                <span className="FloatBoxContent NoKTA">
                  33093020082307890001
                </span>
              </div>
            </div>
            <div className="BoxOverlay">
              <div
                className="ViewProfileButton"
                onClick={(event) =>
                  this.handleClickLihatProfil(event, "9922090922309201")
                }
              >
                <FontAwesomeIcon icon={faEye} />
                <span>Lihat Profil</span>
              </div>
            </div>
          </div>
        </div>
        <div className="SingleDataAnggota">
          <div className="BoxSingleDataAnggota">
            <div className="InnerBoxTopWrapper">
              <div className="InnerBoxTop">
                <div
                  className="Foto"
                  style={{
                    backgroundImage: `url(${require("../../photos/photo1.jpg")})`,
                  }}
                ></div>
                <div className="Nama">Sugeno Fuzzy</div>
                <div className="Jabatan">Ketua DPC</div>
                <div className="Wilayah">Kabupaten Magelang</div>
              </div>
            </div>
            <div className="InnerBoxBottomWrapper">
              <div className="FloatBox">
                <span className="FloatBoxContent NoKTA">
                  33093020082307890001
                </span>
              </div>
            </div>
            <div className="BoxOverlay">
              <div
                className="ViewProfileButton"
                onClick={(event) =>
                  this.handleClickLihatProfil(event, "9922090922309201")
                }
              >
                <FontAwesomeIcon icon={faEye} />
                <span>Lihat Profil</span>
              </div>
            </div>
          </div>
        </div>
        <div className="SingleDataAnggota">
          <div className="BoxSingleDataAnggota">
            <div className="InnerBoxTopWrapper">
              <div className="InnerBoxTop">
                <div
                  className="Foto"
                  style={{
                    backgroundImage: `url(${require("../../photos/photo1.jpg")})`,
                  }}
                ></div>
                <div className="Nama">Sugeno Fuzzy</div>
                <div className="Jabatan">Ketua DPC</div>
                <div className="Wilayah">Kabupaten Magelang</div>
              </div>
            </div>
            <div className="InnerBoxBottomWrapper">
              <div className="FloatBox">
                <span className="FloatBoxContent NoKTA">
                  33093020082307890001
                </span>
              </div>
            </div>
            <div className="BoxOverlay">
              <div
                className="ViewProfileButton"
                onClick={(event) =>
                  this.handleClickLihatProfil(event, "9922090922309201")
                }
              >
                <FontAwesomeIcon icon={faEye} />
                <span>Lihat Profil</span>
              </div>
            </div>
          </div>
        </div>
        <div className="SingleDataAnggota">
          <div className="BoxSingleDataAnggota">
            <div className="InnerBoxTopWrapper">
              <div className="InnerBoxTop">
                <div
                  className="Foto"
                  style={{
                    backgroundImage: `url(${require("../../photos/photo1.jpg")})`,
                  }}
                ></div>
                <div className="Nama">Sugeno Fuzzy</div>
                <div className="Jabatan">Ketua DPC</div>
                <div className="Wilayah">Kabupaten Magelang</div>
              </div>
            </div>
            <div className="InnerBoxBottomWrapper">
              <div className="FloatBox">
                <span className="FloatBoxContent NoKTA">
                  33093020082307890001
                </span>
              </div>
            </div>
            <div className="BoxOverlay">
              <div
                className="ViewProfileButton"
                onClick={(event) =>
                  this.handleClickLihatProfil(event, "9922090922309201")
                }
              >
                <FontAwesomeIcon icon={faEye} />
                <span>Lihat Profil</span>
              </div>
            </div>
          </div>
        </div>
        <div className="SingleDataAnggota">
          <div className="BoxSingleDataAnggota">
            <div className="InnerBoxTopWrapper">
              <div className="InnerBoxTop">
                <div
                  className="Foto"
                  style={{
                    backgroundImage: `url(${require("../../photos/photo1.jpg")})`,
                  }}
                ></div>
                <div className="Nama">Sugeno Fuzzy</div>
                <div className="Jabatan">Ketua DPC</div>
                <div className="Wilayah">Kabupaten Magelang</div>
              </div>
            </div>
            <div className="InnerBoxBottomWrapper">
              <div className="FloatBox">
                <span className="FloatBoxContent NoKTA">
                  33093020082307890001
                </span>
              </div>
            </div>
            <div className="BoxOverlay">
              <div
                className="ViewProfileButton"
                onClick={(event) =>
                  this.handleClickLihatProfil(event, "9922090922309201")
                }
              >
                <FontAwesomeIcon icon={faEye} />
                <span>Lihat Profil</span>
              </div>
            </div>
          </div>
        </div>
        <div className="SingleDataAnggota">
          <div className="BoxSingleDataAnggota">
            <div className="InnerBoxTopWrapper">
              <div className="InnerBoxTop">
                <div
                  className="Foto"
                  style={{
                    backgroundImage: `url(${require("../../photos/photo1.jpg")})`,
                  }}
                ></div>
                <div className="Nama">Sugeno Fuzzy</div>
                <div className="Jabatan">Ketua DPC</div>
                <div className="Wilayah">Kabupaten Magelang</div>
              </div>
            </div>
            <div className="InnerBoxBottomWrapper">
              <div className="FloatBox">
                <span className="FloatBoxContent NoKTA">
                  33093020082307890001
                </span>
              </div>
            </div>
            <div className="BoxOverlay">
              <div
                className="ViewProfileButton"
                onClick={(event) =>
                  this.handleClickLihatProfil(event, "9922090922309201")
                }
              >
                <FontAwesomeIcon icon={faEye} />
                <span>Lihat Profil</span>
              </div>
            </div>
          </div>
        </div>
        <div className="SingleDataAnggota">
          <div className="BoxSingleDataAnggota">
            <div className="InnerBoxTopWrapper">
              <div className="InnerBoxTop">
                <div
                  className="Foto"
                  style={{
                    backgroundImage: `url(${require("../../photos/photo1.jpg")})`,
                  }}
                ></div>
                <div className="Nama">Sugeno Fuzzy</div>
                <div className="Jabatan">Ketua DPC</div>
                <div className="Wilayah">Kabupaten Magelang</div>
              </div>
            </div>
            <div className="InnerBoxBottomWrapper">
              <div className="FloatBox">
                <span className="FloatBoxContent NoKTA">
                  33093020082307890001
                </span>
              </div>
            </div>
            <div className="BoxOverlay">
              <div
                className="ViewProfileButton"
                onClick={(event) =>
                  this.handleClickLihatProfil(event, "9922090922309201")
                }
              >
                <FontAwesomeIcon icon={faEye} />
                <span>Lihat Profil</span>
              </div>
            </div>
          </div>
        </div>
        <div className="SingleDataAnggota">
          <div className="BoxSingleDataAnggota">
            <div className="InnerBoxTopWrapper">
              <div className="InnerBoxTop">
                <div
                  className="Foto"
                  style={{
                    backgroundImage: `url(${require("../../photos/photo1.jpg")})`,
                  }}
                ></div>
                <div className="Nama">Sugeno Fuzzy</div>
                <div className="Jabatan">Ketua DPC</div>
                <div className="Wilayah">Kabupaten Magelang</div>
              </div>
            </div>
            <div className="InnerBoxBottomWrapper">
              <div className="FloatBox">
                <span className="FloatBoxContent NoKTA">
                  33093020082307890001
                </span>
              </div>
            </div>
            <div className="BoxOverlay">
              <div
                className="ViewProfileButton"
                onClick={(event) =>
                  this.handleClickLihatProfil(event, "9922090922309201")
                }
              >
                <FontAwesomeIcon icon={faEye} />
                <span>Lihat Profil</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class ListPreview extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickLihatProfil = this.handleClickLihatProfil.bind(this);
  }

  handleClickLihatProfil(event, noKTA) {
    this.props.onLihatProfilClicked(noKTA);
    event.preventDefault();
  }

  render() {
    return (
      <div className="ListPreview">
        <table className="ListPreviewTable">
          <thead>
            <tr>
              <th>No.</th>
              <th>Nama</th>
              <th>No. KTA</th>
              <th>Jabatan</th>
              <th>Wilayah</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr className="SingleDataAnggota" key="9922090922309201">
              <td className="No">1.</td>
              <td className="Nama">Sugeno Moto Fuzzy</td>
              <td className="NoKTA">9922090922309201</td>
              <td className="Jabatan">Presiden</td>
              <td className="Wilayah">Kota Salatiga</td>
              <td className="Aksi">
                <div
                  className="ViewDetailButton"
                  onClick={(event) =>
                    this.handleClickLihatProfil(event, "9922090922309201")
                  }
                >
                  <FontAwesomeIcon icon={faEye} />
                  <span>Lihat Profil</span>
                </div>
              </td>
            </tr>
            <tr className="SingleDataAnggota" key="9922090922309202">
              <td className="No">2.</td>
              <td className="Nama">Sugeno Moto Fuzzy</td>
              <td className="NoKTA">9922090922309201</td>
              <td className="Jabatan">Presiden</td>
              <td className="Wilayah">Kota Salatiga</td>
              <td className="Aksi">
                <div
                  className="ViewDetailButton"
                  onClick={(event) =>
                    this.handleClickLihatProfil(event, "9922090922309202")
                  }
                >
                  <FontAwesomeIcon icon={faEye} />
                  <span>Lihat Profil</span>
                </div>
              </td>
            </tr>
            <tr className="SingleDataAnggota" key="9922090922309203">
              <td className="No">3.</td>
              <td className="Nama">Sugeno Moto Fuzzy</td>
              <td className="NoKTA">9922090922309201</td>
              <td className="Jabatan">Presiden</td>
              <td className="Wilayah">Kota Salatiga</td>
              <td className="Aksi">
                <div
                  className="ViewDetailButton"
                  onClick={(event) =>
                    this.handleClickLihatProfil(event, "9922090922309203")
                  }
                >
                  <FontAwesomeIcon icon={faEye} />
                  <span>Lihat Profil</span>
                </div>
              </td>
            </tr>
            <tr className="SingleDataAnggota" key="9922090922309204">
              <td className="No">4.</td>
              <td className="Nama">Sugeno Moto Fuzzy</td>
              <td className="NoKTA">9922090922309201</td>
              <td className="Jabatan">Presiden</td>
              <td className="Wilayah">Kota Salatiga</td>
              <td className="Aksi">
                <div
                  className="ViewDetailButton"
                  onClick={(event) =>
                    this.handleClickLihatProfil(event, "9922090922309204")
                  }
                >
                  <FontAwesomeIcon icon={faEye} />
                  <span>Lihat Profil</span>
                </div>
              </td>
            </tr>
            <tr className="SingleDataAnggota" key="9922090922309205">
              <td className="No">5.</td>
              <td className="Nama">Sugeno Moto Fuzzy</td>
              <td className="NoKTA">9922090922309201</td>
              <td className="Jabatan">Presiden</td>
              <td className="Wilayah">Kota Salatiga</td>
              <td className="Aksi">
                <div
                  className="ViewDetailButton"
                  onClick={(event) =>
                    this.handleClickLihatProfil(event, "9922090922309205")
                  }
                >
                  <FontAwesomeIcon icon={faEye} />
                  <span>Lihat Profil</span>
                </div>
              </td>
            </tr>
            <tr className="SingleDataAnggota" key="9922090922309206">
              <td className="No">6.</td>
              <td className="Nama">Sugeno Moto Fuzzy</td>
              <td className="NoKTA">9922090922309201</td>
              <td className="Jabatan">Presiden</td>
              <td className="Wilayah">Kota Salatiga</td>
              <td className="Aksi">
                <div
                  className="ViewDetailButton"
                  onClick={(event) =>
                    this.handleClickLihatProfil(event, "9922090922309206")
                  }
                >
                  <FontAwesomeIcon icon={faEye} />
                  <span>Lihat Profil</span>
                </div>
              </td>
            </tr>
            <tr className="SingleDataAnggota" key="9922090922309207">
              <td className="No">7.</td>
              <td className="Nama">Sugeno Moto Fuzzy</td>
              <td className="NoKTA">9922090922309201</td>
              <td className="Jabatan">Presiden</td>
              <td className="Wilayah">Kota Salatiga</td>
              <td className="Aksi">
                <div
                  className="ViewDetailButton"
                  onClick={(event) =>
                    this.handleClickLihatProfil(event, "9922090922309207")
                  }
                >
                  <FontAwesomeIcon icon={faEye} />
                  <span>Lihat Profil</span>
                </div>
              </td>
            </tr>
            <tr className="SingleDataAnggota" key="9922090922309208">
              <td className="No">8.</td>
              <td className="Nama">Sugeno Moto Fuzzy</td>
              <td className="NoKTA">9922090922309201</td>
              <td className="Jabatan">Presiden</td>
              <td className="Wilayah">Kota Salatiga</td>
              <td className="Aksi">
                <div
                  className="ViewDetailButton"
                  onClick={(event) =>
                    this.handleClickLihatProfil(event, "9922090922309208")
                  }
                >
                  <FontAwesomeIcon icon={faEye} />
                  <span>Lihat Profil</span>
                </div>
              </td>
            </tr>
            <tr className="SingleDataAnggota" key="9922090922309209">
              <td className="No">9.</td>
              <td className="Nama">Sugeno Moto Fuzzy</td>
              <td className="NoKTA">9922090922309201</td>
              <td className="Jabatan">Presiden</td>
              <td className="Wilayah">Kota Salatiga</td>
              <td className="Aksi">
                <div
                  className="ViewDetailButton"
                  onClick={(event) =>
                    this.handleClickLihatProfil(event, "9922090922309209")
                  }
                >
                  <FontAwesomeIcon icon={faEye} />
                  <span>Lihat Profil</span>
                </div>
              </td>
            </tr>
            <tr className="SingleDataAnggota" key="9922090922309210">
              <td className="No">10.</td>
              <td className="Nama">Sugeno Moto Fuzzy</td>
              <td className="NoKTA">9922090922309201</td>
              <td className="Jabatan">Presiden</td>
              <td className="Wilayah">Kota Salatiga</td>
              <td className="Aksi">
                <div
                  className="ViewDetailButton"
                  onClick={(event) =>
                    this.handleClickLihatProfil(event, "9922090922309210")
                  }
                >
                  <FontAwesomeIcon icon={faEye} />
                  <span>Lihat Profil</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

class PreviewAnggota extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDataBy: "Grid",
    };
    this.byGridRef = React.createRef();
    this.byListRef = React.createRef();
    this.DetailAnggotaRef = React.createRef();
    this.handleLihatProfilClicked = this.handleLihatProfilClicked.bind(this);
  }

  handleClickDisplayDataBy(event, targetDisplayDataBy) {
    const displayDataBy = this.state.displayDataBy;
    if (displayDataBy !== targetDisplayDataBy) {
      switch (targetDisplayDataBy) {
        case "List":
          this.byGridRef.current.classList.remove("Active");
          this.byListRef.current.classList.add("Active");
          break;
        case "Grid":
        default:
          this.byListRef.current.classList.remove("Active");
          this.byGridRef.current.classList.add("Active");
      }
      this.setState({ displayDataBy: targetDisplayDataBy });
      event.preventDefault();
    }
  }

  handleLihatProfilClicked(noKTA) {
    document.body.style.overflow = "hidden";
    this.DetailAnggotaRef.current.detailAnggotaRef.current.scrollTop = 0;
    this.DetailAnggotaRef.current.detailAnggotaRef.current.classList.add(
      "Active"
    );
    this.DetailAnggotaRef.current.detailAnggotaOverlayRef.current.classList.add(
      "Active"
    );
  }

  render() {
    return (
      <div className="Preview">
        <div className="HeadDataAnggota">
          <div className="LeftHead">
            <h4>Data Anggota</h4>
          </div>
          <div className="RightHead">
            <div className="SearchBar">
              <span className="SearchIcon">
                <FontAwesomeIcon icon={faSearch} />
              </span>
              <input type="text" placeholder="Cari Nama atau No. KTA" />
            </div>
            <div className="PreviewBy">
              <div
                className="ByGrid Active"
                ref={this.byGridRef}
                onClick={(event) =>
                  this.handleClickDisplayDataBy(event, "Grid")
                }
              >
                <FontAwesomeIcon icon={faTh} />
              </div>
              <div
                className="ByList"
                ref={this.byListRef}
                onClick={(event) =>
                  this.handleClickDisplayDataBy(event, "List")
                }
              >
                <FontAwesomeIcon icon={faList} />
              </div>
            </div>
          </div>
        </div>
        <div className="BodyDataAnggota bg-c5">
          {this.state.displayDataBy === "Grid" ? (
            <GridPreview onLihatProfilClicked={this.handleLihatProfilClicked} />
          ) : (
            <ListPreview onLihatProfilClicked={this.handleLihatProfilClicked} />
          )}
        </div>
        <DetailAnggota ref={this.DetailAnggotaRef} />
      </div>
    );
  }
}

export default PreviewAnggota;
