import styled from "styled-components";

const OtherSection = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 50vw;
  overflow: hidden;
  margin-top: 5vh;

  @media only screen and (max-width: 768px) {
    margin-top: 2vh;
    width: 100vw !important;
    max-width: 100vw;
  }
  @media only screen and (max-width: 1024px) and (min-width: 870px) {
    max-width: 40vw;
  }
  @media only screen and (min-width: 560px) and(max-width: 870px) {
    max-width: 100vw;
  }
`;

export default OtherSection;
