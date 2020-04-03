import styled from "styled-components";
import Link from "gatsby-link";

const Button = styled(Link)`
  color: black;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    border-color: #fff;
    color: #fff;
  }
`;

export default Button;
