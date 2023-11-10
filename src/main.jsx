import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About.jsx";
import TextForm from "./components/TextForm.jsx";
import Todo from "./components/Todo.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/react-util",
        element: <TextForm heading="Enter the text to analyze below" />,
      },
      {
        path: "/react-util/about",
        element: <About />,
      },
      {
        path: "/react-util/toDo",
        element: <Todo />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
