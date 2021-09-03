import React, { useState } from "react";
import { useEffect } from "react";
import StyledButton from "../../components/StyledButton";
import {
  addHints,
  listenToHintsGeneration,
  listenToKeywordGeneration,
} from "../../websocket/GameWebsocket";
import StyledHelper from "./helper.style";

export default function Helper() {
  const [hints, setHints] = useState<string[]>(["Test", "Maths"]);
  const [selectedHints, setSelectedHints] = useState<string[]>([]);
  const [hintPublished, setHintPublished] = useState(false);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    listenToKeywordGeneration((keyword: string) => {
      setKeyword(keyword);
    });

    listenToHintsGeneration((hints: string[]) => {
      setHints(hints);
    });
  });
  const toggleHint = (hint: string) => {
    if (hintPublished) return;
    if (selectedHints.includes(hint)) {
      const clonedArray = selectedHints.slice();
      clonedArray.splice(clonedArray.indexOf(hint), 1);
      setSelectedHints(clonedArray);
    } else {
      const clonedArray = selectedHints.slice();
      clonedArray.push(hint);
      setSelectedHints(clonedArray);
    }
  };

  const publishHints = () => {
    if (hintPublished) return;
    addHints(selectedHints);
    setHintPublished(true);
  };

  return (
    <StyledHelper>
      <h2>Your keyword is {keyword}</h2>
      <div className="clues">
        <h2 className="title">Select clues</h2>
        {hints.map((hint, i) => (
          <div
            key={i}
            className={`clue ${
              selectedHints.includes(hint) ? "selected" : ""
            } ${hintPublished ? "disabled" : ""}`}
            onClick={() => toggleHint(hint)}
          >
            {hint}
          </div>
        ))}
        <StyledButton className="button-done" onClick={publishHints}>
          Done
        </StyledButton>
      </div>
    </StyledHelper>
  );
}
