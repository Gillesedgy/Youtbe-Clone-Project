import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import "./Header.css";
import InfoSharpIcon from "@mui/icons-material/InfoSharp";
import { searchFetch } from "../fetch.js";
import Searchbar from "./Searchbar";

export default function Header({ setResult, result, input, setInput }) {
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
      <Searchbar
        result={result}
        setResult={setResult}
        input={input}
        setInput={setInput}
      />

      <div className="header__rightside">
        <Link to="/about">
          <InfoSharpIcon /> About
        </Link>
      </div>
    </div>
  );
}
