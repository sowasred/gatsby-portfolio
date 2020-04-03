import styled from "styled-components";

const OtherSection = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 50vw;
  overflow: hidden;
  margin-top: 8vh;

  @media only screen and (max-width: 768px) {
    margin-top: 2vh;
    width: 100vw !important;
    max-width: 100vw;
  }
  @media only screen and (max-width: 1024px) and (min-width: 768px) {
    max-width: 40vw;
  }
`;

export default OtherSection;
