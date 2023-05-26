import "./css/Portfolio.css";
import { FcLink, FcNext } from "react-icons/fc";
import mathstore from "../img/mathstore.jpeg";
import dictionary from "../img/dictionarybanner.jpg";
import beacoder from "../img/beacoderbanner.jpg";

export default function Portfolio({ colorBG, colorText, colorDynamic }) {
  const workList = [
    
    {
      image: mathstore,
      title: "MathStore: Calculators & BMI",
      technologyUsed: "Java, Android",
      liveLink: "https://play.google.com/store/apps/details?id=darkzen.studios.mathstoreproject&pli=1",
      githubLink: "https://github.com/arkzen/MathStore",
    },
    {
      image: dictionary,
      title: "WordSense: Dictionary App",
      technologyUsed: "Java, Retrofit, Rest API, LiveData, MVVM.",
      liveLink: "https://netflixclonebyasikur.netlify.app/",
      githubLink: "https://github.com/arkzen/dictionary-app",
    },
    {
      image: beacoder,
      title: "BeAcoder: Learn coding",
      technologyUsed: "Java, Firebase, Retrofit, Rest API, Firebase",
      liveLink: "https://darkzenshop.netlify.app/",
      githubLink: "https://github.com/arkzen/beAcoder",
    },
   
  ];

  const initStyle = {
    backgroundColor: colorBG,
    color: colorText,
    margin: "40px auto",
    paddingTop: "75px",
  };
  const buttonStyle = {
    border: `1px solid ${colorText}`,
    color: colorText,
  };

  return (
    <div id="Portfolio" style={initStyle}>
      <h1 className="title" style={{ color: colorDynamic }}>
        Portfolio
      </h1>
      <h2>Selected Works</h2>
      <div className="workCards">
        {workList.map((value, index) => {
          return (
            <div className="workCard" key={index}>
              <img src={value.image} alt="WebImage" />
              <h3>{value.title}</h3>
              <p>{value.technologyUsed}</p>
              <div className="workButton">
                <a
                  href={value.liveLink}
                  target="_blank"
                  style={buttonStyle}
                  rel="noreferrer"
                >
                  <span className="workButtonIcon">
                    <FcLink />
                  </span>
                  Preview
                </a>
                <a
                  href={value.githubLink}
                  target="_blank"
                  style={buttonStyle}
                  rel="noreferrer"
                >
                  <span className="workButtonIcon">
                    <FcNext />
                  </span>
                  Github
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
