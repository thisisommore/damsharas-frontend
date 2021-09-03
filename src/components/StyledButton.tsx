import styled from "styled-components";

const StyledButton = styled.button`
  background-color: var(--color);
  color: white;
  border: none;
  border-radius: 46px;
  padding: 10px 20px;
  font-family: "Acme";
  transition: 0.4s;

  :hover {
    box-shadow: 0 0 10px var(--color);
  }
`;
export default StyledButton;
