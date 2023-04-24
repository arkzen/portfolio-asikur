import "./css/About.css";
import myFace from "../img/face.jpg";

export default function About({ colorBG, colorText, colorDynamic }) {
  const initStyle = {
    backgroundColor: colorBG,
    color: colorText,
    margin: "40px auto",
    paddingTop: "75px",
  };

  return (
    <div id="About" style={initStyle}>
      <h1 className="title" style={{ color: colorDynamic }}>
        About me
      </h1>
      <div className="aboutContainer">
        <div className="leftPart">
          <div className="leftPicture">
            <img src={myFace} alt="my face" width="250px" />
          </div>
        </div>
        <div className="rightPart">
          <h2>Hello!</h2>
          <p>
            I am Asikur, android developer from Bangladesh. I have deep
            understanding of the technologies and the processes required for
            realising a successful android project from A to Z. I'm ready and eager
            to work to create something simple and unique.
          </p>
          <div className="aboutContact">
            <p>
              <strong>Full Name</strong>
              <br />Md Asikur rahman
            </p>
            <p>
              <strong>Email</strong>
              <br />
              asikurcsegb@gmail.com
            </p>
            <p>
              <strong>Location</strong>
              <br />
              Dhaka, Bangladesh.
            </p>
            <p>
              <strong>Education</strong>
              <br />
              B.Sc in C.S.E.
            </p>
          </div>
          <div className="aboutButton">
            <a style={{ color: colorDynamic }} href="#Portfolio">
              My work!
            </a>
            <a
              className="resume"
              style={{ backgroundColor: colorDynamic, color: colorBG }}
              href="https://asikur-docs.s3.ap-southeast-2.amazonaws.com/Resume-of-Asikur+rahman.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
