import React from "react";
import ReactDOM from "react-dom/client";
import { CheatSheet } from "./react-cheatsheet/CheatSheet.tsx";

import "./main.css";

import { all } from "@cheatboxes/all/all.tsx";
import { application } from "@cheatboxes/application/application.tsx";
import { media } from "@cheatboxes/media/media.tsx";
import { physical } from "@cheatboxes/physical/physical.tsx";
import { transport } from "@cheatboxes/transport/transport.tsx";

const content = [...all, ...media, ...physical, ...transport, ...application];

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CheatSheet title="KT Cheatsheet" content={content} />
  </React.StrictMode>
);
