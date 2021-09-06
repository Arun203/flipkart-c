import React, { Component } from "react";
// import Dropdown from './dropdown/Dropdown'
import Sticky from "./sticky/Sticky";

class Navbar extends Component {
  render() {
    return (
      <div>
        <Sticky stickyToggle={this.props.drawerToggel} />
        {/* <Dropdown /> */}
      </div>
    );
  }
}

export default Navbar;
