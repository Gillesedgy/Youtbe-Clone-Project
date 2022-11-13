import Header from "./Components/Header";
import Recommended from "./Components/Recommended";
import Sidebar from "./Components/Sidebar"

import "./App.css";

function App() {
  // BEM naming convention
  return (
    <div className="app">
      <h1>YOUTUBE CLONE PROJECT</h1>
      <Header />
      <Sidebar />
      <Recommended />
    </div>
  );
}

export default App;
