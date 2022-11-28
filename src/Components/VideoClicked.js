import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comments from "./Comments";
import YouTube from "react-youtube";
import "./VideoClicked.css";
import { DisabledByDefault } from "@mui/icons-material";

export default function VideoClicked({ input, darkmode }) {
  const { id } = useParams();
  const [vid, setVid] = useState([]);
  let [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  const [count, setCount] = useState(0);

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
    height: "420",
    aspectRatio: "16:9",
  };

  //! function for newComments
  // function handleComments(newComment) {
  //   setComment([...comment, newComment]);
  // }

  function likesUp() {
    setCount((prevCount) => prevCount + 1);
    setLike(true);
    setDislike(false);
  }

  function likesDown() {
    setCount(count - 1);
    setDislike(true);
    setLike(false);
  }

  let saved = JSON.parse(window.localStorage.getItem(id));

  useEffect(() => {
    if (saved) {
      setComment(saved);
      fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${process.env.REACT_APP_API_KEY2}`
      )
        .then((result) => result.json())
        .then((res) => {
          setVid(res.items);

          setCount(Number(res.items[0].statistics.likeCount));
        });
    } else {
      fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${process.env.REACT_APP_API_KEY2}`
      )
        .then((result) => result.json())
        .then((res) => {
          setVid(res.items);

          setCount(Number(res.items[0].statistics.likeCount));
          window.localStorage.setItem(id, JSON.stringify([]));
        })
        .catch((err) => console.log(err));
    }
  }, []);

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

            <div className="video_dets">
              <p>
                <em className="p_em">Views:</em>{" "}
                <b>{video.statistics.viewCount}</b>
              </p>
              <p>
                <em className="p_em">Likes:</em> <b>{count}</b>{" "}
                <button onClick={!like ? likesUp : null}>👍🏽</button>{" "}
                <button onClick={!dislike ? likesDown : null}>👎🏽</button>
              </p>
              <p>
                <em className="p_em">Comment count:</em>{" "}
                <b>{video.statistics.commentCount}</b>
              </p>
            </div>
            <div></div>
            <em>Description: </em>
            <p className="descrip">{video.snippet.description}</p>

            <div className="comment_section">
              <Comments
                vid={vid}
                setComment={setComment}
                comment={comment}
                input={input}
                saved={saved}
              />
            </div>
          </div>
        );
      })}

      <hr></hr>
    </div>
  );
}
