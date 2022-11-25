import "./ToggleSwitch.css";
import { useEffect, useState } from "react";

function ToggleSwitch({ darkmode, setDarkmode }) {
  const [color, setColor] = useState("white");

  const handleTheme = (darkmode) => {
    if (darkmode === true) {
      setDarkmode(false);
      setColor("white");
      // handleBackground(color);
    } else {
      setColor("#282828");
      setDarkmode(true);
      // handleBackground(color);
    }
  };

  useEffect(() => {
    // const handleBackground = (color) => {
    document.body.style.backgroundColor = color;
  }, [color]);
  // };
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
