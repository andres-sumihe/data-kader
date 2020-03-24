import React from "react";
import "./style.css";
import "./../../../skin.css";
import { Switch, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSignOutAlt, faTimes } from "@fortawesome/free-solid-svg-icons";

class MyAccount extends React.Component {
  render() {
    return (
      <div className="full-overlay">
        <div className="MyAccount">
          <span className="close-icon">
            <FontAwesomeIcon icon={faTimes} size="2x" />
          </span>
        </div>
      </div>
    );
  }
}

class HeadContent extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickMenuButton = this.handleClickMenuButton.bind(this);
    this.handleClickUserArea = this.handleClickUserArea.bind(this);
    this.userActionRef = React.createRef();
  }

  handleClickUserArea(event) {
    this.userActionRef.current.classList.toggle("Active");
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
              <li className="GoTo Account">
                <span className="Icon">
                  <FontAwesomeIcon icon={faUser} />
                </span>
                <span className="Name">Akun Saya</span>
              </li>
              <li className="GoTo Logout">
                <span className="Icon">
                  <FontAwesomeIcon icon={faSignOutAlt} />
                </span>
                <span className="Name">Keluar</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="Separator bg-c7"></div>
        <div className="BodyHeadContent bg-c4">
          <h4 className="tx-c1">
            <Switch>
              <Route exact path="/">
                Data Anggota
              </Route>
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
