import React from "react";
import { useState } from "react";
import Paper from "@mui/material/Paper";
import "./Comments.css";

export default function Comments({ comment, setComment }) {
  //   const [comment, setComment] = useState("");
  const [name, setName] = useState("");

  function handleComments(e) {
    e.preventDefault();
    addComments();
    setComment("");
    setName("");
  }

  function addComments() {
    const newComment = {
      ...comment,
      commenter: name,
      comment: comment,
    };

    setComment(newComment);
  }
  return (
    <div>
      <h4>Comments</h4>

      <Paper
        elevation={3}
        sx={{ borderRadius: 20, border: "1px solid #E3E3E3" }}
        component="form"
        onSubmit={handleComments}
      >
        <div className="comment__box">
          <input
            type="text"
            id="name__input"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {/* {/* <br></br> */}
          <input
            type="text"
            id="comments"
            placeholder="Add a comment!"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <input className="comment__button" type="submit" value="Submit!" />
        </div>
      </Paper>
      <br></br>
      <hr></hr>
      <hr></hr>
      <ul>{console.log(comment)}</ul>
    </div>
  );
}
