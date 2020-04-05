import React from "react";
import "prismjs/themes/prism.css";

import "../global-styles";
import userConfig from "../../config";

import Header from "../components/Header";
import GlobalStyle from "../global-styles";

class Template extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <React.Fragment>
        <div
          style={{
            position: "relative",
          }}
        >
          <GlobalStyle />
          <Header config={userConfig} />
          {children}
        </div>
      </React.Fragment>
    );
  }
}

export default Template;
