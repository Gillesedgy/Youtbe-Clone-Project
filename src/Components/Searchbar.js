import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import { searchFetch } from "../fetch.js";
export default function Searchbar({ result, setResult, input, setInput }) {
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
  // console.log(result);

  // trying to store search in window.storage
  // useEffect is used to handle async functions
  //   useEffect(()=>{
  //     // To stop useEffec from infinite loop, set a conditional like MINA did
  // if (search.length === 0) return;
  //     // fetch
  //     searchFetch(input).then((data)=>{
  //       console.log(data)
  //       // I want to set local storage using my search input and saving the data
  //       //* this might  be search instead of input, double check with mina  */
  //       window.localStorage.setItem(input, JSON.stringify(data))
  //       // I want to set mt state with the data
  //       setResult(data.items)
  //       // I want to reset my input to prevent an infinite loop
  //       setInput("")

  //     })
  //   },[input])

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
