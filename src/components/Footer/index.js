import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="footer">
      <span>© { new Date().getFullYear() } Omar Dahmash </span>
    </footer>
  );
}

export default Footer;
