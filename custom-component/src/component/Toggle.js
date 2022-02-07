import React, { useState } from "react";
import styled from "styled-components";

const circleRadius = 20;
const circleDiameter = circleRadius * 2;

const containerPadding = circleRadius / 5;
const containerWidth = circleRadius * 5;
const containerHeight = circleDiameter + containerPadding * 2;
const containerBorderRadius = (circleDiameter + containerPadding * 2) / 2;

const animateDistance = containerWidth - circleDiameter - containerPadding * 2;
const animateTime = 250;

const ToggleContainer = styled.div`
  position: relative;
  width: ${`${containerWidth}px`};
  height: ${`${containerHeight}px`};
  background: var(--primary);
  border-radius: ${`${containerBorderRadius}px`};
  overflow: hidden;
  box-shadow: ${`inset ${containerPadding}px ${containerPadding}px ${containerPadding}px rgba(0,0,0,0.4)`};
`;

const Slider = styled.div`
  position: absolute;
  z-index: 1;
  background: gray;
  top: 0;
  right: 0;
  width: ${({ toggle }) => (toggle ? "0px" : "100%")};
  height: ${`${containerHeight}px`};
  transition: ${`all ${animateTime / 1000}s linear`};
`;

const CircleContainer = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: ${`${containerPadding}px`};
`;

const Circle = styled.div`
  width: ${`${circleDiameter}px`};
  height: ${`${circleDiameter}px`};
  border-radius: 50%;
  background: white;
  transition: ${`all ${animateTime / 1000}s linear`};
  transform: ${({ toggle }) =>
    toggle ? `translateX(${animateDistance}px)` : `translateX(0px)`};
`;

function Toggle() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <ToggleContainer>
        <Slider toggle={toggle} />
        <CircleContainer>
          <Circle onClick={handleToggle} toggle={toggle} />
        </CircleContainer>
      </ToggleContainer>
      <p>Toggle Switch {toggle ? "ON" : "OFF"}</p>
    </>
  );
}

export default Toggle;
