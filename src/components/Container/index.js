import styled from "styled-components";

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 5vh;
  @media only screen and (max-width: 768px) {
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
