import React from "react";
import "./App.css";
import Sidebar from "./containers/Sidebar";
import MainContent from "./containers/MainContent";
import DataGridList from "./containers/MainContent/BodyContent/GridAndList/DataGridList";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
