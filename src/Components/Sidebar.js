import React from "react";
import { Link } from "react-router-dom";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import "./Sidebar.css";
// import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

export default function Sidebar({ darkmode }) {
  return (
    <div className="sidebar">
      <div className="sidebar__link">
        <Link to="/">
          {/* {darkmode === "white" ? (
            <HomeSharpIcon theme="white" />
          ) : (
            <HomeSharpIcon theme="black" />
          )} */}
          <HomeSharpIcon />
          Home
        </Link>
      </div>
      <hr></hr>
      <div>
        <Link to="/webdev">WebDev</Link>
      </div>
      <hr></hr>
      <div>
        <Link to="/colorcode">ColorCode</Link>
      </div>
      <hr></hr>
      <div>
        <Link to="/wwdits">What We Do in the Shadows</Link>
      </div>
    </div>
  );
}
