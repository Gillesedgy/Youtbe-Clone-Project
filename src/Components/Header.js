import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import "./Header.css";
import InfoSharpIcon from "@mui/icons-material/InfoSharp";

export default function Header() {
  const [search, setSearch] = useState("");
  function userSearch(e) {
    setSearch(e.target.value);
  }

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
      <form onSubmit={(e) => e.preventDefault()}>
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
