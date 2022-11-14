import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import About from "./Pages/About";
import Home from "./Pages/Home";
import VideoCard from "./Components/VideoCard";
import VideoClicked from "./Components/VideoClicked";
import "./App.css";

function App() {
  const test = () => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&key=${process.env.REACT_APP_API_KEY}`
      // `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=poki&maxResults=15&key=${process.env.REACT_APP_API_KEY}`
      // the q= will have the user input attached so it can be dynamically updated
    )
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  // BEM naming convention
  return (
    <div className="app">
      <Header />
      {/* add the fetch to the header component for when th user types into the search bar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/videos" element={<VideoCard />} />
        <Route path="videos/:id" element={<VideoClicked />} />
      </Routes>
    </div>
  );
}

export default App;
