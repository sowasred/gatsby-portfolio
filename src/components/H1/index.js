import styled from "styled-components";

export const H1 = styled.h1`
  color: #3e465b;
  font-size: 40px;
  line-height: 1.5;
  margin: 0;
  text-shadow: 2px 8px 6px rgba(0, 0, 0, 0.2);
  @media only screen and (max-width: 768px) {
    font-size: 30px;
    margin-top: 1vh;
  }
  @media only screen and (max-width: 1024px) and (min-width: 768px) {
  }
`;

export const H2 = styled.h2`
  color: black;
  font-size: 27px;
  font-weight: 700;
  line-height: 1.5;
  margin: 0 25px;
  cursor: pointer;
  text-shadow: 2px 8px 6px rgba(0, 0, 0, 0.2);
  @media only screen and (max-width: 768px) {
    font-size: 20px;
  }
`;
