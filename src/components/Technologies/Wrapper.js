import styled from "styled-components";

export const Wrapper = styled.section`
  display: "flex";
  margin-top: 5vh;
`;

export const InnerWrapper = styled.section`
  display: "flex";
  flex-wrap: "wrap";

  .icon {
    font-size: 5em;
    margin: 20px;
    transition: all 1s;
  }
`;

export const SmallWrapper = styled.span`
  display: "flex" !important;
  max-width: "48px" !important;
  flex-direction: "column";
`;
