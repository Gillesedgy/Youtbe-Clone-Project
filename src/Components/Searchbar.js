import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import "./Searchbar.css";

export default function Searchbar({
  result,
  setResult,
  setShowModal,
  input,
  setInput,
}) {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (search.length === 0) setShowModal(true);
    if (e.target.value !== "") {
      if (savedInput) {
        console.log("grabbing from Storage");
        setResult(savedInput.items);
        setInput(savedInput.items);
        navigate(`/videos/${search}`);
        setSearch("");
      } else {
        console.log("had to fetch homie");
        fetchData(search);
        setInput(result);
        navigate(`/videos/${search}`);
        setSearch("");
      }
    }
  }

  let savedInput = JSON.parse(window.localStorage.getItem(search));

  let video_http = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${search}&regionCode=US&maxResults=25&key=${process.env.REACT_APP_API_KEY}`;
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
        setShowModal(true);
      });
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="header__searchBar">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="form__button" type="submit">
            <SearchSharpIcon />
          </button>
        </div>
      </form>
    </div>
  );
}
