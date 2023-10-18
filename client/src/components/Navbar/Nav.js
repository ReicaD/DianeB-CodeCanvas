import React from "react";
import styled from "styled-components";

// const Wrapper = styled.nav`
//   width: 100%;
//   background-color: #2b5783;
//   margin: 0px;
//   color: white;
//   font-weight: 400;
//   height: 5rem;
//   align-items: center;
//   position: sticky;
//   text-decoration: none;
//   top: 0;
//   text-align: center;

//   ul {
//     display: flex;
//     align-items: center;
//     justify-content: space-around;
//     margin: 0 auto;
//     // border: 2px solid white;
//     list-style-type: none;
//   }
// `;

const Nav = () => {
  return (
    <Wrapper>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
    </Wrapper>
  );
};

export default Nav;
