import React from "react";
import { Switch, Route } from "react-router-dom";
import "./style.css";
import "./../../../skin.css";
import Anggota from "../../../contents/Anggota";
import Eksekutif from "../../../contents/Eksekutif";
import Legislatif from "../../../contents/Legislatif";

class BodyContent extends React.Component {
  render() {
    return (
      <div className="BodyContent bg-c1">
        <Switch>
          <Route exact path="/">
            <Anggota />
          </Route>
          <Route path="/eksekutif">
            <Eksekutif />
          </Route>
          <Route path="/legislatif">
            <Legislatif />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default BodyContent;
