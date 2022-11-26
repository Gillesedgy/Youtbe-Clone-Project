import React from "react";
import { Button } from "@mui/material";
import "./About.css";

export default function About({ darkmode }) {
  return (
    <div className={darkmode ? "darkMode" : "default"}>
      <div className="about__title">
        <h1 style={{ color: darkmode ? "white" : "black" }}>
          <em>About</em>
        </h1>
      </div>

      <article className="about__project">
        <h4 style={{ color: darkmode ? "white" : "black" }}>
          About this Project{" "}
        </h4>
        <div style={{ color: darkmode ? "white" : "black" }}>
          <p className="about__p">
            This{" "}
            <a href="https://github.com/joinpursuit/React-YouTube-Project-Prompt">
              project
            </a>{" "}
            aims to replicate the functionality of YouTube. A user should be
            able to search for videos that exist on youtube using the searchbar.
          </p>
        </div>
      </article>

      <div className="hrs">
        <hr></hr>
        <hr></hr>
      </div>

      <h4 style={{ color: darkmode ? "white" : "black" }}>
        About the creators{" "}
      </h4>
      <div className="about__creators">
        <article className="about__edgy">
          <h4>
            <em>About Edgy</em>
          </h4>
          <p>
            🌱 I’m currently learning Git commands and React.js
            <br></br>
            💬 Ask me about Health and Nutrition
            <br></br>⚡ Fun fact I Love Nature & Cooking
            <br></br>
            📫 How to reach me: Edgygilles@pursuit.org
          </p>
          <Button href="https://github.com/Gillesedgy">Github</Button>
        </article>
        <article className="about__mina">
          <h4>
            <em>About Mina</em>
          </h4>
          <p>
            🌱 I’m currently learning about React.js
            <br></br>
            💬 Ask me about Photoshop or Lightroom
            <br></br>⚡ Fun fact I am an animal person.
          </p>

          <Button href="https://github.com/minagrullon">Github</Button>
        </article>
      </div>
    </div>
  );
}
