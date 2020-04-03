import styled from "styled-components";

const Wrapper = styled.div`
  width: 12vw;
  position: absolute;
  top: -2vh;
  right: -2vh;
  border-radius: 10px;
  overflow: hidden;
  @media only screen and (max-width: 870px) {
    margin: -65px -5px 50px;
  }
`;

export default Wrapper;
