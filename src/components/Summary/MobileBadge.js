import React, { useEffect } from "react";

import Link from "./Link";

function MobileBadge({ title, slug }) {
  return (
    <Link className="badge" to={slug}>
      {title}
    </Link>
  );
}

export default MobileBadge;
