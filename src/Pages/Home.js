import React from "react";

import Recommended from "../Components/Recommended";
import Sidebar from "../Components/Sidebar";

export default function Home() {
  return (
    <div className="main_display">
      <Sidebar />
      <Recommended />
    </div>
  );
}
