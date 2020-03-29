import React from "react";
import { BrowserRouter as Router,
  Route,
  Link,
  Switch } from "react-router-dom";
import "./App.css";
import Login from "./Login";
import Sidebar from "./containers/Sidebar";
import MainContent from "./containers/MainContent";

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
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/:id">
              <Sidebar isSidebarActive={isSidebarActive} />
              <MainContent
                isSidebarActive={isSidebarActive}
                onSidebarStatusChange={this.handleSidebarStatusChange}
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
