import React from "react";
import ReactDOM from "react-dom/client";
import { CheatSheet } from "./react-cheatsheet/CheatSheet.tsx";

import "./main.css";
import { example } from "@cheatboxes/_all/default.tsx";

const content = [...example];

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CheatSheet
      title="KT Cheatsheet"
      content={content}
      measurementDelay={500}
      columnCount={3}
    />
  </React.StrictMode>
);
