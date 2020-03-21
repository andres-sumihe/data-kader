import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Sidebar from "./containers/Sidebar";
import MainContent from "./containers/MainContent";
import DataGridList from "./containers/MainContent/BodyContent/GridAndList/DataGridList";

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <MainContent />
      </Router>
    </div>
  );
}

export default App;
