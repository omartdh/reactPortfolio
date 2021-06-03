import React from "react";
import "./style.css";

function Footer() {
  return (

    <footer>
    <div className="footer-content">
        <p>Designed and developed by:</p>
        <h3>Omar Dahmash</h3>
        <ul className="socials">
            <li><a href="https://www.instagram.com/omtdh/"><i className="bx bxl-instagram"></i></a>
            <a href="https://github.com/omartdh"><i className="bx bxl-github"></i></a>
            <a href="https://www.linkedin.com/in/omar-dahmash-b34693a4/"><i className="bx bxl-linkedin"></i></a></li>
        </ul>
    </div>
    <div className="footer-bottom">
        <p>copyright &copy;{ new Date().getFullYear() } Omar Dahmash</p>
    </div>
</footer>
  );
}

export default Footer;
