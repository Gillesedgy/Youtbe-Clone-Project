import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import YouTube from "react-youtube";

export default function VideoCard({ result, videoId }) {
  {
    /* <Youtube videoId={id} opts={opts} onReady={onPlayerReady}/> */
  }

  const { id } = useParams();
  const opts = {
    height: "400",
    width: "640",
  };
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
    <div className="videocard">
      {result.map((vid, index) => {
        return (
          <div key={index}>
            <Link to={`/videos/${videoId}`} state={{ vid }}>
              <img
                src={vid.snippet.thumbnails.medium.url}
                alt={vid.snippet.title}
              />
              <h5>{vid.snippet.title}</h5>
              <p>{vid.snippet.description}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
