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
    </div>
  );
}
