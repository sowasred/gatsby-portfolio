import styled from "styled-components";

const Wrapper = styled.header`
  display: flex;
  justify-content: flex-end;
  width: 100vw;

  .resumeicon {
    position: absolute;
    left: 16vw;
    top: 10vh;
    height: 48px;
    filter: invert(100%);
    cursor: pointer;
  }
  @media only screen and (max-width: 768px) {
    .resumeicon {
      top: 3vh;
      left: 12vw;
      height: 36px;
    }
  }
  @media only screen and (max-width: 1023px) and (min-width: 768px) {
    .resumeicon {
      top: 8vh;
      left: 15vw;
    }
  }
  .resumeicon:hover {
    filter: invert(20%);
  }
`;

export default Wrapper;
