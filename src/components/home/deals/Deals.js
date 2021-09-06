import React, { Component } from "react";
import Slide from "./Slide";
import "./Deals.css";

class Deals extends Component {
  render() {
    return (
      <div className="deals_container">
        <div className="deals_slide">
          <div className="heading">
            <h1>Deals of the Day</h1>
            <button className="heading_button">VIEW ALL</button>
          </div>
          <hr></hr>
          <Slide />
        </div>
        <div className="deals-box">
          <img
            src="https://rukminim1.flixcart.com/flap/464/708/image/50843ed62b270b91.jpg?q=70"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    );
  }
}

export default Deals;
