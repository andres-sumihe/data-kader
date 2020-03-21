import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Sidebar from "./containers/Sidebar";
import MainContent from "./containers/MainContent";
import DetailUser from "./containers/DetailUser/DetailUser";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSidebarActive: true
    };
    this.handleSidebarStatusChange = this.handleSidebarStatusChange.bind(this);
  }

  handleSidebarStatusChange(isSidebarActive) {
    this.setState({
      isSidebarActive: isSidebarActive
    });
  }

  render() {
    const isSidebarActive = this.state.isSidebarActive;
    return (
      <div className="App">
        <Router>
          
          <Sidebar isSidebarActive={isSidebarActive} />
          <MainContent
            isSidebarActive={isSidebarActive}
            onSidebarStatusChange={this.handleSidebarStatusChange}
          />
          <DetailUser/>
        </Router>
      </div>
    );
  }
}

export default App;
