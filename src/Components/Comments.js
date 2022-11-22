import React from "react";
import { useState } from "react";
import Paper from "@mui/material/Paper";
import "./Comments.css";

export default function Comments({ comment, setComment, vid }) {
  const [remark, setRemark] = useState({ commenter: "", comment: "" });

  //! handleSubmit
  function handleSubmit(e) {
    e.preventDefault();
    // handleComment();
    addComments();
  }
  //! handleComment function
  //* do not put brackets arounf the value EDGYY!!!!!
  function handleComment(e) {
    setRemark({ ...remark, [e.target.id]: e.target.value });
  }
  function addComments() {
    const commentList = [...comment];
    commentList.push(remark);
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
          {/* {/* <br></br> */}
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
        {console.log(comment)}
      </ul>
    </div>
  );
}
