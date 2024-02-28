import React from "react";
import { styled } from "styled-components";


const Wrapper = styled.div`
  position: absolute;
  content: "";
  left: 5%;
  top: 20%;
  width: 550px;
  height: 650px;
  background: orange;
  border-radius: 62% 47% 82% 35% / 45% 45% 80% 66%;
  will-change: border-radius, transform, opacity;
  animation: sliderShape 5s linear infinite;
  display: block;
  z-index: -1;
  -webkit-animation: sliderShape 5s linear infinite;

@media only screen and (max-width: 768px){
  width: 300px;
  height: 350px;
  top: 30%;
}
 `;

const HeroUI = () => {
  return <Wrapper />;
};

export default HeroUI;

 