import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";

// The root of the application.  In older versions of React (pre 18)
// we use ReactDOM.render instead of createRoot.  This setup works
// out of the box with Create React App.
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);