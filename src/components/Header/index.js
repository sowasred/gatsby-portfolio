import React, { useState, useEffect } from "react";

import NavContainer from "../NavContainer";

import H2 from "../H2";
import Link from "./Link";
import Wrapper from "./Wrapper";
import Resume from "./cv.png";
import moon from "./moon.png";
import sun from "./sun.png";

function Header({ config }) {
  let websiteTheme;
  if (typeof window !== `undefined`) {
    websiteTheme = window.__theme;
  }
  const [theme, setTheme] = useState(websiteTheme);
  const { author, description, social, homeButton, resumeUrl } = config;
  let postPage;

  if (typeof window !== `undefined`) {
    postPage =
      window.location.pathname.includes("projects") |
      window.location.pathname.includes("blog");
  }
  useEffect(() => {
    setTheme(window.__theme);
    window.__onThemeChange = () => {
      setTheme(window.__theme);
    };
  }, []);

  const ThemeToggle = () => {
    window.__setPreferredTheme(websiteTheme === "dark" ? "light" : "dark");
  };

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
      <div className="theme" onClick={ThemeToggle}>
        {theme === "dark" ? (
          <img src={sun} alt="Light mode" />
        ) : (
          <img src={moon} alt="Dark mode" />
        )}
      </div>
    </NavContainer>
  );
}

export default Header;
