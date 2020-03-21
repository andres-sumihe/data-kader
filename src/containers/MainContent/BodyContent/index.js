import React from "react";
import "./style.css";
import GridList from "./GridAndList/DataGridList";

class BodyContent extends React.Component {
  render() {
    return (
      <div className="BodyContent">
        <GridList />
      </div>  
    );
  }
}

export default BodyContent;
