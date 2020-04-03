import React from "react";
import userConfig from "../../../config";

import NavContainer from "../NavContainer";

import MainImage from "../MainImage";

import H2 from "../H2";
import H3 from "../H3";

import P from "./P";
import Link from "./Link";
import Wrapper from "./Wrapper";

function Header({ config }) {
  const { author, description, social, homeButton } = config;

  return (
    <NavContainer>
      <Wrapper>
        <Link to="/">
          <H2>{homeButton}</H2>
        </Link>
        {/* <H3>Portfolio</H3>
        <H3>Blog</H3> */}
      </Wrapper>
    </NavContainer>
  );
}

export default Header;
