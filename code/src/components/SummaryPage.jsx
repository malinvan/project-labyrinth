import { useSelector } from 'react-redux';
import React from 'react';
import { 
  FaArrowDown, 
  FaArrowLeft, 
  FaArrowRight, 
  FaArrowUp } from "react-icons/fa";

import { 
  SummaryContainer, 
  ThankYou, 
  Text, 
  PathContainer, 
  Arrow, 
  Item, 
  RestartButton } from "./Styling";

export const SummaryPage = ({ description }) => {
  const history = useSelector(store => store.game.history);
  const username = useSelector(store => store.game.userName);
  
  return (
    <SummaryContainer>
      <ThankYou>Thank you {username} for playing!</ThankYou>
      <Text>{description}</Text>
      <Text>This is the path you took:</Text>
      {history.map((item, index) => (
        <PathContainer key={index}>
          <Arrow>
            {item === "West" ? <FaArrowLeft /> : ""} 
            {item === "North" ? <FaArrowUp /> : ""}
            {item === "East" ? <FaArrowRight /> : ""} 
            {item === "South" ? <FaArrowDown /> : ""}
          </Arrow>
          <Item key={index}>
            {item}
          </Item>
        </PathContainer>
      ))}
      <RestartButton 
        onClick={() => window.location.reload()}>
          RESTART
      </RestartButton>
    </SummaryContainer>
  )
};