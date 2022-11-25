import React from "react";
import { Link } from "react-router-dom";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import "./Sidebar.css";
// import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

export default function Sidebar({ darkmode }) {
  return (
    <div className={darkmode ? "darkMode" : "default"}>
      <div className="sidebar">
        <div className="sidebar__link">
          <Link to="/">
            {darkmode ? (
              <HomeSharpIcon style={{ color: "red" }} />
            ) : (
              <HomeSharpIcon />
            )}

            <span style={{ color: darkmode ? "white" : "black" }}>Home</span>
          </Link>
        </div>
        <hr></hr>
        <div className="sidebar__link">
          <Link to="/webdev">
            <span style={{ color: darkmode ? "white" : "black" }}>WebDev</span>
          </Link>
        </div>
        <hr></hr>
        <div className="sidebar__link">
          <Link to="/colorcode">
            <span style={{ color: darkmode ? "white" : "black" }}>
              ColorCode
            </span>
          </Link>
        </div>
        <hr></hr>
        <div className="sidebar__link">
          <Link to="/wwdits">
            <span style={{ color: darkmode ? "white" : "black" }}>WWDITS</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
