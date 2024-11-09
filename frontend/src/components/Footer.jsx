import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer_container">
          <div className="footer_column">
            <h3>ONLINE SHOPPING</h3>

            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">Kids</a>
            <a href="#">Home & Living</a>
            <a href="#">Beauty</a>
            <a href="#">Gift Card</a>
            <a href="#">Myntra Insider</a>
          </div>

          <div className="footer_column">
            <h3>CUSTOMER POLICIES</h3>

            <a href="#">FAQ</a>
            <a href="#">T&C</a>
            <a href="#">Terms Of Use</a>
            <a href="#">Track Orders</a>
            <a href="#">Shipping</a>
            <a href="#">Cancellation</a>
            <a href="#">Returns</a>
            <a href="#">Privacy policy</a>
          </div>

          <div className="footer_column">
            <h3>EXPERIENCE MYNTRA APP ON MOBILE</h3>

            <img src="images/googleplay.png" alt="get it on Google Play" className="footer_image" />
            <img src="images/appstore.svg" alt="get it on App Store" className="footer_image" />
            <h3>Contact Us</h3>
          </div>
        </div>
        <hr />

        <div className="copyright">© 2024 www.myntra.com. All rights reserved.</div>
      </footer>
    </>
  );
};

export default Footer;
