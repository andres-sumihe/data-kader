import React from "react";
import "./style.css";
import { Switch, Route } from "react-router-dom";

class HeadContent extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickMenuButton = this.handleClickMenuButton.bind(this);
  }

  handleClickMenuButton(event) {
    this.props.onMenuButtonClicked(!this.props.isSidebarActive);
    event.preventDefault();
  }

  render() {
    return (
      <div className="HeadContent">
        <div className="InnerTopHead">
          <div
            className="MenuButtonToggle"
            onClick={this.handleClickMenuButton}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="UserArea">Hello, Rietts :)</div>
        </div>
        <div className="Separator"></div>
        <div className="BodyHeadContent">
          <h3>
            <Switch>
              <Route exact path="/">
                Data Anggota
              </Route>
              <Route path="/eksekutif">Eksekutif</Route>
              <Route path="/legislatif">Legislatif</Route>
            </Switch>
          </h3>
        </div>
      </div>
    );
  }
}

export default HeadContent;