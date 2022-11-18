import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./Components/Header";
import About from "./Pages/About";
import Home from "./Pages/Home";
import VideoCard from "./Components/VideoCard";
import VideoClicked from "./Components/VideoClicked";
import Sidebar from "./Components/Sidebar";
import "./App.css";

function App() {
  const [result, setResult] = useState([]);
  const [clicked, setClicked] = useState([]);
  const [input, setInput] = useState("");
  // BEM naming convention
  return (
    <div className="app">
      <Header
        setResult={setResult}
        result={result}
        input={input}
        setInput={setInput}
      />
      {/* add the fetch to the header component for when th user types into the search bar */}
      <div className="app__main">
        <div className="app__sidebar">
          <Sidebar />
        </div>
        <div className="app__routes">
          <Routes>
            <Route
              path="/"
              element={<Home result={result} setResult={setResult} />}
            />
            <Route path="/about" element={<About />} />
            <Route
              path="/videos/:userSearch"
              element={<VideoCard result={result} setClicked={setClicked} />}
            />
            <Route
              path="/video/:id"
              element={<VideoClicked clicked={clicked} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
