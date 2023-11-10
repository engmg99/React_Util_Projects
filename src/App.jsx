import { useState } from "react";
import Navbar from "./components/Navbar";
import FirstComponent from "./components/FirstComponent";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import { Outlet } from "react-router-dom";

const App = () => {
  const [appModeDarkOrLight, setAppMode] = useState("light");
  const [alert, setAlert] = useState({ msg: "", type: "" });

  const showAlert = (msg, type) => {
    setAlert({ msg: msg, type: type });
    setTimeout(() => {
      setAlert({ msg: "", type: "" });
    }, 500);
  };
  const toggleMode = () => {
    if (appModeDarkOrLight === "light") {
      setAppMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode Enabled", "success");
    } else {
      setAppMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "success");
    }
  };

  return (
    <>
      <Navbar
        headingTitle="TextUtils"
        appMode={appModeDarkOrLight}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      {/* <About appMode={appModeDarkOrLight}></About> */}
      <Outlet />
      {/* <TextForm
        heading="Enter the text to analyze below"
        appMode={appModeDarkOrLight}
      />
      <About />*/}
      {/* <FirstComponent title="Practice Component" /> */}
    </>
  );
};

export default App;
