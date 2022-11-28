import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import About from "./Pages/About";
import Home from "./Pages/Home";
import { Header, VideoCard, VideoClicked, Sidebar, Modal } from "./Components";
import Webdev from "./Pages/Webdev";
import Colorcode from "./Pages/Colorcode";
import WWDITS from "./Pages/WWDITS";
import "./App.css";

function App() {
  const [result, setResult] = useState([]);
  const [input, setInput] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [darkmode, setDarkmode] = useState(false);

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

      <div className="app__main">
        <div className="app__sidebar">
          <Sidebar darkmode={darkmode} />
        </div>
        <div className="app__routes">
          <Routes>
            <Route path="/" element={<Home darkmode={darkmode} />} />
            <Route path="/about" element={<About darkmode={darkmode} />} />
            <Route
              path="/videos/:userSearch"
              element={<VideoCard result={result} />}
            />
            <Route
              path="/video/:id"
              element={<VideoClicked darkmode={darkmode} />}
            />
            <Route path="/webdev" element={<Webdev darkmode={darkmode} />} />
            <Route
              path="/colorcode"
              element={<Colorcode darkmode={darkmode} />}
            />
            <Route path="/wwdits" element={<WWDITS darkmode={darkmode} />} />
          </Routes>
        </div>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

export default App;
