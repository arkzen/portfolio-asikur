import "./css/Navbar.css";
import { MdMenuOpen, MdClose } from "react-icons/md";
import { useState } from "react";
import logo from "../img/ar_logo_dark.png"

export default function Navbar({ colorBG, colorText, colorDynamic }) {
  const style = {
    color: colorText,
    backgroundColor: colorBG,
  };

  const [checked, setChecked] = useState(false);

  const hover = (event) => {
    event.target.style.color = colorDynamic;
    event.target.style.borderBottom = "1px solid " + colorDynamic;
  };
  const hoverNot = (event) => {
    event.target.style.color = colorText;
    event.target.style.borderBottom = "none";
  };
  return (
    <nav style={style}>
      <img src={logo} alt="" width={75} style={{marginLeft: '125px'}}/>
      <input type="checkbox" id="check" />
      <label
        htmlFor="check"
        id="checkIcon"
        onClick={() => setChecked(!checked)}
      >
        {!checked ? (
          <MdMenuOpen />
        ) : (
          <MdClose style={{ color: colorDynamic }} />
        )}
      </label>
      <ul className="menuList" style={{ backgroundColor: colorBG }}>
        <li>
          <a
            href="#Home"
            onMouseOver={hover}
            onMouseOut={hoverNot}
            style={{ color: colorText }}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#About"
            onMouseOver={hover}
            onMouseOut={hoverNot}
            style={{ color: colorText }}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#Skill"
            onMouseOver={hover}
            onMouseOut={hoverNot}
            style={{ color: colorText }}
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#Portfolio"
            onMouseOver={hover}
            onMouseOut={hoverNot}
            style={{ color: colorText }}
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="#Education"
            onMouseOver={hover}
            onMouseOut={hoverNot}
            style={{ color: colorText }}
          >
            Education
          </a>
        </li>
        <li>
          <a
            href="#Contact"
            onMouseOver={hover}
            onMouseOut={hoverNot}
            style={{ color: colorText }}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
