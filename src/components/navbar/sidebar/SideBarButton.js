import React, { Component } from "react";
import "./SideBarButton.css";

class SideBarButton extends Component {
  render() {
    return (
      <button className="toggle-button" onClick={this.props.click}>
        <div className="toggle-button_line" />
        <div className="toggle-button_line" />
        <div className="toggle-button_line" />
      </button>
    );
  }
}

export default SideBarButton;
