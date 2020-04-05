import styled from "styled-components";

const MainSection = styled.main`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  text-align: center;
  width: 50%;
  padding-left: 20vw;
  margin-top: 5vh;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 0;
    margin-top: 3vh;
  }
  @media only screen and (max-width: 1024px) and (min-width: 768px) {
    margin-top: 10vh;
    padding: 0;
  }
`;

export default MainSection;
