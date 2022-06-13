import { useState } from "react";

function LightSwitchButton(props) {
  const [light, setLight] = useState("off");

  const handleClick = () => {
    setLight(light === "off" ? "on" : "off");
  };

  return (
    <button onClick={handleClick} className="LightSwitchButton">
      {light === "on" && (
        <span>
          <i>💡</i> I'm on!
        </span>
      )}

      {light === "off" && (
        <span className="off">
          <i>💡</i> I'm off!
        </span>
      )}
    </button>
  );
}

export default LightSwitchButton;
