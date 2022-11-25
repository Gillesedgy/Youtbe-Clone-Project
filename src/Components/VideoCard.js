// import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./VideoCard.css";
import Grid from "@mui/material/Grid";

export default function VideoCard({ result }) {
  const { id } = useParams();

  //import new URL for fetching
  let BASE_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2C%20statistics&id=${id}&maxResult=15&key=${process.env.REACT_APP_API_KEY2}`;

  return (
    <div>
      <Grid container spacing={3}>
        {result.map((vid, index) => {
          return (
            <Grid item l={4} key={index}>
              <div key={index} className="video__card">
                <Link
                  to={`/video/${vid.id.videoId}`}
                  state={{ title: vid.snippet.title }}
                >
                  <div className="img__div">
                    <img
                      className="video__img"
                      src={vid.snippet.thumbnails.medium.url}
                      alt={vid.snippet.title}
                    />
                  </div>
                  <h5>{vid.snippet.title}</h5>
                  <p>{vid.snippet.description}</p>

                  {console.log(vid)}
                </Link>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
