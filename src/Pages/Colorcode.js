import React from "react";
import { Link } from "react-router-dom";
import colorcode from "../StoredData/colorcode";
import Grid from "@mui/material/Grid";

export default function Colorcode() {
  const items = colorcode[0].items;
  return (
    <div>
      <h2>Colorcode</h2>
      <div className="videocard">
        <Grid container spacing={3}>
          {console.log(colorcode[0].items)}
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
    </div>
  );
}
