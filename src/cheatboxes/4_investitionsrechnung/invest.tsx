import { CheatBox } from "src/react-cheatsheet/CheatBox";
import { CheatTitle } from "src/react-cheatsheet/CheatTitle";
import metho from "./metho.png";
import staticvsdynamic from "./staticvsdynamic.png";
import amort2 from "./amort2.png";
import roi from "./roi.png";
import roe from "./roe.png";
import roa from "./roa.png";
import gegenwartswert from "./gegenwartswert.png";
import abzinsfaktor from "./abzinsfaktor.png";
import rbv from "./rbv.png";
import dcf from "./dcf.png";
import roi2 from "./roi2.png";
import roi3 from "./roi3.png";

export const invest = [
  <CheatTitle title="Investitionsrechnung" />,
  <CheatBox title="Investitionsrechnung">
    <p>Sichere Auszahlung, unsichere Einnahmen am späteren Zeitpunkt</p>
    <img src={metho} alt="Investitionsrechnung" />
    <img src={staticvsdynamic} alt="Investitionsrechnung" />
    <h2>Static: Amortisation</h2>
    Wie viele Jahre bis Investition amortisiert ist.
    <div className="horizontal">
      <img src={amort2} alt="Investitionsrechnung" style={{ width: "70%" }} />
      <ul style={{ width: "30%" }}>
        <li>E.g. 7.5 Kap.eintsatz / 1.5 = 5 Jahre</li>
        <li>
          Einfach, anschaulich aber heikel, gewichtet zeitliche Risiken sehr
          stark, unterschätzt ROI, unterschätzt Zahlungsmittelbedarf
        </li>
      </ul>
    </div>
    <h2>
      Static: Rentabilitätsrechnung: Return on Investment (ROI),
      Eigenkapitalrendite (ROE), Gesamtkapitalrendite (ROA)
    </h2>
    <div className="horizontal">
      <img src={roi} alt="Investitionsrechnung" />
      <img src={roe} alt="Investitionsrechnung" />
    </div>
    <img src={roa} style={{ width: "50%" }} alt="Investitionsrechnung" />
    <div>Ø means average over years. Gebundenes Kapital = EK + FK (Gesamt)</div>
    <div className="horizontal">
      <img src={roi2} alt="Investitionsrechnung" />
      <img src={roi3} alt="Investitionsrechnung" />
    </div>
    <div>Kalkulatorische Zinsen = Zinskosten</div>
    <div>
      Die Eigenkapitalrendite gibt Auskunft wie effizient die Mittel eingesetzt
      wurden.
    </div>
    <div>
      Die Gesamtkapitalrendite misst die Fähigkeit des Managements zur
      wirtschaftlich optimalen Nutzung des investierten Vermögens und sie zeigt
      die gesamten Rückflüsse an die Kapitalgeber, losgelöst von der konkreten
      Finanzierungsform.
    </div>
    <h2>Kapitalwertmethode (NPV/DCF)</h2>
    <img src={dcf} alt="Investitionsrechnung" />
  </CheatBox>,
  <CheatBox title="Wert">
    <h2>Barwert (PV)</h2>
    "How much is a future amount of money worth to me today?"
    <img src={gegenwartswert} alt="Investitionsrechnung" />
    i: Zins (interest rate), n: #years precomputed values:
    <img
      src={abzinsfaktor}
      alt="Investitionsrechnung"
      style={{ width: "105%" }}
    />
    <h2>Rentenbarwertfaktor (RBF)</h2>
    Sum of the PV for a yearly payment. Also: RbF = Kapitaleinsatz / Ø Cashflow
    pro Jahr.
    <img src={rbv} alt="Investitionsrechnung" style={{ width: "105%" }} />
  </CheatBox>,
];
