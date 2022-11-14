import Header from "./Components/Header";
import Recommended from "./Components/Recommended";
import Sidebar from "./Components/Sidebar";

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
      {test()}
      <h1>YOUTUBE CLONE PROJECT</h1>
      <Header />
      {/* add the fetch to the header component for when th user types into the search bar */}
      <Sidebar />
      <Recommended />
    </div>
  );
}

export default App;
