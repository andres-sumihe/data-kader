import React from "react";
import "./style.css";
import { Switch, Route } from "react-router-dom";

class HeadContent extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickMenuButton = this.handleClickMenuButton.bind(this);
  }

  handleClickMenuButton(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="HeadContent">
        <div className="InnerTopHead">
          <div class="MenuButtonToggle" onClick={this.handleClickMenuButton}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="UserArea">Hello, Rietts :)</div>
        </div>
        <div className="Separator"></div>
        <div className="BodyHeadContent">
          <h4>
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
