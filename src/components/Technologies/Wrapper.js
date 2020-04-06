import styled from "styled-components";

export const Wrapper = styled.section`
  display: "flex !important";
  margin-top: 5vh;
  flex-wrap: "wrap";
  @media only screen and (max-width: 870) {
    margin-top: 6vh;
  }
  @media only screen and (max-width: 1024px) and (min-width: 870px) {
    margin-top: 0vh;
  }
`;

export const WrapperTech = styled.div`
  display: "flex !important";
  margin-top: 5vh;
  flex-wrap: "wrap";
  @media only screen and (max-width: 870) {
    margin-top: 6vh;
  }
  @media only screen and (max-width: 1024px) and (min-width: 870px) {
    margin-top: 0vh;
  }
`;

export const SmallWrapper = styled.span`
  display: "flex" !important;
  max-width: "48px" !important;
  flex-direction: "column";
  padding: 20px;
  .icon {
    margin: 10px;
    transition: all 1s;
  }

  .tooltip .tooltiptext {
    visibility: hidden;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    top: 0;
    /* Position the tooltip */
    position: absolute;
    z-index: 1;
  }
  .tooltip {
    position: relative;
  }

  .tooltip:hover .tooltiptext {
    visibility: visible;
  }
`;
