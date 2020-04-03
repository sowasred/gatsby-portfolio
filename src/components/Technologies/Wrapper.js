import styled from "styled-components";

export const Wrapper = styled.section`
  display: "flex !important";
  margin-top: 5vh;
  flex-wrap: "wrap";
  @media only screen and (max-width: 768px) {
    margin-top: 2vh;
  }
  @media only screen and (max-width: 1024px) and (min-width: 768px) {
    margin-top: 0vh;
  }
`;

export const InnerWrapper = styled.div`
  display: "flex !important";
  flex-wrap: "wrap";

  .icon {
    font-size: 5em;
    margin: 20px;
    transition: all 1s;
  }
  @media only screen and (max-width: 768px) {
    .icon {
      margin: 10px;
      font-size: 3em;
    }
  }
`;

export const SmallWrapper = styled.span`
  display: "flex" !important;
  max-width: "48px" !important;
  flex-direction: "column";
`;
