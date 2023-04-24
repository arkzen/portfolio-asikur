import "./css/Education.css";

export default function Education({ colorBG, colorText, colorDynamic }) {
  const initStyle = {
    backgoundColor: colorBG,
    color: colorText,
    margin: "40px auto",
    paddingTop: "75px",
  };

  return (
    <div id="Education" style={initStyle}>
      <h1 className="title" style={{ color: colorDynamic }}>
        Education
      </h1>
      <h2>Academic Backround</h2>
      <div className="educationContainer">
        <div className="educationTypes">
          <p className="educationYear">2018 - 2022</p>
          <p className="educationTitle">
            B.Sc. in Computer Science and Engineering
          </p>
          <p className="educationInstitute">
          Gono Bishwabidyalay (GB)
          </p>
          <p className="educationResult">
            <strong>Result:</strong> 3.28 out of 4.00
          </p>
        </div>
        <div className="educationTypes">
          <p className="educationYear">2020</p>
          <p className="educationTitle">Android App Development with Java SE</p>
          <p className="educationInstitute">BASIS Institute of Technology & Management (BITM)</p>
          <p className="educationCertificates">
          <a href="https://asikur-docs.s3.ap-southeast-2.amazonaws.com/cer-android-Asikur.jpg" target="_blank" rel="noreferrer" 
                >
      <button className="certificationButton">
       Certificate
      </button>
    </a>
          </p>
        </div>
      </div>
    </div>
  );
}
