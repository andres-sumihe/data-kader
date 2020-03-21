import React from "react";
import { Switch, Route } from "react-router-dom";
import "./style.css";
import Anggota from "../../../contents/Anggota";
import Eksekutif from "../../../contents/Eksekutif";
import Legislatif from "../../../contents/Legislatif";
import DataList from "./GridAndList/DataList";
import DataGrid from "./GridAndList/DataGrid";

class BodyContent extends React.Component {
  render() {
    return (
      <div className="BodyContent">
        <Switch>
          <Route exact path="/">
            
            <Anggota />
            <DataList name='NamaOrang' kta='086969' jabatan='Presiden' wilayah='Indonesia'/>
            <DataGrid name='NamaOrang' kta='086969' jabatan='Presiden' wilayah='Indonesia'/>
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
