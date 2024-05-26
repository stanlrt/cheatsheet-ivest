import React from "react";
import ReactDOM from "react-dom/client";
import CheatSheet from "./CheatSheet.tsx";
import "./index.css";

const cheatBoxes = [
  <div>CheatBox 1</div>,
  <div style={{ height: "300px", border: "1px solid black" }}>CheatBox 2</div>,
  <div>CheatBox 3</div>,
];

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CheatSheet cheatBoxes={cheatBoxes} />
  </React.StrictMode>
);
