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

  // trying to store search in window.storage
  // useEffect is used to handle async functions 
  useEffect(()=>{
    // To stop useEffec from infinite loop, set a conditional like MINA did 
if (search.length === 0) return;
    // fetch
    searchFetch(input).then((data.items[0])=>{
      // I want to set local storage using my search input and saving the data
      //* this might  be search instead of input, double check with mina  */
      window.localStorage.setItem(input, JSON.stringify(data))
      // I want to set mt state with the data
      setInput(data)
      // I want to reset my input to prevent an infinite loop 
      setInput("")

    })
  },[input])
  
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
