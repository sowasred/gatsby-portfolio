import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .sitelink {
    text-decoration: none;
    font-size: 1.6em;
    color: black;
    width: max-content;
    text-shadow: 2px 8px 6px rgba(0, 0, 0, 0.2);
    display: flex;
    padding: 0.5em;
    margin-top: 0.8em;
    background: white;
    border-radius: 3px;
  }
  .sitelink:hover {
    background: #e6ffff;
  }

  @media only screen and (max-width: 768px) {
    .sitelink {
      font-size: 12px;
      padding: 0.3em;
      margin-top: 0.4em;
      margin-left: 1em;
    }
  }
`;

export default Wrapper;
