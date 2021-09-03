import styled from "styled-components";

const StyledHelper = styled.div`
  margin: 10px;
  .clues {
    box-shadow: 0 0 27px rgba(0, 0, 0, 0.22);
    border-radius: 22px;
    padding: 15px;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    .title {
      width: 100%;
    }
    .clue {
      padding: 10px;
      transition: 0.4s;
      cursor: pointer;
    }

    .clue.disabled {
      color: var(--color-washed);
    }
    .clue.selected {
      display: inline;
      background-color: var(--color);
      color: white;
    }

    .button-done {
      margin-left: auto;
      margin-top: auto;
      margin-right: -15px;
      margin-bottom: -15px;
      border-top-right-radius: 0px;
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
    }
  }
`;
export default StyledHelper;
