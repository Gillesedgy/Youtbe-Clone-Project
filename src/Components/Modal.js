import React from "react";
import { useNavigate } from "react-router-dom";
import closeWindow from "./closeWindow.png";
import "./Modal.css";

export default function Modal({ showModal, setShowModal }) {
  const navigate = useNavigate();

  if (!showModal) return null;
  return (
    <div className="overlay">
      <div className="modal__container">
        <img
          className="gify"
          src="https://media3.giphy.com/media/13Nc3xlO1kGg3S/giphy.gif?cid=790b76114083d1d2f28cdfbb8c2a4d8d5e08386a516a4ef7&rid=giphy.gif&ct=g"
          alt="youtube_gify"
        />
        <div className="modal__rightside">
          <img
            className="modal__exit"
            src={closeWindow}
            alt="x"
            onClick={() => setShowModal(false)}
          />
          <div className="modal__content">
            <p> Sorry! You need to type in a search to see the magic!</p>
            <button
              className="modal__redirect"
              onClick={() => {
                navigate("/");
                setShowModal(false);
              }}
            >
              Click to be redirected to home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
