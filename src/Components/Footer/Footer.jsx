import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <p>Connect with Us:</p>
      <div className="btn-container">
        <a href="">
          Twitter <i class="fa-brands fa-twitter icon"></i>
        </a>
        <a href="">
          Discord <i class="fa-brands fa-discord icon"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
