import React from "react";
import { Link } from "react-router-dom";
import wwdits from "../StoredData/wwdits";
import Grid from "@mui/material/Grid";
import "./Pages.css";

export default function WWDITS({ darkmode }) {
  const items = wwdits[0].items;
  return (
    <div className={darkmode ? "darkMode" : "default"}>
      <h2 style={{ color: darkmode ? "white" : "black" }}>
        What We Do In The Shadows
      </h2>
      <br />
      <Grid container spacing={3}>
        {items.map((vid, index) => {
          return (
            <Grid item md={4} key={index}>
              <div key={index} className="video_card">
                <br></br>
                <Link
                  to={`/video/${vid.id.videoId}`}
                  state={{ title: vid.snippet.title }}
                >
                  <img
                    className="thumbnail"
                    src={vid.snippet.thumbnails.medium.url}
                    alt={vid.snippet.title}
                  />
                  <h5>{vid.snippet.title}</h5>

                  {/* <p>{vid.snippet.description}</p> */}
                </Link>
                <br></br>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
