import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import About from "./Pages/About";
import Home from "./Pages/Home";
import { Header, VideoCard, VideoClicked, Sidebar, Modal } from "./Components";
import "./App.css";
import ToggleSwitch from "././BonusFeatures/ToggleSwitch";

function App() {
  const [result, setResult] = useState([]);
  const [clicked, setClicked] = useState([]);
  const [input, setInput] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [darkmode, setDarkmode] = useState("black");

  //! DARKMODE
  // const [theme, setTheme]=useState('blue')

  return (
    <div className="app">
      <Header
        setShowModal={setShowModal}
        setResult={setResult}
        result={result}
        input={input}
        setInput={setInput}
        darkmode={darkmode}
        setDarkmode={setDarkmode}
      />
      {/* add the fetch to the header component for when th user types into the search bar */}
      <div className="app__main">
        <div className="app__sidebar">
          <Sidebar darkmode={darkmode} />
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
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

export default App;
