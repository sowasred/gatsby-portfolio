import styled from "styled-components";

const PostHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  text-align: center;
  position: relative;

  h1 {
    color: black;
    font-size: 25px;
  }
  .sitelink {
    display: flex;
    position: absolute;
    top: 3em;
    right: 3em;
    border-radius: 5px;
    padding: 0.5em;
    font-weight: 800;

    a {
      text-decoration: none;
      color: black;
      font-size: 1.2em;
    }
  }
  .sitelink:hover {
    background: #e6ffff;
  }

  p {
    color: #666d71;
    font-size: 35px;
    line-height: 1.2;
  }

  span {
    background: black;
    margin: 5px auto;
    height: 1px;
    width: 120px;
  }
`;

export default PostHeader;
