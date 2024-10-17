import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import TitleBar from "./components/title-bar/TitleBar";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <TitleBar />
    <App />
  </React.StrictMode>,
);
