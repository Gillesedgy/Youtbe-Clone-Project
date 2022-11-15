import { Routes, Route } from "react-router-dom";
import {useState} from 'react'
import Header from "./Components/Header";
import About from "./Pages/About";
import Home from "./Pages/Home";
import VideoCard from "./Components/VideoCard";
import VideoClicked from "./Components/VideoClicked";
import Recommended from './Components/Recommended'
import "./App.css";

function App() {
  const [input, setInput]=useState('')
  // BEM naming convention
  return (
    <div className="app">
      <Header />
      {/* add the fetch to the header component for when th user types into the search bar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/videos" element={<VideoCard input={input}/>} />
        <Route path="videos/:id" element={<VideoClicked />} />
      </Routes>
  
    </div>
  );
}

export default App;
