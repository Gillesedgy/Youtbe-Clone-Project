import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import "./Header.css";
import InfoSharpIcon from "@mui/icons-material/InfoSharp";
import { searchFetch } from "../fetch.js";

export default function Header({ input, setInput }) {
  const [search, setSearch ] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (e.target.value !== "") {
      setInput(search);
      setSearch("")
    }
  }

  function userSearch(e) {
    // if (e.target.value !== "") 
    setSearch(e.target.value);
  }
  // console.log(search);

  function getVideos(input) {
    if (input !== "") {
      searchFetch(input)
        .then((res) => {
          res.map((vid) => console.log(vid.items.snippet.title));
        })

        .catch((err) => console.log("NO INPUT"));
    }
  }
 let api_key =`AIzaSyCI95EW1HK6F0M4EW7Aza9Tl7KM2OQZHRc`

  // let video_http = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&q=${input}&regionCode=US&key=${api_key}`
  // // `https://www.googleapis.com/youtube/v3/videos?key=${api_key}`;
  // let channel_http = "https://www.googleapis.com/youtube/v3/channels?";
  
  //  fetch(video_http 
  // //   + new URLSearchParams({
  // //   key: api_key,
  // // part: 'snippet',
  // //   chart: 'mostPopular',
  // //    maxResults: 50,
  // //  regionCode: 'IN'
  // //  })
  // )
  // .then(res => res.json())
  // .then(data => {
  // console.log(data.items)


  // //   // data.items.forEach(item => {
  // //   //     // getChannelIcon(item);
  // //   // })
  // })
  // .catch(err => console.log(err));

  
  // useEffect(() => {
    if (input.length !== 0) {
      searchFetch(input).then(data => {
        console.log(data)
        return (<img src='data.items[0].snippet.thumbnails.medium.url' alt='image' />)
 
    })
      // .then((res) => console.log("API RES-->",res.items[1].snippet.title)
      //   res.items.map((vid) => return (<h1>{vid.snippet.title}</h1>))
      // );
    }
  // }, [input]);

  return (
    <div className="header">
      <div className="header__leftside">
        <div className="menuIcon">
          <MenuIcon />
        </div>
        <Link to="/">
          <img
            className="header__logo"
            src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
            alt="logo"
          />
        </Link>
      </div>
      {/* <form onSubmit={(e) => handleSubmit(e)}> */}
        <div className="header__searchBar">
          <input type="text" value={search} onChange={(e) => userSearch(e)} />
          <button onClick={handleSubmit}>
            <SearchSharpIcon />
          </button>
        </div>
      {/* </form> */}
      <div className="header__rightside">
        <Link to="/about">
          <InfoSharpIcon /> About
        </Link>
      </div>
    </div>
  );
}
