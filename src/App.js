import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./Components/Header";
import About from "./Pages/About";
import Home from "./Pages/Home";
import VideoCard from "./Components/VideoCard";
import VideoClicked from "./Components/VideoClicked";
import Sidebar from "./Components/Sidebar"
import "./App.css";

function App() {
  const [result, setResult]=useState([])
  // const [input, setInput] = useState("");
  // BEM naming convention
  return (
    <div className="app">
      <Header setResult={setResult} result={result}  />
      {/* add the fetch to the header component for when th user types into the search bar */}
      <div className="app__main"> 
      <Sidebar className="app__sidebar" />
      <Routes>
        <Route path="/" element={<Home result={result} />} />
        <Route path="/about" element={<About />} />
        <Route path="/videos" element={<VideoCard result={result}  />} />
        <Route path="videos/:id" element={<VideoClicked result={result} />} />
      </Routes>
      </div>
      </div>
  );
}

export default App;
