import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  top: -22vh;
  z-index: -3;
  height: 125vh;
  overflow: hidden;
  background-repeat: repeat;
  @media only screen and (max-width: 1024px) {
    top: -8vh;
  }
`;

export default Wrapper;
