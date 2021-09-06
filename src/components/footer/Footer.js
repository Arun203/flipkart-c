import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer_container">
        <div className="footer_top">
          <div className="footer_content">
            <p className="footer_heading">ABOUT</p>
            <a href="#">Contact Us</a>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Flipkart Stories</a>
            <a href="#">Press</a>
            <a href="#">Flipkart Wholesale</a>
          </div>
          <div className="footer_content">
            <p className="footer_heading">HELP</p>
            <a href="#">Payment</a>
            <a href="#">Shipping</a>
            <a href="#">Cancellation & Returns</a>
            <a href="#">FAQ</a>
            <a href="#">Report Infringement</a>
          </div>
          <div className="footer_content">
            <p className="footer_heading">POLICY</p>
            <a href="#">Return Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Security</a>
            <a href="#">Privacy</a>
            <a href="#">Sitemap</a>
            <a href="#">EPR Compliance</a>
          </div>
          <div className="footer_content">
            <p className="footer_heading">SOCIAL</p>
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">YouTube</a>
          </div>
          <div className="verticalLine"></div>
          <div className="footer_content">
            <p className="footer_heading">Mail Us:</p>
            <p>
              Flipkart Internet Private Limited,<br></br>
              Buildings Alyssa, Begonia &<br></br>
              Clove Embassy Tech Village,<br></br>
              Outer Ring Road,Devarabeesanahalli Village,<br></br>
              Bengaluru, 560103,<br></br>
              Karnataka, India
            </p>
          </div>
          <div className="footer_content">
            <p className="footer_heading">Registered Office Address:</p>
            <p>
              Flipkart Internet Private Limited,<br></br>
              Buildings Alyssa, Begonia &<br></br>
              Clove Embassy Tech Village,<br></br>
              Outer Ring Road,Devarabeesanahalli Village,<br></br>
              Bengaluru, 560103,<br></br>
              Karnataka, India<br></br>
              CIN : U51109KA2012PTC066107<br></br>
              Telephone: <span className="tel">1800 202 9898</span>
            </p>
          </div>
        </div>
        <div className="horizontalLine"></div>
        <div className="footer_bottom">
          <div className="footer_bottom_content">
            <div className="footer_item">
              <p>Sell on Flipkart</p>
            </div>
            <div className="footer_item">
              <p>Advertise</p>
            </div>
            <div className="footer_item">
              <p>Gift Cards</p>
            </div>
            <div className="footer_item">
              <p>Help Center</p>
            </div>
            <div className="footer_item">
              <p>© 2007-2021 Flipkart.com</p>
            </div>
            <div className="footer_item">
              <img
                src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/payment-method_7934bc.svg"
                width="100%"
                height="auto"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
