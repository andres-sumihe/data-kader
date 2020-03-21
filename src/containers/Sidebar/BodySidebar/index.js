import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

class BodySidebar extends React.Component {
  render() {
    return (
      <div className="BodySidebar">
        <ul className="MenuWrapper">
          <li className="SingleMenu Active">
            <Link to="/">
              <div className="InnerSingleMenu">
                <span class="IconWrapper">
                  <FontAwesomeIcon icon={faCoffee} />
                </span>
                <span className="SingleMenuName">Data Anggota</span>
              </div>
            </Link>
          </li>
          <li className="SingleMenu">
            <Link to="/eksekutif">
              <div className="InnerSingleMenu">
                <span class="IconWrapper">
                  <FontAwesomeIcon icon={faCoffee} />
                </span>
                <span className="SingleMenuName">Eksekutif</span>
              </div>
            </Link>
          </li>
          <li className="SingleMenu">
            <Link to="/legislatif">
              <div className="InnerSingleMenu">
                <span class="IconWrapper">
                  <FontAwesomeIcon icon={faCoffee} />
                </span>
                <span className="SingleMenuName">Legislatif</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default BodySidebar;
