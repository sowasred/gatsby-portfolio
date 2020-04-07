import styled from "styled-components";

const Wrapper = styled.footer`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin: 7vh 0;
  border-radius: 20px;
  width: 100%;
  flex-wrap: wrap;
  .gatsbyref {
    display: flex;
    width: 100vw;
    font-size: 1em;
    text-align: center;
    justify-content: center;
    font-weight: 800;
  }
  span {
    display: flex;
    align-items: center;
    font-size: 2em;
    margin-top: 15px;
    font-weight: 900;
  }
  h3 {
    color: black;
    display: flex;
    align-items: center;
    line-height: 1em !important;
    margin-top: 15px;
  }
`;

export default Wrapper;
