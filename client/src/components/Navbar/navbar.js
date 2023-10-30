/** @format */

import React, {useEffect, useState} from "react";
import "./navbar.css";
import logo from "../../assets2/letter-d.png";
import contactImg from "../../assets2/contact (1).png";
import { Link } from "react-scroll";
import styled from "styled-components";

const DropDown = styled.ul`
// @media only screen and (max-width: 768px){
//   display: none;
//   width: 100vw;
//   background: #2b5783;

//   ul {
//     padding: 18px;
//     list-style: none;
//   }
// }
`;

function Navbar() {
  const [dropDown, showDropDown] = useState(false);
  // useEffect(()=>{
  //   showDropDown(true)
  // },[])

  const stopPropagation = (e) => {
    e.stopPropagation();
  }

  return (
    <>
      <nav className='navbar'>
        <img src={logo} alt='Logo' className='logo' />
        <div className='desktopMenu'>
          <Link to='home' className='desktopMenuListItem'>
            Home
          </Link>
          <Link to='about' className='desktopMenuListItem'>
            About
          </Link>
          <Link to='portfolio' className='desktopMenuListItem'>
            Portfolio
          </Link>
          <Link to='client' className='desktopMenuListItem'>
            Client
          </Link>
        </div>
        <button className='navBtn dropDown'>
          <img src={contactImg} alt='' className='desktopMenuImg iconContact' />
          Contact Me
        </button>
        {console.log('drop',dropDown)}
        <button className="buttonDrop" onClick={()=>showDropDown(true)}>DROP</button>
        {/* <div className="dropDown" style={{display:"none"}}>
        <spa></spa>
        <spa></spa>
        <spa></spa>
      </div> */}
      </nav>
      {dropDown && (
      <DropDown className="dropDownMenu">       
        <li>Home</li>
        <li>About</li>
        <li>Portfolio</li>
        <li>Client</li>      
      </DropDown>
      )}

      {/* <button data-ui-toggle="popover" class="btn btn--md btn--primary btn--toggler m-auto">Click me <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"/> */}
    {/* <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path></button> */}
    </>
  );
}

export default Navbar;
