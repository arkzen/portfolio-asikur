import "./css/Skill.css";
import {
  SiFirebase,
  SiGithub,
  SiJenkins,
  SiDocker,
  SiKubernetes,
  SiJava,
  SiExpress,
  SiKotlin,
  SiAndroid,
  SiAndroidauto,
  SiStrapi,
  SiAndroidstudio,
  SiCloud66,
  SiGoogleplay,
  SiAmazons3,
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
          <h3>Firebase</h3>
          <p style={{ color: "#790079" }}>
            <SiFirebase />
          </p>
        </div>
        <div className="skillCard">
          <h3>Retrofit</h3>
          <p style={{ color: "#254bdd" }}>
            <SiCloudflare/>
          </p>
        </div>
        <div className="skillCard">
          <h3>Android Studio</h3>
          <p style={{ color: "#254bdd" }}>
            <SiAndroidstudio/>
          </p>
        </div>
      </div>
      <h2>Others</h2>
      <div className="skillCards">
        <div className="skillCard">
          <h3>Git</h3>
          <p style={{ color: "#0fa14c" }}>
            <SiGit />
          </p>
        </div>
        <div className="skillCard">
          <h3>Jenkins</h3>
          <p style={{ color: "#fe0000" }}>
            <SiJenkins />
          </p>
        </div>
        <div className="skillCard">
          <h3>Google Play</h3>
          <p style={{ color: colorText }}>
            <SiGoogleplay />
          </p>
        </div>
      </div>
    </div>
  );
}
