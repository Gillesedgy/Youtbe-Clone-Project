import React from "react";
import Header from "./Components/Header";
import Recommended from "./Components/Recommended";
import Sidebar from "./Components/Sidebar";

export default function Home() {
  return (
    <div>
      <Header />
      <Sidebar />
      <Recommended />
    </div>
  );
}
