import React from "react";
import "./style.css";
import "./../../../skin.css";
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
          <div className="UserArea">Hello, Rietts :)</div>
        </div>
        <div className="Separator bg-c4"></div>
        <div className="BodyHeadContent bg-c4">
          <h3 className="tx-c1">
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