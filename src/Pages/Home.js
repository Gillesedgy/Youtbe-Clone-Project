import React from "react";

import Recommended from "../Components/Recommended";

import Grid from "@mui/material/Grid";

export default function Home({ result, darkmode }) {
  return (
    <div className="home">
      <Recommended darkmode={darkmode} />
    </div>
  );
}
