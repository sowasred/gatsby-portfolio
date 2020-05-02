import { graphql } from "gatsby";
import Helmet from "react-helmet";
import get from "lodash/get";
import React from "react";

import userConfig from "../../config";

import Layout from "./layout";

import Article from "../components/Article";
import ArticleHeader from "../components/ArticleHeader";
import {
  Card,
  CardMain,
  Wrapper,
  InnerWrapper,
  MobileWrapper,
} from "../components/Card";
import Container from "../components/Container";
// import FeaturedImage from "../components/FeaturedImage";
import Share from "../components/Share";
import Summary from "../components/Summary";
import Footer from "../components/Footer";
import Link from "../components/Header/Link";
import MobileBadge from "../components/Summary/MobileBadge";
import Homeicon from "../pages/images/homeicon.png";
class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const posts = this.props.data.allMarkdownRemark.edges;

    const author = get(this.props, "data.site.siteMetadata.author");
    const { previous, next } = this.props.pageContext;

    let url = "";
    let mobileScreen;
    if (typeof window !== `undefined`) {
      url = window.location.href;
    }
    if (typeof window !== `undefined`) {
      mobileScreen = window.screen.width <= 870;
    }
    let projects = false;
    if (typeof window !== `undefined`) {
      projects = window.location.pathname.includes("projects");
    }
    const renderPosts = () => {
      if (projects) {
        return (
          <React.Fragment>
            <Wrapper>
              <Link to="/">
                <h1 className="gohome">&#x2190; Go Home Page</h1>
              </Link>
              <h1 className="otherprojects">Other Projects</h1>
              <InnerWrapper>
                {posts && posts.length
                  ? posts.map((item) => {
                      if (
                        item.node.frontmatter.path.includes("projects") &&
                        item.node.frontmatter.path !== post.frontmatter.path
                      )
                        return (
                          <Card key={item.node.frontmatter.path}>
                            <Summary
                              date={item.node.frontmatter.date}
                              title={item.node.frontmatter.title}
                              excerpt={item.node.excerpt}
                              slug={item.node.frontmatter.path}
                              webaddress={
                                item.node.frontmatter.webaddress &&
                                item.node.frontmatter.webaddress.length > 0
                                  ? item.node.frontmatter.webaddress
                                  : "/"
                              }
                            />
                          </Card>
                        );
                    })
                  : null}
              </InnerWrapper>
            </Wrapper>
          </React.Fragment>
        );
      } else {
        return (
          <React.Fragment>
            <Wrapper>
              <Link to="/">
                <h1 className="gohome">&#x2190; Go Home Page</h1>
              </Link>
              <h1>Other Blog Posts</h1>
              <InnerWrapper>
                {posts && posts.length
                  ? posts.map((item) => {
                      if (
                        item.node.frontmatter.path.includes("blog") &&
                        item.node.frontmatter.path !== post.frontmatter.path
                      )
                        return (
                          <Card key={item.node.frontmatter.path}>
                            <Summary
                              date={item.node.frontmatter.date}
                              title={item.node.frontmatter.title}
                              excerpt={item.node.excerpt}
                              slug={item.node.frontmatter.path}
                              webaddress={
                                item.node.frontmatter.webaddress &&
                                item.node.frontmatter.webaddress.length > 0
                                  ? item.node.frontmatter.webaddress
                                  : "/"
                              }
                            />
                          </Card>
                        );
                    })
                  : null}
              </InnerWrapper>
            </Wrapper>
          </React.Fragment>
        );
      }
    };
    const renderMobilePosts = () => {
      if (projects) {
        return (
          <React.Fragment>
            <MobileWrapper>
              {posts && posts.length
                ? posts.map((item) => {
                    if (
                      item.node.frontmatter.path.includes("projects") &&
                      item.node.frontmatter.path !== post.frontmatter.path
                    )
                      return (
                        <MobileBadge
                          title={item.node.frontmatter.title}
                          slug={item.node.frontmatter.path}
                        />
                      );
                  })
                : null}
            </MobileWrapper>
          </React.Fragment>
        );
      } else {
        return (
          <React.Fragment>
            <MobileWrapper>
              {posts && posts.length
                ? posts.map((item) => {
                    if (
                      item.node.frontmatter.path.includes("blog") &&
                      item.node.frontmatter.path !== post.frontmatter.path
                    )
                      return (
                        <MobileWrapper key={item.node.frontmatter.path}>
                          <MobileBadge
                            title={item.node.frontmatter.title}
                            slug={item.node.frontmatter.path}
                          />
                        </MobileWrapper>
                      );
                  })
                : null}
            </MobileWrapper>
          </React.Fragment>
        );
      }
    };

    return (
      <Layout>
        <Container>
          <Helmet
            title={`${post.frontmatter.title} | ${author}`}
            htmlAttributes={{ lang: "en" }}
          >
            <meta
              name="description"
              content={`${userConfig.title} | ${userConfig.description}`}
            />
          </Helmet>
          {mobileScreen ? (
            <Link to="/">
              <img className="homeicon" src={Homeicon} alt="home icon" />
            </Link>
          ) : null}

          <CardMain>
            <ArticleHeader>
              <h1>{post.frontmatter.title}</h1>
              {post.frontmatter.webaddress &&
              post.frontmatter.webaddress.length > 3 ? (
                <div className="sitelink">
                  <a href={post.frontmatter.webaddress} target="_blank">
                    View Site
                  </a>
                </div>
              ) : null}
              <span />
            </ArticleHeader>
            <Article>
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </Article>
            {userConfig.showShareButtons && (
              <Share url={url} title={post.frontmatter.title} />
            )}
          </CardMain>
          {mobileScreen ? renderMobilePosts() : renderPosts()}

          {/* <PageNav>
            {previous && (
              <Button to={previous.frontmatter.path} rel="prev">
                ← {previous.frontmatter.title}
              </Button>
            )}

            {next && (
              <Button to={next.frontmatter.path} rel="next">
                {next.frontmatter.title} →
              </Button>
            )}
          </PageNav> */}
        </Container>
        <Footer />
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
      id
      html
      frontmatter {
        path
        title
        webaddress
        date(formatString: "MMMM DD, YYYY")
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            title
            date
            path
            webaddress
          }
          excerpt
        }
      }
    }
  }
`;
