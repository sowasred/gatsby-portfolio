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
    height: 15px;
    position: absolute;
    top: 7vh;
    right: 2vh;
    filter: invert(100%);
  }
  .homeicon:hover {
    color: red;
  }
`;

export default Container;
