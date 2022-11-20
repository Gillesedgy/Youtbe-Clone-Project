import "./ToggleSwitch.css";
import { useEffect, useState } from "react";

function ToggleSwitch({ darkmode, setDarkmode }) {
  const handleTheme = (darkmode) => {
    if (darkmode === "black") {
      setDarkmode("white");
    } else {
      setDarkmode("black");
    }
  };
  useEffect(() => {
    document.body.style.backgroundColor = darkmode;
  }, [darkmode]);
  return (
    <div className="switch__container">
      {/* button  basic for now just for functionality */}

      <div className="toggle__switch">
        <label>
          <input
            onChange={() => {
              handleTheme(darkmode);
            }}
            type="checkbox"
            style={{ display: "none" }}
          />
          <span className="slider"></span>
        </label>
      </div>
    </div>
  );
}

export default ToggleSwitch;
