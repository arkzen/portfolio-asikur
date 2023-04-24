import "./css/Skill.css";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiGithub,
  SiMongodb,
  SiJava,
  SiExpress,
  SiKotlin,
  SiAndroid,
  SiAndroidauto,
  SiStrapi,
  SiCloud66,
  SiCloudflare,
  SiGit,
} from "react-icons/si";

export default function Skill({ colorBG, colorText, colorDynamic }) {
  const initStyle = {
    backgoundColor: colorBG,
    color: colorText,
    margin: "40px auto",
    paddingTop: "75px",
  };

  return (
    <div id="Skill" style={initStyle}>
      <h1 className="title" style={{ color: colorDynamic }}>
        Skills
      </h1>
      <h2>I am good at</h2>
      <div className="skillCards">
        <div className="skillCard">
          <h3>Java</h3>
          <p style={{ color: "#fe0000" }}>
            <SiJava />
          </p>
        </div>
        <div className="skillCard">
          <h3>Kotlin</h3>
          <p style={{ color: "#61dafb" }}>
            <SiKotlin />
          </p>
        </div>
        <div className="skillCard">
          <h3>Android SDK</h3>
          <p style={{ color: "#3e863d" }}>
            <SiAndroid/>
          </p>
        </div>
        <div className="skillCard">
          <h3>Rest API</h3>
          <p style={{ color: "#dd4b25" }}>
            <SiCloudflare />
          </p>
        </div>
        <div className="skillCard">
          <h3>CSS</h3>
          <p style={{ color: "#254bdd" }}>
            <SiCss3 />
          </p>
        </div>
        <div className="skillCard">
          <h3>Git</h3>
          <p style={{ color: "#790079" }}>
            <SiGit />
          </p>
        </div>
      </div>
      <h2>Basic knowledge</h2>
      <div className="skillCards">
        <div className="skillCard">
          <h3>MongoDB</h3>
          <p style={{ color: "#0fa14c" }}>
            <SiMongodb />
          </p>
        </div>
        <div className="skillCard">
          <h3>Java</h3>
          <p style={{ color: "#fe0000" }}>
            <SiJava />
          </p>
        </div>
        <div className="skillCard">
          <h3>Express</h3>
          <p style={{ color: colorText }}>
            <SiExpress />
          </p>
        </div>
      </div>
    </div>
  );
}
