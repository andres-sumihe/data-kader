import React from "react";
import "./style.css";
import "./../../../skin.css";

class HeadSidebar extends React.Component {
  render() {
    return (
      <div className="HeadSidebarWrapper">
        <div className="HeadSidebar">
          <div className="brand">
            <img src={require("../../../photos/JK Logo 3.svg")} alt="Logo" />
          </div>
          {/* <h3 className="brand">Data Kader</h3> */}
        </div>
      </div>
    );
  }
}

export default HeadSidebar;
