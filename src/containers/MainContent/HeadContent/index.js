import React from "react";
import "./style.css";
import "./../../../skin.css";
import { Switch, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSignOutAlt,
  faTimes,
  faCamera,
  faSave
} from "@fortawesome/free-solid-svg-icons";

class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.passwordRef = React.createRef();
    this.editProfileRef = React.createRef();
    this.handleInputType = this.handleInputType.bind(this);
    this.handleClickSubmit = this.handleClickSubmit.bind(this);
    this.handleChangeTampilkanKataSandi = this.handleChangeTampilkanKataSandi.bind(this);
  }

  handleInputType(event) {
    event.preventDefault();
  }

  handleClickSubmit(event) {
    event.preventDefault();
  }

  handleChangeTampilkanKataSandi(event) {
    this.passwordRef.current.type = event.target.checked ? "text" : "password";
  }

  render() {
    return (
      <form className="EditProfile" ref={this.editProfileRef} onSubmit={this.handleClickSubmit}>
        <table className="InfoWrapper">
          <tbody>
            <tr className="SingleInfo">
              <td className="InfoTitle">
                <label htmlFor="EditUserNamaPengguna">Nama Pengguna</label>
              </td>
              <td className="InfoValue">
                <input
                  type="text"
                  id="EditUserNamaPengguna"
                  value="John Fuzzy"
                  onChange={this.handleInputType}
                />
              </td>
            </tr>
            <tr className="SingleInfo">
              <td className="InfoTitle">
                <label htmlFor="EditUserLevel">Level</label>
              </td>
              <td className="InfoValue">
                <input
                  type="text"
                  id="EditUserLevel"
                  value="Admin"
                  disabled
                  readOnly={true}
                />
              </td>
            </tr>
            <tr className="SingleInfo">
              <td className="InfoTitle">
                <label htmlFor="EditUserKataSandi">Kata Sandi</label>
              </td>
              <td className="InfoValue">
                <input
                  type="password"
                  value="admin321"
                  ref={this.passwordRef}
                  id="EditUserKataSandi"
                  className="PasswordValue"
                  onChange={this.handleInputType}
                />
                <div className="ShowPasswordWrapper">
                  <input type="checkbox" id="EditUserTampilkanKataSandi" onChange={this.handleChangeTampilkanKataSandi} />
                  <label htmlFor="EditUserTampikanKataSandi">Tampilkan Kata Sandi</label>
                </div>
              </td>
            </tr>
            <tr className="SingleInfo">
              <td></td>
              <td className="SubmitArea">
                <button type="submit" className="saveButton">
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

class InfoProfile extends React.Component {
  constructor(props) {
    super(props);
    this.passwordRef = React.createRef();
    this.infoProfileRef = React.createRef();
    this.handleChangeTampilkanKataSandi = this.handleChangeTampilkanKataSandi.bind(this);
  }

  handleChangeTampilkanKataSandi(event) {
    this.passwordRef.current.type = event.target.checked ? "text" : "password";
  }

  render() {
    return (
      <div className="InfoProfile Active" ref={this.infoProfileRef}>
        <table className="InfoWrapper">
          <tbody>
            <tr className="SingleInfo">
              <td className="InfoTitle">Nama Pengguna</td>
              <td className="InfoValue">John Fuzzy</td>
            </tr>
            <tr className="SingleInfo">
              <td className="InfoTitle">Level</td>
              <td className="InfoValue">Admin</td>
            </tr>
            <tr className="SingleInfo">
              <td className="InfoTitle">Kata Sandi</td>
              <td className="InfoValue">
                <input
                  type="password"
                  value="admin321"
                  className="PasswordValue"
                  readOnly={true}
                  ref={this.passwordRef}
                />
                <div className="ShowPasswordWrapper">
                  <input type="checkbox" id="InfoUserTampilkanKataSandi" onChange={this.handleChangeTampilkanKataSandi} />
                  <label htmlFor="InfoUserTampilkanKataSandi">Tampilkan Kata Sandi</label>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

class MyProfile extends React.Component {
  constructor(props) {
    super(props);
    this.myProfileRef = React.createRef();
    this.InfoProfileRef = React.createRef();
    this.EditProfileRef = React.createRef();
    this.infoProfileTabRef = React.createRef();
    this.editProfileTabRef = React.createRef();
    this.state = {
      tabActive: "InfoProfil"
    };
    this.handleClickClose = this.handleClickClose.bind(this);
    this.handleClickTab = this.handleClickTab.bind(this);
  }

  handleClickTab(event, tabTarget) {
    if (this.state.tabActive !== tabTarget) {
      switch (tabTarget) {
        case "EditProfil":
          this.infoProfileTabRef.current.classList.remove("Active");
          this.editProfileTabRef.current.classList.add("Active");
          this.InfoProfileRef.current.infoProfileRef.current.classList.remove(
            "Active"
          );
          this.EditProfileRef.current.editProfileRef.current.classList.add(
            "Active"
          );
          break;
        case "InfoProfil":
        default:
          this.editProfileTabRef.current.classList.remove("Active");
          this.infoProfileTabRef.current.classList.add("Active");
          this.EditProfileRef.current.editProfileRef.current.classList.remove(
            "Active"
          );
          this.InfoProfileRef.current.infoProfileRef.current.classList.add(
            "Active"
          );
      }
      this.setState({ tabActive: tabTarget });
      event.preventDefault();
    }
  }

  handleClickClose(event) {
    this.myProfileRef.current.classList.remove("Active");
    event.preventDefault();
  }

  render() {
    return (
      <div className="full-overlay PopupMyProfile" ref={this.myProfileRef}>
        <div className="MyProfile">
          <div className="Head">
            <h5>
              <FontAwesomeIcon icon={faUser} />
              <span>Profil Saya</span>
            </h5>
            <span className="CloseIcon" onClick={this.handleClickClose}>
              <FontAwesomeIcon icon={faTimes} />
            </span>
          </div>
          <div className="Body">
            <div className="UserPhotoArea">
              <div
                className="UserPhoto"
                style={{
                  backgroundImage: `url(${require("../../../photos/photo1.jpg")})`
                }}
              >
                <div className="ChangeUserPhoto">
                  <FontAwesomeIcon icon={faCamera} />
                </div>
              </div>
            </div>
            <div className="Tab">
              <div
                className="SingleTabWrapper Active"
                ref={this.infoProfileTabRef}
                onClick={event => this.handleClickTab(event, "InfoProfil")}
              >
                <span className="SingleTab">Info Profil</span>
              </div>
              <div
                className="SingleTabWrapper"
                ref={this.editProfileTabRef}
                onClick={event => this.handleClickTab(event, "EditProfil")}
              >
                <span className="SingleTab">Edit Profil</span>
              </div>
            </div>
            <div className="Content">
              <InfoProfile ref={this.InfoProfileRef} />
              <EditProfile ref={this.EditProfileRef} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class UserAction extends React.Component {
  constructor(props) {
    super(props);
    this.userActionRef = React.createRef();
    this.MyProfileRef = React.createRef();
  }

  handleClickGoTo(event, goTo) {
    switch (goTo) {
      case "Profile":
        this.MyProfileRef.current.myProfileRef.current.classList.add("Active");
        event.preventDefault();
        break;
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="UserAction" ref={this.userActionRef}>
          <div
            className="Photo"
            style={{
              backgroundImage: `url(${require("../../../photos/photo1.jpg")})`
            }}
          ></div>
          <div className="Name tx-c4">John Fuzzy</div>
          <div className="Level bg-c5">Admin</div>
          <ul className="GoToWrapper">
            <li
              className="GoTo Profile"
              onClick={event => this.handleClickGoTo(event, "Profile")}
            >
              <span className="Icon">
                <FontAwesomeIcon icon={faUser} />
              </span>
              <span className="Name">Profil Saya</span>
            </li>
            <li
              className="GoTo Logout"
              onClick={event => this.handleClickGoTo(event, "Logout")}
            >
              <Link to="/">
                <span className="Icon">
                  <FontAwesomeIcon icon={faSignOutAlt} />
                </span>
                <span className="Name">Keluar</span>
              </Link>
            </li>
          </ul>
        </div>
        <MyProfile ref={this.MyProfileRef} />
      </React.Fragment>
    );
  }
}

class HeadContent extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickMenuButton = this.handleClickMenuButton.bind(this);
    this.handleClickUserArea = this.handleClickUserArea.bind(this);
    this.UserActionRef = React.createRef();
  }

  handleClickUserArea(event) {
    this.UserActionRef.current.userActionRef.current.classList.toggle("Active");
    event.preventDefault();
  }

  handleClickMenuButton(event) {
    this.props.onMenuButtonClicked(!this.props.isSidebarActive);
    event.preventDefault();
  }

  render() {
    return (
      <div className="HeadContent bg-c4">
        <div className="InnerTopHead bg-c4">
          <div
            className="MenuButtonToggle"
            onClick={this.handleClickMenuButton}
          >
            <span className="bg-c1"></span>
            <span className="bg-c1"></span>
            <span className="bg-c1"></span>
          </div>
          <div className="UserArea" onClick={this.handleClickUserArea}>
            <div
              className="UserPhoto"
              style={{
                backgroundImage: `url(${require("../../../photos/photo1.jpg")})`
              }}
            ></div>
            <div className="Username tx-c1">John Fuzzy</div>
          </div>
          <UserAction ref={this.UserActionRef} />
        </div>
        <div className="Separator bg-c7"></div>
        <div className="BodyHeadContent bg-c4">
          <h4 className="tx-c1">
            <Switch>
              <Route path="/anggota">Data Anggota</Route>
              <Route path="/eksekutif">Eksekutif</Route>
              <Route path="/legislatif">Legislatif</Route>
            </Switch>
          </h4>
        </div>
      </div>
    );
  }
}

export default HeadContent;
