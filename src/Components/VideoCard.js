import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./VideoCard.css";
import Grid from "@mui/material/Grid";

export default function VideoCard({ result, videoId, setClicked }) {
  const { id } = useParams();

  //import new URL for fetching
  let BASE_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2C%20statistics&id=${id}&maxResult=15&key=AIzaSyAuLsFRZknOO7c4ZGDiGovyi3g3b8WCyiI`;

  // useEffect(()=>{
  // fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=AIzaSyAuLsFRZknOO7c4ZGDiGovyi3g3b8WCyiI`)
  // .then((result)=> result.json())
  //   .then((res)=> console.log(res.items))
  //   .catch((err)=> console.log(err)
  // )
  // },[videoId])

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
