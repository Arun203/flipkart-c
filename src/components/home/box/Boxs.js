import React, { Component } from "react";
import "./Boxs.css";

class Boxs extends Component {
  render() {
    return (
      <div className="box_container">
        {this.props.bar_data.map((item, index) => {
          return (
            <div key={index} className="box_items">
              <img src={item.img} width="100%" height="100%" />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Boxs;
