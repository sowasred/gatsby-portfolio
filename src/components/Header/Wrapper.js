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
    cursor: pointer;
    filter: invert(100%);
  }
  @media only screen and (max-width: 768px) {
    .resumeicon {
      top: 3vh;
      left: 12vw;
      height: 36px;
      filter: invert(100%);
    }
  }
  @media only screen and (max-width: 1023px) and (min-width: 768px) {
    .resumeicon {
      top: 10vh;
      left: 8vw;
    }
  }
  @media only screen and (max-width: 1030px) and (min-width: 1023px) {
    .resumeicon {
      top: 9vh;
      left: 7vw;
    }
  }
  .resumeicon:hover {
    filter: invert(20%);
  }
`;

export default Wrapper;
