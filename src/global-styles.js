import { createGlobalStyle } from "styled-components";
import styledNormalize from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
  
  @import url("https://fonts.googleapis.com/css?family=Roboto:400,700");
  
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    box-sizing: border-box;
  }

 

  body {
    font-family: 'Open Sans', sans-serif; 
    line-height: 1.5;
  
  background: #77A1D3;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom, #E684AE, #79CBCA, #77A1D3);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom, #E684AE, #79CBCA, #77A1D3); 
    padding:0 7vh;


    @media only screen and (max-width: 870px) {
      padding:0 2vh;
  }
  }


  body {
    background: var(--bg);
    color: var(--textNormal);

    &.dark {
      --bg:  #000000;  !important;  /* fallback for old browsers */
      --bg: -webkit-linear-gradient(to right, #434343, #000000); /* Chrome 10-25, Safari 5.1-6 */
      --bg: linear-gradient(to right, #434343, #000000); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      transition: all 1s;
;

svg{
  fill:white;
}

.resumeicon{
  filter: invert(0%);

}
.aws {
    background: white;
    border-radius:0.5em;
  }



      --textNormal: #fff !important;
.footername{
  color:white;
}
  
    }

    &.light {
      
      --textNormal: #000;
      --bg: #77A1D3;  /* fallback for old browsers */
      --bg: -webkit-linear-gradient(to bottom, #E684AE, #79CBCA, #77A1D3);  /* Chrome 10-25, Safari 5.1-6 */
      --bg: linear-gradient(to bottom, #E684AE, #79CBCA, #77A1D3); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      transition: all 1s;

      .footername{
    color:black;
}
    }

  img {
    max-width: 100%;
    
  }

  .gatsby-highlight {
    border-bottom: 1px solid #e0e6ed;
    border-top: 1px solid #e0e6ed;
    margin: 15px -100px;
    padding: 0;

    pre[class*="language-"] {
      margin: 0;
      padding: 25px 100px;
    }
  }

  pre[class*="language-"] {
    background: rgba(245, 245, 245, 1);
    color: rgb(65, 76, 94);  }

  @media only screen and (max-width: 870px) {
    .gatsby-highlight {
      margin: 15px -15px;

      pre[class*="language-"] {
        padding: 25px;
      }
    }
  }
`;
export default GlobalStyle;
