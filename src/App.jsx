import Navbar from "./components/layouts/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/layouts/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Todo from "./components/todo/Todo";
import News from "./components/news/News";

const App = () => {
  let apiKey = import.meta.env.VITE_NEWS_API_KEY; // importing api key from env variable
  const [appModeDarkOrLight, setAppMode] = useState("light");
  const [alert, setAlert] = useState({ msg: "", type: "" });
  const [selectedCategory, setSelectedCategory] = useState("general");
  const [pageSize] = useState(8);

  const handleCallback = (childData) => {
    setSelectedCategory(childData);
  };
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
    <React.Fragment>
      <main>
        <Router>
          <Navbar
            headingTitle="TextUtils"
            appMode={appModeDarkOrLight}
            toggleMode={toggleMode}
            parentCallback={handleCallback}
          />
          <Alert alert={alert} />
          <Routes>
            <Route
              path="/React_Util_Projects/"
              element={
                <TextForm
                  heading="Enter the text to analyze below"
                  appMode={appModeDarkOrLight}
                />
              }
            />
            <Route
              path="/React_Util_Projects/about"
              element={<About appMode={appModeDarkOrLight} />}
            />
            <Route
              path="/React_Util_Projects/toDo"
              element={<Todo appMode={appModeDarkOrLight} />}
            />
            <Route
              path="/React_Util_Projects/news"
              element={
                <News
                  key={selectedCategory}
                  apiKey={apiKey}
                  pageSize={pageSize}
                  category={selectedCategory}
                />
              }
            />
          </Routes>
        </Router>
      </main>
    </React.Fragment>
  );
};

export default App;
