import React, { useEffect, useState } from "react";
import { verifyKeyword } from "../../api/GameAPI";
import StyledButton from "../../components/StyledButton";
import StyledInput from "../../components/StyledInput";
import { listenToHints } from "../../websocket/GameWebsocket";
import StyledFinder from "./finder.style";

export default function Finder() {
  const [hints, setHints] = useState<string[]>([]);
  const [keywordInput, setKeywordInput] = useState("");
  useEffect(() => {
    listenToHints((hints) => {
      setHints(hints);
    });
  }, []);

  const onSubmit = async () => {
    const { data: response } = await verifyKeyword(keywordInput);
    alert(response);
  };

  return (
    <StyledFinder>
      <div className="clues card">
        <h2>Clues</h2>
        {hints.map((hint, i) => (
          <div key={i} className="clue">
            {hint}
          </div>
        ))}
      </div>
      <div className="your-guess card">
        <h2>Your guess</h2>
        <StyledInput
          placeholder="Guess"
          value={keywordInput}
          onChange={($event) => setKeywordInput($event.target.value)}
        />
        <StyledButton className="button-submit" onClick={onSubmit}>
          Submit
        </StyledButton>
      </div>
    </StyledFinder>
  );
}
