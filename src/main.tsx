import React from "react";
import ReactDOM from "react-dom/client";
import CheatSheet from "./react-cheatsheet/CheatSheet.tsx";
import "./index.css";

const cheatBoxes = [
  <div>CheatBox 1</div>,
  <div style={{ height: "300px", border: "1px solid black" }}>CheatBox 2</div>,
  <div>CheatBox 3</div>,
  <div style={{ height: "300px", border: "1px solid black" }}>CheatBox 4</div>,
  <div>CheatBox 5</div>,
  <div>CheatBox 6</div>,
  <div>CheatBox 7</div>,
  <div>CheatBox 8</div>,
  <div style={{ height: "300px", border: "1px solid black" }}>CheatBox 9</div>,
  <div style={{ height: "300px", border: "1px solid black" }}>CheatBox 10</div>,
  <div style={{ height: "300px", border: "1px solid black" }}>CheatBox 11</div>,
  <div style={{ height: "300px", border: "1px solid black" }}>CheatBox 12</div>,
  <div style={{ height: "300px", border: "1px solid black" }}>CheatBox 13</div>,
  <div style={{ height: "300px", border: "1px solid black" }}>CheatBox 14</div>,
  <div style={{ height: "300px", border: "1px solid black" }}>CheatBox 15</div>,
  <div style={{ height: "300px", border: "1px solid black" }}>CheatBox 16</div>,
];

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CheatSheet cheatBoxes={cheatBoxes} />
  </React.StrictMode>
);
