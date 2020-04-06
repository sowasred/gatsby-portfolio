import React from "react";

import H3 from "../H3";
import Wrapper from "./Wrapper";
import Social from "../../components/Social";
import Link from "../Header/Link";

import userConfig from "../../../config";

function Footer() {
  return (
    <Wrapper>
      <H3>
        <Link className="footername" to="/">
          {userConfig.homeButton}
        </Link>
      </H3>
      <span>|</span>

      {userConfig.social && (
        <Social
          github={userConfig.social.github}
          twitter={userConfig.social.twitter}
          linkedin={userConfig.social.linkedin}
        />
      )}
    </Wrapper>
  );
}

export default Footer;
