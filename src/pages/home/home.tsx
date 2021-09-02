import React from "react";
import { io } from "socket.io-client";
import StyledButton from "../../components/StyledButton";
import StyledInput from "../../components/StyledInput";
import StyledHome from "./home.style";
export default function Home() {
  const socket = io("ws://localhost:58851");
  return (
    <StyledHome>
      <div className="inner-container">
        <h2>Damsharas</h2>
        <StyledInput type="text" placeholder="Name" />
        <div className="buttons">
          <StyledButton>Finder</StyledButton>
          <StyledButton>Helper</StyledButton>
        </div>
      </div>
    </StyledHome>
  );
}
