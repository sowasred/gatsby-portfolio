import styled from "styled-components";

const H2 = styled.h2`
  position: absolute;
  left: 12vw;
  top: 8vh;
  color: #fff;
  font-size: 22px;
  font-weight: 700;
  line-height: 1.5;
  cursor: pointer;
  &:hover {
    color: #e6ffff;
  }

  @media only screen and (max-width: 767px) {
    left: 0vw;
    top: 3vh;
    font-size: 15px;
  }
  @media only screen and (max-width: 1024px) and (min-width: 767px) {
    left: 1vw;
    top: 8vh;
    font-size: 2em;
  }
`;

export default H2;
