// import VideoCard from "./VideoCard";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Recommended.css";
import Grid from "@mui/material/Grid";

export default function Recommended({ result, darkmode }) {
  // This will display the thumbnails and cideo descriptiion for user to click on
  const [rec, setRec] = useState([]);
  const { id } = useParams();

  let savedRec = JSON.parse(window.localStorage.getItem(rec));

  useEffect(() => {
    if (savedRec) {
      console.log("grabbing from Storage");
      setRec(savedRec.items);
    } else {
      console.log("had to fetch homie");

      fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=US&key=${process.env.REACT_APP_API_KEY2}`
      )
        .then((res) => res.json())
        .then((data) => {
          window.localStorage.setItem(rec, JSON.stringify(data));
          setRec(data.items);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <div className={darkmode ? "darkMode" : "default"}>
      <div className="recommended">
        <h2 style={{ color: darkmode ? "white" : "black" }}>Recommended</h2>
        <br></br>
        <Grid container spacing={3}>
          {rec.map((vid, index) => {
            return (
              <Grid item md={4} key={index}>
                <div key={index} className="videocard">
                  <Link
                    to={`/video/${vid.id}`}
                    state={{ title: vid.snippet.title }}
                  >
                    <img
                      className="thumbnail"
                      src={vid.snippet.thumbnails.medium.url}
                      alt={vid.snippet.title}
                    />
                    <h5>{vid.snippet.title}</h5>
                    {/* <p>{vid.snippet.description}</p> */}
                  </Link>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
}
