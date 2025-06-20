import React from "react";
import ReactDOM from "react-dom/client";
import { CheatSheet } from "./react-cheatsheet/CheatSheet.tsx";

import "./main.css";
import { bilanz } from "@cheatboxes/1_bilanz/bilanz.tsx";
import { glossary } from "@cheatboxes/glossary.tsx";
import { CheatTitle } from "./react-cheatsheet/CheatTitle.tsx";
import { erfolg } from "@cheatboxes/2_erfolg/ergfolg.tsx";
import { cashflow } from "@cheatboxes/3_cashflow/cashflow.tsx";
import { invest } from "@cheatboxes/4_investitionsrechnung/invest.tsx";
import { finanzierung } from "@cheatboxes/5_financing/finance.tsx";
import rating from "@cheatboxes/6_rating/rating.tsx";
import valuation from "@cheatboxes/7_valuation/valuation.tsx";

const content = [
  <CheatTitle title="Buchhaltung" />,
  ...bilanz,
  ...erfolg,
  ...cashflow,
  ...invest,
  ...finanzierung,
  ...rating,
  ...valuation,
  ...glossary,
];

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
