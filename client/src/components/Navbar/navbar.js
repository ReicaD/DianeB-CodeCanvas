import React from "react";
import "./navbar.css";
import logo from "../../assets2/letter-d.png";
import contactImg from "../../assets2/contact (1).png";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="desktopMenu">
        <Link to="home" className="desktopMenuListItem">Home</Link>
        <Link to="about"  className="desktopMenuListItem">About</Link>
        <Link to="portfolio" className="desktopMenuListItem">Portfolio</Link>
        <Link to="client" className="desktopMenuListItem">Client</Link>
      </div>
      <button className="navBtn dropDown">
        <img src={contactImg} alt="" className="desktopMenuImg iconContact" />
        Contact Me
      </button>
      {/* <div className="dropDown" style={{display:"none"}}>
        <spa></spa>
        <spa></spa>
        <spa></spa>
      </div> */}
    </nav>
  );
}

export default Navbar;
