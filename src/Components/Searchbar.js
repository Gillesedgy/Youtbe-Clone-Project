import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
export default function Searchbar({ result, setResult }) {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (e.target.value !== "") {
      if (savedInput) {
        console.log("grabbing from Storage");
        setResult(savedInput.items);
        navigate("/videos");
        setSearch("");
      } else {
        console.log("had to fetch homie");
        fetchData(search);
        navigate("/videos");
        setSearch("");
      }
    }
  }

  let savedInput = JSON.parse(window.localStorage.getItem(search));

  let video_http = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${search}&regionCode=US&maxResults=25&key=${process.env.REACT_APP_API_KEY2}`;
  //

  function fetchData(search) {
    fetch(video_http)
      .then((res) => res.json())
      .then((data) => {
        window.localStorage.setItem(search, JSON.stringify(data));
        setResult(data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="header__searchBar">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">
            <SearchSharpIcon />
          </button>
        </div>
      </form>
    </div>
  );
}
