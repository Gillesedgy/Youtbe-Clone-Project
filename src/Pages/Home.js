import React from "react";

import Recommended from "../Components/Recommended";

export default function Home({ darkmode }) {
  return (
    <div className="home">
      <Recommended darkmode={darkmode} />
    </div>
  );
}
