import styled from "styled-components";

const SocialLink = styled.a`
  display: inline-block;
  margin: 5px;
  padding: 5px 10px;
  text-decoration: none;

  svg {
    display: inline-block;
    height: 20px;
    margin-right: 5px;
    vertical-align: middle;
    width: 20px;
    transition: all 1s;
  }

  svg:hover {
    -ms-transform: translateY(-10px); /* IE 9 */
    transform: translateY(-10px);
    transition: all 1s ease-out;
  }
`;

export default SocialLink;
