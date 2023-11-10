// import { useState } from "react";

const About = (props) => {
  let modeStyle = {
    color: props.appMode === "dark" ? "white" : "#042743",
    backgroundColor: props.appMode === "dark" ? "#042743" : "white",
    border: "1px solid",
    borderColor: props.appMode === "dark" ? "white" : 'white',
  };
  // const [modeStyle, setModeStyle] = useState({
  //   backgroundColor: "white",
  //   color: "black",
  // });

  // const [btnText, setBtnText] = useState("Enable Dark Mode");

  // const toggleStyle = () => {
  //   if (modeStyle.color === "black") {
  //     // set light color
  //     setModeStyle({
  //       backgroundColor: "black",
  //       color: "white",
  //     });
  //     setBtnText("Enable Light Mode");
  //   } else {
  //     setModeStyle({
  //       // set dark color
  //       backgroundColor: "white",
  //       color: "black",
  //     });
  //     setBtnText("Enable Dark Mode");
  //   }
  // };

  return (
    <>
      <div className="container" style={modeStyle}>
        <h1>About Us</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item" style={modeStyle}>
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={modeStyle}
              >
                Anaylze Your Text
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={modeStyle}>
                It is shown by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={modeStyle}
              >
                Free to Use
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={modeStyle}>
                It is hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={modeStyle}
              >
                Browser Compatible
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={modeStyle}>
                It is hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-3">
        <button type="button" className="btn btn-primary" onClick={toggleStyle}>
          {btnText}
        </button>
      </div> */}
    </>
  );
};

export default About;
