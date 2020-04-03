import React, { useEffect } from "react";

import FeaturedImage from "../FeaturedImage";
import H5 from "../H5";
import P from "../P";
import Wrapper from "./Wrapper";
import InnerWrapper from "./InnerWrapper";

import Link from "./Link";
import Date from "./Date";
import ContinueReading from "./ContinueReading";
import Button from "../Button";

function Summary({ date, title, excerpt, slug, image, webaddress }) {
  return (
    <Wrapper>
      <Link to={slug}>
        <InnerWrapper>
          {/* {image && (
          <Link to={slug}>
            <FeaturedImage sizes={image.childImageSharp.sizes} />
          </Link>
        )} */}
          <H5>
            {title} | <Date>{date}</Date>
          </H5>
        </InnerWrapper>

        <P>{excerpt.substring(0, 100)}..</P>
        {/* <ContinueReading to={slug}>Continue Reading &rarr;</ContinueReading> */}
      </Link>
      {webaddress && webaddress.length > 5 ? (
        <a className="sitelink" href={webaddress} target="_blank">
          View Site
        </a>
      ) : null}
    </Wrapper>
  );
}

export default Summary;
