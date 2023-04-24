import { useState } from "react";
import "./css/ThemeSwitch.css";
import { FaSun, FaCircle } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";

export default function ThemeSwitch({
  colorBG,
  setColorBG,
  colorText,
  setColorText,
  colorDynamic,
  setColorDynamic,
}) {
  const [light, setLight] = useState(true);
  const [setting, setSetting] = useState(false);
  const themeChange = () => {
    setLight(!light);
    setColorBG(colorBG === "#fff" ? "#303134" : "#fff");
    setColorText(colorText === "#303134" ? "#fff" : "#303134");
  };
  const colorChange = (value) => {
    setColorDynamic(value);
  };
  const settingAppear = () => {
    setSetting(!setting);
    console.log(setting);
  };
  const style = {
    color: colorText,
    border: "1px solid " + colorText,
    right: "0px",
    transition: "0.5s",
    backgroundColor: colorBG,
  };
  const styleTwo = {
    color: colorText,
    marginTop: "-11px",
    border: "1px solid " + colorText,
    right: "71px",
    animation: "none",
    fontSize: "30px",
    transition: "0.5s",
    backgroundColor: colorBG,
  };

  const styleNone = {
    color: colorText,
    transition: "0.7s",
  };

  return (
    <div className="setting" style={setting ? style : styleNone}>
      <button
        className="settingBtn"
        style={setting ? styleTwo : styleNone}
        onClick={() => settingAppear()}
      >
        <AiFillSetting />
      </button>
      <div className="colorChange">
        <button
          className="colorChangeBtn"
          onClick={() => colorChange("#1cbcff")}
          style={{ color: "#1cbcff" }}
        >
          <FaCircle />
        </button>
        <button
          className="colorChangeBtn"
          onClick={() => colorChange("#00cc66")}
          style={{ color: "#00cc66" }}
        >
          <FaCircle />
        </button>

        <button
          className="colorChangeBtn"
          onClick={() => colorChange("#ff4522")}
          style={{ color: "#ff4522" }}
        >
          <FaCircle />
        </button>
        <button
          className="colorChangeBtn"
          onClick={() => colorChange("#bf14cd")}
          style={{ color: "#bf14cd" }}
        >
          <FaCircle />
        </button>
        <button
          className="colorChangeBtn"
          onClick={() => colorChange("#6c63ff")}
          style={{ color: "#6c63ff" }}
        >
          <FaCircle />
        </button>
      </div>
      <button className="themeChangeBtn" onClick={themeChange} style={style}>
        <FaSun />
      </button>
    </div>
  );
}
