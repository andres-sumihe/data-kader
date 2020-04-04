import React from "react";
import "./style.css";
import "./../../skin.css";
import HeadSidebar from "./HeadSidebar";
import BodySidebar from "./BodySidebar";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const isSidebarActive = this.props.isSidebarActive;
    return (
      <div className={"Sidebar" + (isSidebarActive ? " Active" : "")}>
        <HeadSidebar />
        <BodySidebar />
      </div>
    );
  }
}

export default Sidebar;
