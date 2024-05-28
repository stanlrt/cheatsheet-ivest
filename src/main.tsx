import React, { type ReactNode } from "react";
import ReactDOM from "react-dom/client";
import { CheatSheet } from "./react-cheatsheet/CheatSheet.tsx";

import "./main.css";

import { all } from "@cheatboxes/all/all.tsx";
import { transport } from "@cheatboxes/transport/transport.tsx";

const content: ReactNode[] = [...all, ...transport];

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CheatSheet title="KT Cheatsheet" content={content} />
  </React.StrictMode>
);
