import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comments from "./Comments";
import Recommended from "./Recommended";
import YouTube from "react-youtube";

export default function VideoClicked({ setComment, comment, input }) {
  const { id } = useParams();
  const [vid, setVid] = useState([]);
  const [click, setClick] = useState([]);
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

  let saved = JSON.parse(window.localStorage.getItem("title"));
  let date;

  useEffect(() => {
    if (saved) {
      console.log("it is already saved!");
      setVid(saved.items);
    }
    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${process.env.REACT_APP_API_KEY2}`
    )
      .then((result) => result.json())
      .then((res) => {
        console.log("had to waste a fecth, damn");
        setVid(res.items);
        let title = res.items[0].snippet.title;

        window.localStorage.setItem(title, JSON.stringify(res));
      })
      .catch((err) => console.log(err));
  }, []);

  // new Intl.DateTimeFormat("en-US", {
  //   dateStyle: "long",
  // }).format(date);
  return (
    <div className="videoClicked">
      <YouTube videoId={id} opts={opts} />

      {vid.map((video, index) => {
        return (
          <div key={index}>
            <h5>{video.snippet.channelTitle}</h5>
            <h4>{video.snippet.title}</h4>
            <br></br>
            <p>Views: {video.statistics.viewCount}</p>
            <p>Likes: {video.statistics.likeCount}</p>
            <span>Comment count: {video.statistics.commentCount}</span>
            {/* {(date = new Date(video.snippet.publishedAt))}
            <p>
              Date Published:{" "}
              {new Intl.DateTimeFormat("en-US", {
                dateStyle: "long",
              }).format(date)}
            </p> */}
          </div>
        );
      })}

      <br></br>
      <hr></hr>
      <div className="comment_section">
        <Comments setComment={setComment} comment={comment} input={input} />
      </div>
    </div>
  );
}
