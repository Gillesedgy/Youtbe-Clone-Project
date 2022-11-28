import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Paper from "@mui/material/Paper";
import "./Comments.css";

export default function Comments({ comment, setComment }) {
  const { id } = useParams();
  const [remark, setRemark] = useState({ commenter: "", comment: "" });

  function handleSubmit(e) {
    e.preventDefault();
    addComments();
    setRemark({ commenter: "", comment: "" });
  }

  function handleComment(e) {
    setRemark({ ...remark, [e.target.id]: e.target.value });
  }
  function addComments() {
    const commentList = [...comment];
    commentList.push(remark);
    let array = JSON.parse(window.localStorage.getItem(id));
    array.push(commentList);
    setComment(commentList);
  }
  return (
    <div>
      <h4>Comments</h4>

      <Paper
        elevation={3}
        sx={{ borderRadius: 20, border: "1px solid #E3E3E3" }}
        component="form"
        onSubmit={handleSubmit}
      >
        <div className="comment__box">
          <input
            type="text"
            id="commenter"
            placeholder="Name"
            value={remark.commenter}
            onChange={handleComment}
          />

          <input
            type="text"
            id="comment"
            placeholder="Add a comment!"
            value={remark.comment}
            onChange={handleComment}
          />
          <input className="comment__button" type="submit" value="Submit!" />
        </div>
      </Paper>
      <br></br>
      <hr></hr>
      <hr></hr>
      <ul>
        {comment.map((comm, index) => {
          return (
            <li key={index} className="comment__list">
              <b>{comm.commenter}</b>: {comm.comment}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
