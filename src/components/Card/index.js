import styled from "styled-components";

export const Card = styled.div`
  margin: 5px 10px;
  padding: 0.8vh 2vh;
  max-width: 42vw;
  transition: all 0.1s;
  min-width: 32vw;

  &:hover {
    -ms-transform: translateY(-10px); /* IE 9 */
    transform: translateY(-3px);
    transition: all 0.1s ease-out;
  }

  @media only screen and (max-width: 769px) {
    padding: 0;
    margin: 5px 0px;
    max-width: 100vw;
  }
  @media only screen and (min-width: 870px) and (max-width: 1024px) {
    min-width: 24vw;
  }
`;

export const CardMain = styled.div`
  background: #fff;
  margin: 12vh 12vw;
  border-radius: 3px;
  width: 50%;
  @media only screen and (max-width: 768px) {
    width: 100%;
    margin: auto 0;
    margin-top: 5vh;
  }
  @media only screen and (max-width: 1024px) and (min-width: 768px) {
    margin: 8vh 0 0 0;
  }
  @media only screen and (min-width: 560px) and (max-width: 870px) {
    left: 15vw;
    top: 10vh;
    width: 100;
  }
  @media only screen and (min-width: 870px) and (max-width: 1024px) {
    width: 80%;
  }
`;

export const Wrapper = styled.div`
  diplay: flex;
  position: fixed;
  right: 20vh;
  top: 14vh;
  width: 25vw;
  padding: 2vh;
  border-radius: 10px;
  @media only screen and (min-width: 870px) and (max-width: 1024px) {
    right: 2vh;
  }

  h1 {
    text-shadow: 2px 8px 6px rgba(0, 0, 0, 0.2);
  }
  .gohome {
    text-decoration: none;
    font-size: 1.6em;
    color: black;
    width: max-content;
    text-shadow: 2px 8px 6px rgba(0, 0, 0, 0.2);
    display: flex;
    padding: 0.5em;
    margin-top: 0.8em;
    background: white;
    border-radius: 3px;
  }
  .gohome:hover {
    background: #e6ffff;
  }

  @media only screen and (max-width: 768px) {
    position: relative;
    .gohome {
      position: absolute !important;
      top: 0vh;
      right: 0;
      font-size: 0.8em;
      margin-top: 0;
    }
    .otherprojects {
      visibility: hidden;
      width: 0;
      height: 0;
    }
  }
`;
export const MobileWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 5vh;
  left: 10vw;
  flex-wrap: wrap;
  @media only screen and (min-width: 560px) and (max-width: 870px) {
    left: 15vw;
    top: 10vh;
  }
`;

export const InnerWrapper = styled.div`
  @media only screen and (max-width: 768px) {
    display: flex;
    height: 10vh;
    width: 100vw;
 
`;
