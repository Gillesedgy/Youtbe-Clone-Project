import React from "react";
import VideoCard from "../Components/VideoCard";
import Recommended from "../Components/Recommended";
import Sidebar from "../Components/Sidebar";
import "./Home.css";
export default function Home({ result }) {
  return (
    <div className="home">
      {result !== "" ? (
        <VideoCard result={result} />
      ) : (
        <Recommended result={result} />
      )}
    </div>
  );
}
