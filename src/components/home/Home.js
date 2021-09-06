import React, { Component } from "react";
import Slider from "./slider/Slider";
import Deals from "./deals/Deals";
import Boxs from "./box/Boxs";
import Special from "./special/Special";
import Notes from "../notes/Notes";
import Footer from "../footer/Footer";

class Home extends Component {
  state = {
    bar_data: [
      {
        img:
          "https://rukminim1.flixcart.com/flap/480/480/image/1ce0c4c1fb501b45.jpg?q=50"
      },
      {
        img:
          "https://rukminim1.flixcart.com/flap/480/480/image/084789479074d2b2.jpg?q=50"
      },
      {
        img:
          "https://rukminim1.flixcart.com/flap/480/480/image/2f30db9425df5cec.jpg?q=50"
      },
      {
        img:
          "https://rukminim1.flixcart.com/flap/960/960/image/e5d436b24d60bf9a.jpg?q=50"
      },
      {
        img:
          "https://rukminim1.flixcart.com/flap/960/960/image/655a3211843f0b5a.jpg?q=50"
      },
      {
        img:
          "https://rukminim1.flixcart.com/flap/960/960/image/6cf4110290724ced.jpg?q=50"
      }
    ],
    special_data: [
      {
        title: "Best of Appliances"
      },
      {
        title: "Trending Offers"
      },
      {
        title: "Auto Accessories"
      },
      {
        title: "Home Makeover"
      },
      {
        title: "Top Deals On Fashion"
      },
      {
        title: "Furniture Bestsellers"
      },
      {
        title: "Best Battery Phones"
      },
      {
        title: "Best of Electronics"
      },
      {
        title: "Women's Fashion"
      }
    ]
  };

  render() {
    return (
      <div>
        <Slider />
        <div style={{ margin: "0px 0 0 10px" }}>
          <Deals />
        </div>
        <Boxs bar_data={this.state.bar_data.slice(0, 3)} />
        <Special special_data={this.state.special_data[0]} />
        <Boxs bar_data={this.state.bar_data.slice(3, 6)} />
        {this.state.special_data.slice(1).map((item, index) => {
          return <Special key={index} special_data={item} />;
        })}
        <Notes />
        <Footer />
      </div>
    );
  }
}

export default Home;
