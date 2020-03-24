import React, { Component } from "react";
import "./style.css";
import "./../../grid.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faList, faTh } from "@fortawesome/free-solid-svg-icons";

class Kepartaian extends Component {
  render() {
    return (
      <div className="box-content row">
        <fieldset className="box-item column-6 bg-c5">
          <legend className="label">Structures</legend>
          <div>
            <span>Las Vegas, st.monaco no.666</span>
          </div>
        </fieldset>
        <fieldset className="box-item column-6 bg-c5">
          <legend className="label">Departements</legend>
          <span>0867699654321</span>
        </fieldset>
        <fieldset className="box-item column-6 bg-c5">
          <legend className="label">AKP</legend>
          <span>Singapore International University</span>
        </fieldset>
        <fieldset className="box-item column-6 bg-c5">
          <legend className="label">Committees</legend>
          <span>IT konsultan</span>
        </fieldset>
        <fieldset className="box-item column-6 bg-c5">
          <legend className="label">Partyschool</legend>
          <span>Japan</span>
        </fieldset>
        <fieldset className="box-item column-6 bg-c5">
          <legend className="label">Assignment</legend>
          <span>Teman-teman bulu burung</span>
        </fieldset>
        <fieldset className="box-item column-6 bg-c5">
          <legend className="label">Komunitas Juang</legend>
          <span>Pintar</span>
        </fieldset>
      </div>
    );
  }
}

class Biodata extends Component {
  render() {
    return (
      <div className="box-content row">
        <div className="box-item column-6 ">
          <fieldset className=" bg-c5">
            <legend className="label">Address</legend>
            <span className="tx-c6">Las Vegas, st.monaco no.666</span>
          </fieldset>
        </div>
        <div className="box-item column-6 ">
          <fieldset className=" bg-c5">
            <legend className="label">Contacts</legend>
            <div>
              <span className="tx-c6">0867699654321</span>
            </div>
          </fieldset>
        </div>
        <div className="box-item column-6 ">
          <fieldset className=" bg-c5">
            <legend className="label">Educations</legend>
            <div>
              <span className="tx-c6">0867699654321</span>
            </div>
          </fieldset>
        </div>
        <div className="box-item column-6 ">
          <fieldset className=" bg-c5">
            <legend className="label">Jobs</legend>
            <div>
              <span className="tx-c6">0867699654321</span>
            </div>
          </fieldset>
        </div>
        <div className="box-item column-6 ">
          <fieldset className=" bg-c5">
            <legend className="label">Langage</legend>
            <div>
              <span className="tx-c6">0867699654321</span>
            </div>
          </fieldset>
        </div>
        <div className="box-item column-6 ">
          <fieldset className=" bg-c5">
            <legend className="label">Organizations</legend>
            <div>
              <span className="tx-c6">0867699654321</span>
            </div>
          </fieldset>
        </div>
        <div className="box-item column-6 ">
          <fieldset className=" bg-c5">
            <legend className="label">Talents</legend>
            <div>
              <span className="tx-c6">0867699654321</span>
            </div>
          </fieldset>
        </div>
      </div>
    );
  }
}

class DetailBody extends Component {
  render() {
    return <Biodata />;
  }
}

class DetailHeader extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="box-anggota">
          <div
            className="anggota-photo"
            style={{
              backgroundImage: `url(${require("../../photos/photo1.jpg")})`
            }}
          ></div>
          <div className="anggota-atribute">
            <span className="Name tx-c4">BUDI TORTELINI UWAWWWW YAY</span>
            <div className="NoKTA bg-c5">9922090922309201</div>
            <div className="Jabatan tx-c6">Presiden</div>
            <div className="Wilayah ">Kota Salatiga</div>
          </div>
        </div>
        <div className="box-menu">
          <ul className="menu-wrap tx-c6">
            <li className="menu active">
              <span>Biodata</span>
            </li>
            <li className="menu">
              <span>Kepartaian</span>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

