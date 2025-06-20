import { CheatBox } from "src/react-cheatsheet/CheatBox";
import { CheatTitle } from "src/react-cheatsheet/CheatTitle";
import pricediffval from "./pricediffval.png";
import mthods from "./mthods.png";
import vsvalue from "./vsvalue.png";
import art from "./art.png";
import nettobrutto from "./nettobrutto.png";
import pv from "./pv.png";
import pvlogic from "./pvlogic.png";
import reingewinn from "./reingewinn.png";
import rein1 from "./rein1.png";
import rein2 from "./rein2.png";
import mittelwert from "./mittelwert.png";
import mittelbad from "./mittelbad.png";
import dcff from "./dcff.png";
import fcf from "./fcf.png";
import tv from "./tv.png";
import nopat from "./nopat.png";
import dcfex from "./dcfex.png";
import tvbsp from "./tvbsp.png";
import dcfexam from "./dcfexam.png";
import kgb from "./kgb.png";
import goodwill from "./goodwill.png";

export default [
  <div style={{ height: "120px" }} />,
  <CheatTitle title="Valuation" />,
  <CheatBox title="Wert">
    <img src={pricediffval} alt="pricediffval.png" style={{ width: "70%" }} />
    <img src={mthods} alt="mthods" style={{ width: "50%" }} />
    <div className="horizontal">
      <ul style={{ width: "30%" }}>
        When:
        <li>Merger and Acquisition</li>
        <li>IPO</li>
        <li>Founding (AG Gmbh)</li>
        <li>Inheritance/new owners</li>
      </ul>
      <img src={vsvalue} alt="vsvalue" style={{ width: "70%" }} />
    </div>
    <img src={art} alt="rt" style={{ width: "70%" }} />
  </CheatBox>,
  <CheatBox title="Comparison">
    <div className="horizontal">
      <ul style={{ width: "30%" }}>
        <li>
          Entity Approach: Values the entire firm (debt + equity), giving the
          Brutto-Unternehmenswert (Gross Enterprise Value). Useful for comparing
          firms with different capital structures.
        </li>
        <li>
          Equity Approach: Values only the equity holders' stake, giving the
          Netto-Unternehmenswert (Net Value or Equity Value). This is the
          relevant figure for an acquisition price
        </li>
      </ul>
      <img src={nettobrutto} alt="nettobrutto" style={{ width: "70%" }} />
    </div>
  </CheatBox>,
  <CheatBox title="Substanzwert (net asset value)">
    <h2>Indirekte Methode (Brutto)</h2>
    How much would it cost to recreate the company? Butto-Substanzwert:
    <ol>
      <li>
        Operational (machine...) assets at replacement cost (Fortführungskosten)
      </li>
      <li>
        Non-operational assets (real estate, investments in other companies...)
        at liquidation value (Verkaufswert)
      </li>
    </ol>
    Substract FK (debt) gives the Netto-Substanzwert (Equity value)
    <h2>Direkte Methode (Netto)</h2>
    EK von Bilanz + Stille Reservem
    <h2>+ / -</h2>
    TLDR: widely accepted, very objective, but does not take future
    possibilities & risks into account. +:
    <ul>
      <li>
        Häufig erster Wertindikator (mögliche Wert- oder Preisuntergrenze, u.a.
        bei Liquidationen)
      </li>
      <li>Einsatz oft ergänzend mit anderen Methoden</li>
      <li>
        Anlageintensive Branchen (z.B. Bau, Kraftwerke, Telekommunikation,
        Hotellerie) & Banken
      </li>
      <li>
        Ermittlung Betriebskapital (IC = Invested Capital) und Kapitalkosten
        (EVA-Methode)
      </li>
      <li>
        Fokus auf tatsächlichen Werten (beruht nicht auf unsicheren Prognosen)
      </li>
      <li>Intuitive Akzeptanz (oft emotionaler Wert)</li>
    </ul>
    -:
    <ul>
      <li>Bestandesorientiert (Vernachlässigung der künftigen Erwartungen)</li>
      <li>
        Nicht gut geeignet für gewinnträchtige und wachstumsstarke Unternehmen,
        die mit dieser Methode deutlich zu niedrig bewertet werden.
      </li>
      <li>
        Ermittlung der Markt- und Wiederbeschaffungswerte nicht immer einfach
      </li>
      <li>Keine Berücksichtigung des Risikos</li>
    </ul>
  </CheatBox>,
  <CheatBox title="Reine Ertragswert-Methode (EW-Methode) (Pure Capitalized Earnings Method)">
    Value based on future profits to shareholders. Assume the company has 0
    growth, so profits will remain constant forever and all go to shareholders
    (no reinvestment).
    <h2>Present Value (PV)</h2>
    <div className="horizontal">
      <img src={pv} alt="pv" />
      <div>
        K<sub>1</sub>: yearly profit for shareholder
      </div>
      <div>r: discount rate (Zins)</div>
    </div>
    <img src={pvlogic} alt="pvlogic" />
    <img src={reingewinn} alt="reingewinn" />
    <div className="horizontal">
      <img src={rein1} alt="rein1" />
      <img src={rein2} alt="rein2" />
    </div>
    git
  </CheatBox>,
  <CheatBox title="Mittelwert (Avg value) methode">
    <div className="horizontal">
      <img src={mittelwert} alt="mittelwert" />
      <div>
        TLDR: prgmatic, includes both current and future potential, used for SME
        and tax. BUT: weighting is arbitrary and not robust. DCF preferred.
        <img src={mittelbad} alt="mittelbad" />
      </div>
    </div>
  </CheatBox>,
  <CheatBox title="Discounted Cash Flow (DCF) methode">
    Cannot be manipulated by bookkeepers. Profit is opinion, cash is fact.
    <div>
      <h2>DCF</h2>
      <img src={dcff} alt="dcff" style={{ width: "100%" }} />
      <img src={dcfexam} alt="dcfexam" style={{ width: "100%" }} />
    </div>
    <div>
      <h2>FCF (Free cashflow)</h2>
      <img src={fcf} alt="fcf" style={{ width: "100%" }} />
      <img src={nopat} alt="nopat" />
    </div>
    <img src={dcfex} alt="dcfex" />
  </CheatBox>,

  <CheatBox>
    <h2>TV (terminal value)</h2>
    calculated at the end of a detailed planning horizon (e.g., 3-5 years) and
    captures the value of all cash flows thereafter, into perpetuity.
    <img src={tv} alt="tv" />
    <img src={tvbsp} alt="tvbsp" />
    <h2>Pros cons</h2>
    <ul>
      <li>
        Advantages: It is considered international best practice, focuses on
        cash flow (which is less subject to manipulation than earnings), and
        allows for detailed modeling of a company's future, making it suitable
        for high-growth firms like startups.
      </li>
      <li>
        Disadvantages: The valuation is highly sensitive to assumptions about
        future cash flows, growth rates, and the discount rate. The Terminal
        Value often constitutes a significant portion of the total valuation,
        making it vulnerable to even small errors in these assumptions.
      </li>
    </ul>
  </CheatBox>,
  <CheatBox title="Valuation process">
    <ol>
      <li>
        Detailplanung (Detailed Planning Phase, e.g., 3-5 years): Explicitly
        forecast the FCF for each year based on detailed business plans.
      </li>
      <li>
        Übergangsphase (Transition Phase, e.g., 6-10 years): Assume a constant,
        medium-term FCF growth rate.
      </li>
      <li>
        Endphase (Terminal Phase): Calculate the Terminal Value, which
        represents all future cash flows from this point forward.
      </li>
    </ol>
  </CheatBox>,
  <CheatBox title="Multiplikator methode">
    Vlauation by comparing to other already valued companies.
    <h2>Choose multiple for private company</h2>
    <ul>
      <li>
        <strong>Umsatz Multiple (Sales):</strong> For unprofitable companies
        with future earning potential (startups, turnarounds)
      </li>
      <li>
        <strong>EBITDA Multiple:</strong> Good baseline when no major future
        investments expected; not affected by depreciation assumptions
      </li>
      <li>
        <strong>EBIT Multiple:</strong> Better than EBITDA when similar high
        investments are planned; accounts for past investments via depreciation
      </li>
      <li>
        <strong>EBITC Multiple:</strong> For companies that don't profit but can
        pay owner salary
      </li>
    </ul>
    <h2>Choose multiple for public company</h2>
    <div className="horizontal">
      <ul>
        <li>
          Kurs-Gewinn-Verhältnis (KGV) or Price-to-Earnings (P/E) Ratio:
          Compares the company's stock price to its earnings per share. A high
          KGV suggests the market expects high future growth.
        </li>
        <li>
          Kurs-Buchwert-Verhältnis (KBV) or Price-to-Book (P/B) Ratio: Compares
          the stock's market value to its accounting book value.
        </li>
      </ul>
      <img src={kgb} alt="kgb" />
    </div>
  </CheatBox>,
  <CheatBox title="Goodwill">
    Value of reputation, renowned customers, know-how, management quality, tech.
    <div>
      Goodwill= Unternehmenswert (Transaction Price) Netto-Substanzwert (Net
      Asset Value)
    </div>
    <img src={goodwill} alt="goodwill" />
  </CheatBox>,
];
