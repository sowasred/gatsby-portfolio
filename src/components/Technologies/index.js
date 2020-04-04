import React from "react";

import ReactTooltip from "react-tooltip";

import PropTypes from "prop-types";
import { WrapperTech, SmallWrapper } from "./Wrapper";
// import Technology from "./Technology";
import H5 from "../H5";
import GatsbyLogo from "./logos/gatsby.png";

// import ReactLogo from "./logos/react.png";
import ReduxLogo from "./logos/redux.png";
import JavascriptLogo from "./logos/javascript.png";
import Nodejs from "./logos/nodejs.png";
import Graphql from "./logos/graphql.png";
import Npm from "./logos/npm.png";
import WordPres from "./logos/wordpress.png";
import Mysql from "./logos/mysql.png";
import Mongo from "./logos/mongodb.png";
import Aws from "./logos/aws.png";

import Git from "./logos/git.png";
import Figma from "./logos/figma.png";
import Pp from "./logos/pp.png";
import Xd from "./logos/xd.png";
import ReactLogo from "./logos/react.png";

const Technologies = props => {
  const state = {
    place: "top",
    type: "success",
    effect: "solid",
    condition: true
  };
  return (
    <WrapperTech>
      <SmallWrapper>
        <img
          data-tip="JavaScript"
          className="icon"
          src={JavascriptLogo}
          alt="Javascript icon"
        />
        <ReactTooltip
          id="main"
          place={state.place}
          type={state.type}
          effect={state.effect}
          multiline={state.condition}
        />
      </SmallWrapper>
      <SmallWrapper>
        <img
          data-tip="Gatsbyjs"
          className="icon"
          src={GatsbyLogo}
          alt="Gatsby icon"
        />
        <ReactTooltip />
      </SmallWrapper>

      <SmallWrapper>
        <img
          data-tip="React"
          className="icon"
          src={ReactLogo}
          alt="React icon"
        />
        <ReactTooltip />
      </SmallWrapper>
      <SmallWrapper>
        <img
          data-tip="Redux"
          className="icon"
          src={ReduxLogo}
          alt="Redux icon"
        />
        <ReactTooltip />
      </SmallWrapper>
      <SmallWrapper>
        <img
          className="icon"
          data-tip="Graphql"
          src={Graphql}
          alt="Graphql icon"
        />
        <ReactTooltip />
      </SmallWrapper>

      <SmallWrapper>
        <img
          className="icon"
          data-tip="Nodejs"
          src={Nodejs}
          alt="Nodejs icon"
        />
        <ReactTooltip />
      </SmallWrapper>

      <SmallWrapper>
        <img
          data-tip="Node Package Manager"
          className="icon"
          src={Npm}
          alt="Npm icon"
        />
        <ReactTooltip />
      </SmallWrapper>

      <SmallWrapper>
        <img
          data-tip="WordPress"
          className="icon"
          src={WordPres}
          alt="Wordpress icon"
        />
        <ReactTooltip />
      </SmallWrapper>

      <SmallWrapper>
        <img
          data-tip="MongoDB"
          className="icon"
          src={Mongo}
          alt="MongoDB icon"
        />
        <ReactTooltip />
      </SmallWrapper>

      <SmallWrapper>
        <img data-tip="MySQL" className="icon" src={Mysql} alt="MySql icon" />
        <ReactTooltip />
      </SmallWrapper>

      <SmallWrapper>
        <img
          data-tip="Amazon Web Services"
          className="icon"
          src={Aws}
          alt="Aws icon"
        />
        <ReactTooltip />
      </SmallWrapper>

      <SmallWrapper>
        <img
          data-tip="Git Version Controlling"
          className="icon"
          src={Git}
          alt="Git icon"
        />
        <ReactTooltip />
      </SmallWrapper>

      <SmallWrapper>
        <img data-tip="Figma" className="icon" src={Figma} alt="Figma icon" />
        <ReactTooltip />
      </SmallWrapper>

      <SmallWrapper>
        <img
          data-tip="Photoshop"
          className="icon"
          src={Pp}
          alt="photoshop icon"
        />
        <ReactTooltip />
      </SmallWrapper>

      <SmallWrapper>
        <img data-tip="Adobe XD" className="icon" src={Xd} alt="adobexd icon" />
        <ReactTooltip />
      </SmallWrapper>
    </WrapperTech>
  );
};

// Technologies.propTypes = {};

export default Technologies;
