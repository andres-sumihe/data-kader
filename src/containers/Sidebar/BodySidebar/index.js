import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import "./../../../skin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faAddressCard } from "@fortawesome/free-solid-svg-icons";

class BodySidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuActive: "Anggota",
    };
    this.anggotaRef = React.createRef();
    this.eksekutifRef = React.createRef();
    this.legislatifRef = React.createRef();
  }

  handleSingleMenuClick(event, title) {
    if (this.state.menuActive !== title) {
      this.setState({
        menuActive: title,
      });
      switch (title) {
        case "Eksekutif":
          this.anggotaRef.current.classList.remove("Active");
          this.legislatifRef.current.classList.remove("Active");
          this.eksekutifRef.current.classList.add("Active");
          break;
        case "Legislatif":
          this.anggotaRef.current.classList.remove("Active");
          this.eksekutifRef.current.classList.remove("Active");
          this.legislatifRef.current.classList.add("Active");
          break;
        case "Anggota":
        default:
          this.eksekutifRef.current.classList.remove("Active");
          this.legislatifRef.current.classList.remove("Active");
          this.anggotaRef.current.classList.add("Active");
      }
    }
  }

  render() {
    return (
      <div className="BodySidebar">
        <ul className="MenuWrapper">
          <li className="SingleMenu Active" ref={this.anggotaRef}>
            <Link to="/anggota">
              <div
                className="InnerSingleMenu"
                onClick={(event) => {
                  this.handleSingleMenuClick(event, "Anggota");
                }}
              >
                <span className="IconWrapper">
                  <FontAwesomeIcon icon={faAddressCard} />
                </span>
                <span className="SingleMenuName">Data Anggota</span>
              </div>
            </Link>
          </li>
          <li className="SingleMenu" ref={this.eksekutifRef}>
            <Link to="/eksekutif">
              <div
                className="InnerSingleMenu"
                onClick={(event) => {
                  this.handleSingleMenuClick(event, "Eksekutif");
                }}
              >
                <span className="IconWrapper">
                  <FontAwesomeIcon icon={faAddressCard} />
                </span>
                <span className="SingleMenuName">Eksekutif</span>
              </div>
            </Link>
          </li>
          <li className="SingleMenu" ref={this.legislatifRef}>
            <Link to="/legislatif">
              <div
                className="InnerSingleMenu"
                onClick={(event) => {
                  this.handleSingleMenuClick(event, "Legislatif");
                }}
              >
                <span className="IconWrapper">
                  <FontAwesomeIcon icon={faAddressCard} />
                </span>
                <span className="SingleMenuName">Legislatif</span>
              </div>
            </Link>
          </li>
        </ul>
        <div className="PDIPSection">
          <img
            class="logo"
            src={require("../../../photos/logo_pdi.png")}
            alt="logo_pdi"
          />
          <ul className="TextWrapper">
            <li>DPD PDI Perjuangan</li>
            <li>Jawa Tengah</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default BodySidebar;
