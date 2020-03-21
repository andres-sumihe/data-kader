import React from "react";
import { Switch, Route } from "react-router-dom";
import "./style.css";
<<<<<<< HEAD
import GridList from "./GridAndList/DataGridList";
=======
import Anggota from "../../../contents/Anggota";
import Eksekutif from "../../../contents/Eksekutif";
import Legislatif from "../../../contents/Legislatif";
>>>>>>> 4cf12c05f33e3393270d6257ff1558208c6c6e79

class BodyContent extends React.Component {
  render() {
    return (
      <div className="BodyContent">
<<<<<<< HEAD
        <GridList />
      </div>  
=======
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
>>>>>>> 4cf12c05f33e3393270d6257ff1558208c6c6e79
    );
  }
}

export default BodyContent;
