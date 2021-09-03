import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import StyledButton from "../../components/StyledButton";
import StyledInput from "../../components/StyledInput";
import { Player } from "../../types/Player";
import { register } from "../../websocket/GameWebsocket";
import StyledHome from "./home.style";
export default function Home() {
  const [name, setName] = useState("");
  const { push } = useHistory();
  const onActionButtonClick = (type: Player) => {
    register(type);
    push(type);
  };
  return (
    <StyledHome>
      <div className="inner-container">
        <h2>Damsharas</h2>
        <StyledInput
          value={name}
          onChange={($event) => setName($event.target.value)}
          type="text"
          placeholder="Name"
        />
        <div className="buttons">
          <StyledButton onClick={() => onActionButtonClick("finder")}>
            Finder
          </StyledButton>
          <StyledButton onClick={() => onActionButtonClick("helper")}>
            Helper
          </StyledButton>
        </div>
      </div>
    </StyledHome>
  );
}
