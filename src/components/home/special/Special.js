import React, { Component } from "react";
import Slide from "../deals/Slide";
import "./Special.css";

class Speacial extends Component {
  render() {
    return (
      <div className="speacials_container">
        <div className="speacials_slide">
          <div className="speacials_heading">
            <h1>{this.props.special_data.title}</h1>
            <button className="speacials_heading_button">VIEW ALL</button>
          </div>
          <hr></hr>
          <Slide />
        </div>
      </div>
    );
  }
}

export default Speacial;
