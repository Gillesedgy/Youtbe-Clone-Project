import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import "./Header.css";
import InfoSharpIcon from "@mui/icons-material/InfoSharp";
import { searchFetch } from "../fetch.js";

export default function Header({ input, setInput }) {
  const [search, setSearch] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (e.target.value !== "") {
      setInput(search);
    }
  }

  function userSearch(e) {
    if (e.target.value !== "") setSearch(e.target.value);
  }
  console.log(search);

  // function getVideos(input) {
  //   if (input !== "") {
  //     searchFetch(input)
  //       .then((res) => {
  //         res.map((vid) => console.log(vid.items.snippet.title));
  //       })

  //       .catch((err) => console.log("NO INPUT"));
  //   }
  // }

  useEffect(() => {
    if (input.length !== 0) {
      searchFetch(input).then(
        (res) => console.log(res)
        // res.map((vid) => console.log(vid.items.snippet.title))
      );
    }
  }, [input]);

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
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="header__searchBar">
          <input type="text" value={search} onChange={(e) => userSearch(e)} />
          <button type="submit">
            <SearchSharpIcon />
          </button>
        </div>
      </form>
      <div className="header__rightside">
        <Link to="/about">
          <InfoSharpIcon /> About
        </Link>
      </div>
    </div>
  );
}
