import React from "react";

import ReactTooltip from "react-tooltip";

import PropTypes from "prop-types";
import { Wrapper, InnerWrapper, SmallWrapper } from "./Wrapper";
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
    <Wrapper>
      <InnerWrapper>
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

        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
          width="48px"
          height="48px"
          style={{ transform: "rotate(360deg)" }}
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
          className="icon"
        >
          <path
            d="M12.001.007C5.326.007.007 5.326.007 12S5.326 23.995 12 23.995s11.994-5.319 11.994-11.994S18.676.007 12.001.007zM2.614 12.105l9.283 9.283c-5.111 0-9.283-4.172-9.283-9.283zm11.473 9.074L2.823 9.915C3.76 5.743 7.516 2.614 12 2.614a9.476 9.476 0 0 1 7.614 3.86L18.259 7.62a7.657 7.657 0 0 0-6.362-3.337A7.555 7.555 0 0 0 4.7 9.393l9.804 9.805c2.4-.835 4.276-2.92 4.798-5.424h-4.068v-1.773h6.154c0 4.485-3.129 8.24-7.301 9.178z"
            fill="rgb(102,51,153)"
          />
        </svg> */}
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
          <img
            data-tip="Adobe XD"
            className="icon"
            src={Xd}
            alt="adobexd icon"
          />
          <ReactTooltip />
        </SmallWrapper>
      </InnerWrapper>
    </Wrapper>
  );
};

// Technologies.propTypes = {};

export default Technologies;
