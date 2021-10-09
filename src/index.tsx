import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const themes = {
  main: {
    fontColor: "#f7ede2",
  },
};

export const ThemeContext = React.createContext(themes.main);

ReactDOM.render(
  <ThemeContext.Provider value={themes.main}>
    <App />
  </ThemeContext.Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
