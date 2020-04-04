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
  const { author, description, social, homeButton, resumeUrl } = config;
  let postPage;

  if (typeof window !== `undefined`) {
    postPage =
      window.location.pathname.includes("projects") |
      window.location.pathname.includes("blog");
  }

  return (
    <NavContainer>
      <Wrapper>
        <Link to="/">
          <H2>{homeButton}</H2>
        </Link>
        {postPage ? null : (
          <a href={resumeUrl} target="_blank">
            <img className="resumeicon" src={Resume} alt="Resume icon"></img>
          </a>
        )}
      </Wrapper>
    </NavContainer>
  );
}

export default Header;
