import React from "react";
import "./style.css";
import HeadContent from "./HeadContent";
import BodyContent from "./BodyContent";

class MainContent extends React.Component {
  render() {
    return (
      <div className="MainContent">
        <HeadContent />
        <BodyContent />
      </div>
    );
  }
}

export default MainContent;
