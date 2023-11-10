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
        path: "/React_Util_Projects",
        element: <TextForm heading="Enter the text to analyze below" />,
      },
      {
        path: "/React_Util_Projects/about",
        element: <About />,
      },
      {
        path: "/React_Util_Projects/toDo",
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
