import React, { Component } from "react";
import CarouselSlider from "react-carousel-slider";

class Slide extends Component {
  render() {
    let data = [
      {
        imgSrc: "https://i.imgur.com/7nbAJ0C.jpg"
      },
      {
        imgSrc: "https://i.imgur.com/pgCzueK.jpg"
      },
      {
        imgSrc: "https://i.imgur.com/d5aiXJP.jpg"
      },
      {
        imgSrc: "https://i.imgur.com/L75otV6.jpg"
      },
      {
        imgSrc: "https://i.imgur.com/qkPMr9D.jpg"
      }
    ];
    let buttonSetting = {
      placeOn: "middle-inside",
      hoverEvent: true,
      style: {
        left: {
          height: "50px",
          width: "50px",
          color: "#929393",
          background: "rgba(225, 228, 232, 0.8)",
          borderRadius: "50%"
        },
        right: {
          height: "50px",
          width: "50px",
          color: "#929393",
          background: "rgba(225, 228, 232, 0.8)",
          borderRadius: "50%"
        }
      }
    };
    return (
      <CarouselSlider
        slideItems={data}
        accEle={{ dots: false }}
        sliderBoxStyle={{
          width: "99%",
          height: "250px",
          margin: "10px 10px 0 5px"
        }}
        buttonSetting={buttonSetting}
      />
    );
  }
}

export default Slide;
