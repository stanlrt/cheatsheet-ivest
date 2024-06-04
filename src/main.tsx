import React from "react";
import ReactDOM from "react-dom/client";
import { CheatSheet } from "./react-cheatsheet/CheatSheet.tsx";

import "./main.css";

import { all } from "@cheatboxes/_all/all.tsx";
import { application } from "@cheatboxes/5_application/application.tsx";
import { media } from "@cheatboxes/0-media/media.tsx";
import { physical } from "@cheatboxes/1-physical/physical.tsx";
import { transport } from "@cheatboxes/4-transport/transport.tsx";
import { network } from "@cheatboxes/3-network/network.tsx";
import { dataLink } from "@cheatboxes/2-data-link/dataLink.tsx";

const content = [
  ...all,
  ...media,
  ...physical,
  ...dataLink,
  ...network,
  ...transport,
  ...application,
];

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CheatSheet
      title="KT Cheatsheet"
      content={content}
      measurementDelay={700}
    />
  </React.StrictMode>
);
