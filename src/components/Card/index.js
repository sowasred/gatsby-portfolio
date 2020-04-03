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

  @media only screen and (max-width: 870px) {
    border-left: none;
    border-right: none;
    padding: 75px 15px;
  }
`;

export const CardMain = styled.div`
  background: #fff;
  margin: 12vh 12vw;
  border-radius: 3px;
  width: 50%;
  @media only screen and (max-width: 870px) {
    border-left: none;
    border-right: none;
    padding: 75px 15px;
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
`;

export const InnerWrapper = styled.div``;
