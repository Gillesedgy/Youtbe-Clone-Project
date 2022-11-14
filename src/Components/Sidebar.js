import React from "react";
import { Link } from "react-router-dom";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import "./Sidebar.css";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <h1>This is the Sidebar Page</h1>
      <div className="sidebar__link">
        <Link to="/">
          <HomeSharpIcon />
          Home
        </Link>
      </div>
    </div>
  );
}
