import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/navbar/sidebar/SideBar";
import Backdrop from "./components/navbar/backdrop/Backdrop";
import Home from "./components/home/Home";

class App extends Component {
  state = {
    sideDrawerToggleState: false
  };

  SidedrawerToggel = () => {
    this.setState((preState) => {
      return { sideDrawerToggleState: !preState.sideDrawerToggleState };
    });
  };

  backDrawerToggle = () => {
    this.setState({ sideDrawerToggleState: false });
  };

  render() {
    let backDrop;

    if (this.state.sideDrawerToggleState) {
      backDrop = <Backdrop click={this.backDrawerToggle} />;
    }

    return (
      <div style={{ height: "100%" }}>
        <Router>
          <Navbar drawerToggel={this.SidedrawerToggel} />
          <Sidebar show={this.state.sideDrawerToggleState} />
          {backDrop}
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
