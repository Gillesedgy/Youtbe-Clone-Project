import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import InfoTwoToneIcon from "@mui/icons-material/InfoTwoTone";
import "./Header.css";
import InfoSharpIcon from "@mui/icons-material/InfoSharp";

import Searchbar from "./Searchbar";
import ToggleSwitch from ".././BonusFeatures/ToggleSwitch";

export default function Header({
  setResult,
  result,
  input,
  setInput,
  setShowModal,
  darkmode,
  setDarkmode,
}) {
  return (
    <div className={darkmode ? "darkMode" : "default"}>
      <div className="header">
        <div className="header__leftside">
          {/* <div className="menuIcon">
          <MenuIcon />
        </div> */}
          <ToggleSwitch darkmode={darkmode} setDarkmode={setDarkmode} />
          <Link to="/">
            {darkmode === false ? (
              <img
                className="header__logo"
                src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
                alt="logo"
              />
            ) : (
              <img
                className="header__logo"
                src="https://www.androidguys.com/wp-content/uploads/2018/07/YouTube-Dark-Mode.jpg"
                alt=" gray-logo"
              />
            )}
          </Link>
        </div>

        <Searchbar
          result={result}
          setResult={setResult}
          input={input}
          setInput={setInput}
          setShowModal={setShowModal}
        />

        <div className="header__rightside">
          <Link to="/about">
            {darkmode === false ? (
              <InfoSharpIcon />
            ) : (
              <InfoTwoToneIcon style={{ color: "red" }} />
            )}
            <span style={{ color: darkmode ? "white" : "black" }}>About</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
