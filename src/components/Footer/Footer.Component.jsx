import React from "react";
import "./Footer.style.css";

const Footer = () => {
  return (
    <div>
      <div className="py-2 text-center footer-style">© ANAND KUMAR JHA &nbsp; {new Date().getFullYear()}</div>
    </div>
  );
};

export default Footer;