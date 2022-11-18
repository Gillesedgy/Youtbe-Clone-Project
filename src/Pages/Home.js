import React from "react";

import Recommended from "../Components/Recommended";

import Grid from "@mui/material/Grid";
import "./Home.css";

export default function Home({ result }) {
  return (
    <div className="home">
      {/* // <Grid container spacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}> */}
      <Recommended />
      {/* // </Grid> */}
    </div>
  );
}
