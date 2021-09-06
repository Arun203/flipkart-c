import React, { Component } from "react";
import * as IoIcons from "react-icons/io";
import Logo from "../../../assets/flipkart-logo.png";
import Plus from "../../../assets/plus_logo.png";
// import * as AiIcons from "react-icons/ai";
import "./Sticky.css";
import SideBarButton from "../sidebar/SideBarButton";

class Sticky extends Component {
  render() {
    return (
      <header className="sticky">
        <nav className="sticky_nav">
          <div className="sticky_button">
            <SideBarButton click={this.props.stickyToggle} />
          </div>
          <div className="space"></div>
          <div className="sticky_logo">
            <a href="#">
              <img width="75" src={Logo} alt="Logo" />
            </a>
            <a href="#">
              Explore
              <span>Plus</span>
              <img width="10" src={Plus} alt="Plus" />
            </a>
          </div>
          <div className="search-container sticky_nav_items">
            <form action="/">
              <input
                type="text"
                placeholder="Search.."
                name="search"
                size="60"
              />
              <IoIcons.IoIosSearch
                style={{
                  fontSize: "20px",
                  margin: "0.9rem 0 0 -1.5rem",
                  position: "absolute",
                  cursor: "pointer"
                }}
              />
            </form>
          </div>
          <div className="sticky_nav_items">
            <div className="sticky_nav_item login">
              <a href="#">Login</a>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
            <div className="sticky_nav_item more">
              <a href="#">More</a>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
            <div className="sticky_nav_item">
              <a href="#">Cart</a>
            </div>
          </div>
          <div className="space"></div>
        </nav>
      </header>
    );
  }
}

export default Sticky;
