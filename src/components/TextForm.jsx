import { useState } from "react";

const TextForm = (props) => {
  const [textFromTextArea, setTextFromTextArea] = useState("Enter text here");
  const handleUpperCase = () => {
    // console.log(textFromTextArea);
    setTextFromTextArea(textFromTextArea.toUpperCase());
  };
  const handleLowerCase = () => {
    // console.log(textFromTextArea);
    setTextFromTextArea(textFromTextArea.toLowerCase());
  };
  const handleOnChange = (event) => {
    setTextFromTextArea(event.target.value);
  };
  const handleClearText = () => {
    setTextFromTextArea("");
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(textFromTextArea);
  };
  const handleExtraSpaces = () => {
    setTextFromTextArea(textFromTextArea.split(/[ ]+/).join(" "));
  };
  return (
    <>
      <div
        className="container mb-3"
        style={{ color: props.appMode === "light" ? "#042743" : "white" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows={8}
            value={textFromTextArea}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.appMode === "light" ? "white" : "grey",
              color: props.appMode === "light" ? "#042743" : "white",
            }}
          />
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpperCase}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLowerCase}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClearText}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleExtraSpaces}
        >
          Remove Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.appMode === "light" ? "#042743" : "white" }}
      >
        <h5>Text Summary: </h5>
        <p>
          {
            textFromTextArea.split(/\s+/).filter((ele) => ele.length !== 0)
              .length
          }{" "}
          words and {textFromTextArea.length} characters and{" "}
          {textFromTextArea.split(/\s+/).filter((ele) => ele.length !== 0)
            .length * 0.008}{" "}
          minutes to read
        </p>
        <h3>Preview</h3>
        <p>
          {textFromTextArea.length > 0
            ? textFromTextArea
            : "Enter text in above textbox to preview it here."}
        </p>
      </div>
    </>
  );
};

export default TextForm;
