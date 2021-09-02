import styled from "styled-components";

const StyledHome = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  .inner-container {
    border-radius: 22px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 0 27px rgba(0, 0, 0, 0.22);
    padding: 20px;
    .buttons {
      margin-top: 25px;
      button {
        :nth-of-type(1) {
          margin-right: 5px;
        }
      }
    }
  }
`;
export default StyledHome;