class DetailArea extends Component {
  render() {
    return (
      <div className="full-overlay">
        <div className="Detail">
          <span className="anggota-close">
            <span className="close-icon">
              <FontAwesomeIcon icon={faTimes} size="2x" />
            </span>
          </span>
          <div className="bg-c1">
            <DetailHeader />
            <DetailBody />
          </div>
        </div>
      </div>
    );
  }
}

class Preview extends Component {
  render() {
    return (
      <div className="Preview">
        <div className="HeadDataAnggota">
          <div className="ResultData">
            <span>
              Menampilkan <span className="bold tx-c7">10</span> Data
            </span>
          </div>
          <div className="DisplayDataBy">
            <div className="ByGrid Active">
              <FontAwesomeIcon icon={faTh} />
            </div>
            <div className="ByList">
              <FontAwesomeIcon icon={faList} />
            </div>
          </div>
        </div>
        <div className="BodyDataAnggota row no-gutters bg-c5">
          <div className="SingleDataAnggota">
            <div className="BoxSingleDataAnggota bg-c1">
              <div className="PreviewDataAnggota">
                <div
                  className="Foto"
                  style={{
                    backgroundImage: `url(${require("../../photos/photo1.jpg")})`
                  }}
                ></div>
                <div className="Nama tx-c4">Kimono Budi Fuzzy</div>
                <div className="NoKTA bg-c5">9922090922309201</div>
                <div className="Jabatan tx-c6">Presiden</div>
                <div className="Wilayah tx-c7">Kota Salatiga</div>
              </div>
              <div className="BoxOverlay">
                <div className="ViewDetailButton">Lihat Profil</div>
              </div>
            </div>
          </div>
          <div className="SingleDataAnggota">
            <div className="BoxSingleDataAnggota bg-c1">
              <div className="PreviewDataAnggota">
                <div
                  className="Foto"
                  style={{
                    backgroundImage: `url(${require("../../photos/photo2.jpg")})`
                  }}
                ></div>
                <div className="Nama tx-c4">Kimono Budi Fuzzy</div>
                <div className="NoKTA bg-c5">9922090922309201</div>
                <div className="Jabatan tx-c6">Presiden</div>
                <div className="Wilayah tx-c7">Kota Salatiga</div>
              </div>
              <div className="BoxOverlay">
                <div className="ViewDetailButton">Lihat Profil</div>
              </div>
            </div>
          </div>
          <div className="SingleDataAnggota">
            <div className="BoxSingleDataAnggota bg-c1">
              <div className="PreviewDataAnggota">
                <div
                  className="Foto"
                  style={{
                    backgroundImage: `url(${require("../../photos/photo3.jpg")})`
                  }}
                ></div>
                <div className="Nama tx-c4">Kimono Budi Fuzzy</div>
                <div className="NoKTA bg-c5">9922090922309201</div>
                <div className="Jabatan tx-c6">Presiden</div>
                <div className="Wilayah tx-c7">Kota Salatiga</div>
              </div>
              <div className="BoxOverlay">
                <div className="ViewDetailButton">Lihat Profil</div>
              </div>
            </div>
          </div>
          <div className="SingleDataAnggota">
            <div className="BoxSingleDataAnggota bg-c1">
              <div className="PreviewDataAnggota">
                <div
                  className="Foto"
                  style={{
                    backgroundImage: `url(${require("../../photos/photo1.jpg")})`
                  }}
                ></div>
                <div className="Nama tx-c4">Kimono Budi Fuzzy</div>
                <div className="NoKTA bg-c5">9922090922309201</div>
                <div className="Jabatan tx-c6">Presiden</div>
                <div className="Wilayah tx-c7">Kota Salatiga</div>
              </div>
              <div className="BoxOverlay">
                <div className="ViewDetailButton">Lihat Profil</div>
              </div>
            </div>
          </div>
          <div className="SingleDataAnggota">
            <div className="BoxSingleDataAnggota bg-c1">
              <div className="PreviewDataAnggota">
                <div
                  className="Foto"
                  style={{
                    backgroundImage: `url(${require("../../photos/photo1.jpg")})`
                  }}
                ></div>
                <div className="Nama tx-c4">Kimono Budi Fuzzy</div>
                <div className="NoKTA bg-c5">9922090922309201</div>
                <div className="Jabatan tx-c6">Presiden</div>
                <div className="Wilayah tx-c7">Kota Salatiga</div>
              </div>
              <div className="BoxOverlay">
                <div className="ViewDetailButton">Lihat Profil</div>
              </div>
            </div>
          </div>
          <div className="SingleDataAnggota">
            <div className="BoxSingleDataAnggota bg-c1">
              <div className="PreviewDataAnggota">
                <div
                  className="Foto"
                  style={{
                    backgroundImage: `url(${require("../../photos/photo2.jpg")})`
                  }}
                ></div>
                <div className="Nama tx-c4">Kimono Budi Fuzzy</div>
                <div className="NoKTA bg-c5">9922090922309201</div>
                <div className="Jabatan tx-c6">Presiden</div>
                <div className="Wilayah tx-c7">Kota Salatiga</div>
              </div>
              <div className="BoxOverlay">
                <div className="ViewDetailButton">Lihat Profil</div>
              </div>
            </div>
          </div>
          <div className="SingleDataAnggota">
            <div className="BoxSingleDataAnggota bg-c1">
              <div className="PreviewDataAnggota">
                <div
                  className="Foto"
                  style={{
                    backgroundImage: `url(${require("../../photos/photo3.jpg")})`
                  }}
                ></div>
                <div className="Nama tx-c4">Kimono Budi Fuzzy</div>
                <div className="NoKTA bg-c5">9922090922309201</div>
                <div className="Jabatan tx-c6">Presiden</div>
                <div className="Wilayah tx-c7">Kota Salatiga</div>
              </div>
              <div className="BoxOverlay">
                <div className="ViewDetailButton">Lihat Profil</div>
              </div>
            </div>
          </div>
          <div className="SingleDataAnggota">
            <div className="BoxSingleDataAnggota bg-c1">
              <div className="PreviewDataAnggota">
                <div
                  className="Foto"
                  style={{
                    backgroundImage: `url(${require("../../photos/photo1.jpg")})`
                  }}
                ></div>
                <div className="Nama tx-c4">Kimono Budi Fuzzy</div>
                <div className="NoKTA bg-c5">9922090922309201</div>
                <div className="Jabatan tx-c6">Presiden</div>
                <div className="Wilayah tx-c7">Kota Salatiga</div>
              </div>
              <div className="BoxOverlay">
                <div className="ViewDetailButton">Lihat Profil</div>
              </div>
            </div>
          </div>
          <div className="SingleDataAnggota">
            <div className="BoxSingleDataAnggota bg-c1">
              <div className="PreviewDataAnggota">
                <div
                  className="Foto"
                  style={{
                    backgroundImage: `url(${require("../../photos/photo2.jpg")})`
                  }}
                ></div>
                <div className="Nama tx-c4">Kimono Budi Fuzzy</div>
                <div className="NoKTA bg-c5">9922090922309201</div>
                <div className="Jabatan tx-c6">Presiden</div>
                <div className="Wilayah tx-c7">Kota Salatiga</div>
              </div>
              <div className="BoxOverlay">
                <div className="ViewDetailButton">Lihat Profil</div>
              </div>
            </div>
          </div>
          <div className="SingleDataAnggota">
            <div className="BoxSingleDataAnggota bg-c1">
              <div className="PreviewDataAnggota">
                <div
                  className="Foto"
                  style={{
                    backgroundImage: `url(${require("../../photos/photo3.jpg")})`
                  }}
                ></div>
                <div className="Nama tx-c4">Kimono Budi Fuzzy</div>
                <div className="NoKTA bg-c5">9922090922309201</div>
                <div className="Jabatan tx-c6">Presiden</div>
                <div className="Wilayah tx-c7">Kota Salatiga</div>
              </div>
              <div className="BoxOverlay">
                <div className="ViewDetailButton">Lihat Profil</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Preview;
