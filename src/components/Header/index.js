import React from "react";
import userConfig from "../../../config";

import NavContainer from "../NavContainer";

import MainImage from "../MainImage";

import H2 from "../H2";
import H3 from "../H3";

import P from "./P";
import Link from "./Link";
import Wrapper from "./Wrapper";
import Resume from "./cv.png";

function Header({ config }) {
  const { author, description, social, homeButton } = config;

  return (
    <NavContainer>
      <Wrapper>
        <Link to="/">
          <H2>{homeButton}</H2>
        </Link>
        <a
          href="https://drive.google.com/file/d/1MzmoMiyf3go-auSD3Xtm1Jx2_E0ey68F/view"
          target="_blank"
        >
          <img className="resumeicon" src={Resume} alt="Resume icon"></img>
        </a>
        {/* <H3>Portfolio</H3>
        <H3>Blog</H3> */}
      </Wrapper>
    </NavContainer>
  );
}

export default Header;
