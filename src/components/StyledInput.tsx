import styled from "styled-components";

const StyledInput = styled.input`
  background-color: #ececec;
  border: none;
  border-radius: 37px;
  padding: 20px;
  transition: 0.3s ease-out;
  align-self: stretch;
  border: 1px solid rgba(236, 236, 236, 0);

  :focus {
    border: 1px solid var(--color);
    box-shadow: 0 0 10px var(--color);
    outline: none;
  }
  &.error {
    border: 1px solid red;
    box-shadow: 0 0 10px red;
  }
  font-size: 1rem;
  font-family: "Acme";
`;
export default StyledInput;
