import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comments from "./Comments";
// import Recommended from "./Recommended";
import YouTube from "react-youtube";
import "./VideoClicked.css";
import { CommentBankRounded } from "@mui/icons-material";

export default function VideoClicked({ input, darkmode }) {
  const { id } = useParams();
  const [vid, setVid] = useState([]);
  const [click, setClick] = useState([]);
  const [comment, setComment] = useState([]);
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

  //! function for newComments
  function handleComments(newComment) {
    setComment([...comment, newComment]);
  }

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
      <div className="youtube">
        <YouTube videoId={id} opts={opts} />
      </div>

      {vid.map((video, index) => {
        return (
          <div key={index} style={{ color: darkmode ? "white" : "black" }}>
            <h5>{video.snippet.channelTitle}</h5>
            <h3>{video.snippet.title}</h3>

            <p>
              <em>Views:</em> {video.statistics.viewCount}
            </p>
            <p>
              <em>Likes:</em> {video.statistics.likeCount}
            </p>
            <p>
              <em>Comment count:</em> {video.statistics.commentCount}
            </p>
            <em>Description: </em>
            <p className="descrip">{video.snippet.description}</p>

            <div className="comment_section">
              <Comments
                vid={vid}
                setComment={setComment}
                comment={comment}
                input={input}
              />
            </div>
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

      <hr></hr>
    </div>
  );
}
