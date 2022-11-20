import React from "react";
import { Link } from "react-router-dom";
import wwdits from "../StoredData/wwdits";
import Grid from "@mui/material/Grid";

export default function WWDITS() {
  const items = wwdits[0].items;
  return (
    <div>
      <h2>What We Do In The Shadows</h2>
      <Grid container spacing={3}>
        {items.map((vid, index) => {
          return (
            <Grid item md={4}>
              <div key={index}>
                <br></br>
                <Link
                  to={`/video/${vid.id.videoId}`}
                  state={{ title: vid.snippet.title }}
                >
                  <img
                    src={vid.snippet.thumbnails.medium.url}
                    alt={vid.snippet.title}
                  />
                  <h5>{vid.snippet.title}</h5>

                  {/* <p>{vid.snippet.description}</p> */}
                </Link>
                <br></br>
                <hr></hr>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
