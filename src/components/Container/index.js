import styled from "styled-components";

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 5vh;
  @media only screen and (min-width: 560px) and (max-width: 870px) {
    .homeicon {
      top: 10vh !important;
    }
  }
  .homeicon {
    display: flex;
    height: 25px;
    position: absolute;
    top: 4vh;
    right: 6vh;
    filter: invert(100%);
  }
  @media only screen and (max-width: 1023px) and (min-width: 768px) {
    .homeicon {
      right: 3vw;
    }
  }
`;

export default Container;
