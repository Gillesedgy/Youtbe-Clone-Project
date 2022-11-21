import React from "react";
import { useParams } from "react-router-dom";
import Comments from "./Comments";
import Recommended from "./Recommended";
import YouTube from "react-youtube";

export default function VideoClicked({ setComment, comment }) {
  const { id } = useParams();
  const opts = {
    videoId: id,
    autoplay: true,
    mute: true,
    controls: true,
    loop: true,
    playsInline: true,
    preload: "auto",
    width: "640",
    height: "390",
    aspectRatio: "16:9",
  };

  return (
    <div className="videoClicked">
      <YouTube videoId={id} opts={opts} />
      <br></br>
      <hr></hr>
      <div className="comment_section">
        <Comments setComment={setComment} comment={comment} />
      </div>
    </div>
  );
}
