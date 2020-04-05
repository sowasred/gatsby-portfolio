import styled from "styled-components";
import GatsbyLink from "gatsby-link";

const Link = styled(GatsbyLink)`
  color: #3e465b;
  text-decoration: none;
  background: #fffafa;
  border-radius: 2px;
  padding: 10px 5px;

  &:hover {
    background: #e6ffff !important;
  }
  @media only screen and (max-width: 768px) {
    padding: 5px;
    margin-left: 10px;
  }
`;

export default Link;
