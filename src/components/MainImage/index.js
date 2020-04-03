import React from "react";
import Link from "gatsby-link";

import Wrapper from "./Wrapper";
import imgSrc from "../../main.jpg";

function MainImage() {
  return (
    <Wrapper>
      <img src={imgSrc} alt="lights sky" />
    </Wrapper>
  );
}

export default MainImage;
