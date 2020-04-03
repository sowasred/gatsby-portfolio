import { graphql } from "gatsby";
import Helmet from "react-helmet";
import React, { useState, useEffect } from "react";

import userConfig from "../../config";

import Layout from "./layout";

import { Card } from "../components/Card";

import Container from "../components/Container";
import MainSection from "../components/MainSection";
import OtherSection from "../components/OtherSection";
import Technologies from "../components/Technologies";

import Social from "../components/Social";
import { H1, H2 } from "../components/H1";
import H4 from "../components/H4";

import Link from "../components/Header/Link";

import Pagination from "../components/Pagination";
import Summary from "../components/Summary";

const IndexPage = ({ pageContext }) => {
  const { group, index, pageCount } = pageContext;
  const previousUrl = index - 1 === 1 ? "" : (index - 1).toString();
  const nextUrl = (index + 1).toString();
  const [blogposts, setBlogposts] = useState([]);
  const [projects, setProjects] = useState([]);

  const tempArray1 = [];
  const tempArray2 = [];

  useEffect(() => {
    group.map(({ node }) => {
      console.info("ses", node.frontmatter.path.includes("projects"));
      if (node.frontmatter.path.includes("projects")) {
        console.info("node", node);
        tempArray1.push(node);
      } else {
        console.info("node99", node);
        tempArray2.push(node);
      }
    });
    setProjects([...tempArray1]);
    setBlogposts([...tempArray2]);
  }, []);

  const renderPosts = () => {
    return (
      <React.Fragment>
        <H4>Projects </H4>
        {projects && projects.length > 0 ? (
          projects.map(node => (
            <Card key={node.frontmatter.path}>
              <Summary
                date={node.frontmatter.date}
                title={node.frontmatter.title}
                excerpt={node.excerpt}
                slug={node.frontmatter.path}
                webaddress={
                  node.frontmatter.webaddress &&
                  node.frontmatter.webaddress.length > 0
                    ? node.frontmatter.webaddress
                    : "/"
                }
              />
            </Card>
          ))
        ) : (
          <p>
            This part is still underconstruction, excuse us and check it out
            later.
          </p>
        )}
        <H4>Recent Blog Posts </H4>
        {blogposts && blogposts.length > 0 ? (
          blogposts.map(node => (
            <Card key={node.frontmatter.path}>
              <Summary
                date={node.frontmatter.date}
                title={node.frontmatter.title}
                excerpt={node.excerpt}
                slug={node.frontmatter.path}
              />
            </Card>
          ))
        ) : (
          <p style={{ fontSize: "1.3em" }}>
            This part is still underconstruction, excuse us and check it out
            later.
          </p>
        )}
      </React.Fragment>
    );
  };

  console.info("yarrak", group, "index", index, "pageCount", pageCount);

  console.info("portfoliooo", projects);
  console.info("blogposts", blogposts);
  return (
    <Layout>
      <Container>
        <Helmet
          title={`${userConfig.title} | ${userConfig.author}`}
          htmlAttributes={{ lang: "en" }}
        >
          <meta
            name="description"
            content={`${userConfig.title} | ${userConfig.description}`}
          />
        </Helmet>

        <MainSection>
          <H1>
            <Link to="/">{userConfig.author}</Link>
          </H1>
          <H2>{userConfig.description}</H2>
          {userConfig.social && (
            <Social
              github={userConfig.social.github}
              twitter={userConfig.social.twitter}
              linkedin={userConfig.social.linkedin}
              location={userConfig.social.location}
            />
          )}

          <Technologies />
        </MainSection>
        <OtherSection>
          {renderPosts()}
          {/* <Pagination
            isFirst={index === 1}
            isLast={index === pageCount}
            nextUrl={nextUrl}
            previousUrl={previousUrl}
          /> */}
        </OtherSection>
      </Container>
    </Layout>
  );
};

export const bgQuery = graphql`
  query BackgroundImageQuery {
    imageSharp(fluid: { originalName: { eq: "1.jpg" } }) {
      fluid {
        src
        tracedSVG
      }
    }
  }
`;
export default IndexPage;
