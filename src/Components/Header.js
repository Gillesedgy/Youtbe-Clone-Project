import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";

import InfoSharpIcon from "@mui/icons-material/InfoSharp";

export default function Header() {
  return (
    <div className="header">
      <h1> This is the header</h1>
        <img className="header__logo" 
          src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
          alt="logo"
        />
   
      <InfoSharpIcon /> About
      
      <MenuIcon />
      <div className="header__searchBar">
        <input type="text" />
        <SearchSharpIcon />
      </div>
    </div>
  );
}
