import styled from "styled-components";

const NavContainer = styled.section`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  position: relative;
  .theme {
    position: absolute;
    width: 2vw;
    top: 5vh;
    right: 0;
  }
img{
  z-index:99;
  cursor:pointer;
}

  @media only screen and (max-width: 870px) {
    .theme{
      width:7vw;
      top:2vh;
    }

  }
  @media only screen and (max-width: 1024px) and (min-width: 870px) {
   .theme{
    width:4vw;
    right:2vw;
  }
   } 
  }
`;

export default NavContainer;
