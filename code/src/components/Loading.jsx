import React from 'react'
import styled, { keyframes } from 'styled-components';

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const waggle = keyframes`
  0%   {transform:rotate(0deg);}
  10%  {transform:rotate(12deg);}
  40%  {transform:rotate(-25deg);}
  60%  {transform:rotate(20deg);}
  80%  {transform:rotate(-15deg);}
  100% {transform:rotate(0deg);}
`;

const Compass = styled.div`
  border: 8px solid #34623F;
  display: block; 
  width: 116px; 
  height: 116px;
  border-radius: 100%;
  margin: 10% auto 0 auto;
  @media (min-widht: 769px) {
    transform: scale(1.5);
  }
`;

const Needle = styled.div`
  width: 24px; 
  margin: 52px auto 0 auto;
  animation: ${waggle} 2.5s ease-in-out infinite;
  :after {
    content: '';
    display: block;
    border-color: orangered transparent;
    border-style: solid;
    border-width: 0px 12px 40px 12px;
    margin-top: -54px; 
  }
  :before {
    content: '';
    display: block;
    border-color: #5e5d5d transparent;
    border-style: solid;
    border-width: 40px 12px 0px 12px;
    margin-bottom: -84px;
  }
`;

const CompassText = styled.h3`
  font-size: 22px;
  margin-top: 20px;
  color: white;
`;

export const Loading = () => {
  return (
    <Container>
      <Compass>
        <Needle></Needle>
      </Compass>
      <CompassText>Locating direction...</CompassText>
    </Container>
  )
};