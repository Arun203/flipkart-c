import React, { Component } from "react";
import { IconContext } from "react-icons";
import * as IoIcons from "react-icons/io";
import "./SideBar.css";

class SideBar extends Component {
  render() {
    let sideBar = "side-bar";
    if (this.props.show) {
      sideBar = "side-bar open";
    }
    return (
      <IconContext.Provider value={{ color: " #fff" }}>
        <nav className={sideBar}>
          <div className="side-bar-header">
            <div className="side-bar-header-content ">
              <div className="side-bar-header-text">
                <IoIcons.IoMdContact style={{ marginRight: "10px" }} />
                Login & Signup
              </div>
              <IoIcons.IoMdContact style={{ marginLeft: "25%" }} />
            </div>
          </div>
          <ul>
            <li>
              <a href="/">SuperCoin Zone</a>
            </li>
            <li>
              <a href="/">Flipkart Plus Zone</a>
            </li>
            <li>
              <hr></hr>
              <a href="/">All Categories</a>
            </li>
            <li>
              <a href="/">More on Flipkart</a>
              <hr></hr>
            </li>

            <li>
              <a href="/">Choose Language</a>
            </li>

            <li>
              <hr></hr>
              <a href="/">Offer Zone</a>
            </li>

            <li>
              <a href="/">Sell on Flipkart</a>
            </li>

            <li>
              <hr></hr>
              <a href="/">My Orders</a>
            </li>

            <li>
              <a href="/">My Coupons</a>
            </li>

            <li>
              <a href="/">My Cart</a>
            </li>

            <li>
              <a href="/">My Whishlist</a>
            </li>
            <li>
              <a href="/">My Account</a>
            </li>
            <li>
              <a href="/">My Notifications</a>
            </li>
            <li>
              <a href="/">My Chats</a>
            </li>
            <li>
              <hr></hr>
              <a href="/">Notification Preferences</a>
            </li>
            <li>
              <a href="/">Help Centre</a>
            </li>
            <li>
              <a href="/">Legal</a>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    );
  }
}

export default SideBar;
