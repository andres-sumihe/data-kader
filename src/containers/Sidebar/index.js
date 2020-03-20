import React from "react";
import "./style.css";
import HeadSidebar from "./HeadSidebar";
import BodySidebar from "./BodySidebar";

class Sidebar extends React.Component {
  render() {
    return (
      <div className="Sidebar">
        <HeadSidebar />
        <BodySidebar />
      </div>
    );
  }
}

export default Sidebar;
