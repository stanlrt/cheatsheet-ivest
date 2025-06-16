import { CheatBox } from "src/react-cheatsheet/CheatBox";
import cashflowWays from "./cashflowWays.png";
import indirekt from "./indirekt.png";
import exampleIndirekt from "./exampleIndirekt.png";
import cfi from "./cfi.png";
import cff from "./cff.png";
import cashflowBsp from "./cashflowBsp.png";
import cashflowsum from "./cashflowsum.png";

export const cashflow = [
  <CheatBox title="Geldflussrechnung">
    <div>tatsächlichen, liquiditätswirksamen Zahlungsströme</div>
    <div>
      Die Geldflussrechnung (Cash Flow Statement) gibt Auskunft über die
      Fähigkeit des Unternehmens Zahlungsmittel zu generieren und zeigt den
      Bedarf an Zahlungsmitteln auf. Der Cashflow kann direkt und indirekt
      ermittelt werden.
    </div>
    <ul>
      <li>
        <strong>Betriebstätigkeit/Geschäftstätigkeit/Cashflow (CFO)</strong> =
        operational stuff (interest, customers, costs...)
      </li>
      <li>
        <strong>Investitionstätigkeit (CFI)</strong> = buying/selling assets
        (buidling, car...)
      </li>
      <li>
        <strong>Finanzierungstätigkeit (CFF)</strong> = borrowing/lending money
        (investors, hypothek, dividends...)
      </li>
    </ul>
    <img src={cashflowBsp} alt="Geldflussrechnung" />
  </CheatBox>,

  <CheatBox title="CFO">
    <div className="horizontal">
      <img src={cashflowWays} alt="Geldflussrechnung" />
      <img src={cashflowsum} alt="Geldflussrechnung" />
    </div>
  </CheatBox>,

  <CheatBox title="CFO Direkt">
    <ul>
      Requires:
      <li>Liquid Erfolgskonten</li>
      <li>Entsprechende Gegenkonten</li>
    </ul>
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr style={{ borderBottom: "2px solid #333" }}>
          <th style={{ padding: "8px", textAlign: "left" }}>Formel</th>
          <th style={{ padding: "8px", textAlign: "left" }}>Intuition</th>
          <th style={{ padding: "8px", textAlign: "left" }}>Beispiel</th>
        </tr>
      </thead>
      <tbody>
        <tr style={{ borderBottom: "1px solid #ddd" }}>
          <td style={{ padding: "8px" }}>
            <strong>Warenertrag - Δ Forderungen L+L</strong>
          </td>
          <td style={{ padding: "8px" }}>
            Wenn Forderungen steigen, wurde verkauft aber noch nicht bezahlt
          </td>
          <td style={{ padding: "8px" }}>
            Warenertrag 1'200, Forderungen +20 → tatsächliche Zahlung 1'180
          </td>
        </tr>
        <tr style={{ borderBottom: "1px solid #ddd" }}>
          <td style={{ padding: "8px" }}>
            <strong>Warenaufwand + Δ Verbindlichkeiten L+L</strong>
          </td>
          <td style={{ padding: "8px" }}>
            Wenn Verbindlichkeiten steigen, wurde eingekauft aber noch nicht
            bezahlt
          </td>
          <td style={{ padding: "8px" }}>
            Warenaufwand 800, Verbindlichkeiten +30 → tatsächliche Zahlung 770
          </td>
        </tr>
        <tr style={{ borderBottom: "1px solid #ddd" }}>
          <td style={{ padding: "8px" }}>
            <strong>Personalaufwand - Δ Personalverbindlichkeiten</strong>
          </td>
          <td style={{ padding: "8px" }}>
            Wenn Personalverbindlichkeiten steigen, wurden Löhne geschuldet aber
            nicht bezahlt
          </td>
          <td style={{ padding: "8px" }}>
            Personalaufwand 500, Personalverbindlichkeiten +50 → Zahlung 450
          </td>
        </tr>
        <tr style={{ borderBottom: "1px solid #ddd" }}>
          <td style={{ padding: "8px" }}>
            <strong>Zinsaufwand - Δ Zinsverbindlichkeiten</strong>
          </td>
          <td style={{ padding: "8px" }}>
            Aufgelaufene aber noch nicht bezahlte Zinsen
          </td>
          <td style={{ padding: "8px" }}>
            Zinsaufwand 60, Zinsverbindlichkeiten +10 → Zinszahlung 50
          </td>
        </tr>
        <tr style={{ borderBottom: "1px solid #ddd" }}>
          <td style={{ padding: "8px" }}>
            <strong>Sonstiger Aufwand + Δ Rückstellungen</strong>
          </td>
          <td style={{ padding: "8px" }}>
            Rückstellungen = geschätzte zukünftige Zahlungen, noch nicht fällig
          </td>
          <td style={{ padding: "8px" }}>
            Sonstiger Aufwand 200, Rückstellungen +40 → Zahlung 160
          </td>
        </tr>
        <tr>
          <td style={{ padding: "8px" }}>
            <strong>Abschreibungen</strong>
          </td>
          <td style={{ padding: "8px" }}>
            Abschreibungen sind reine Buchhaltung, kein Geld fliesst
          </td>
          <td style={{ padding: "8px" }}>
            Abschreibungen 100 → zum Cashflow +100 addieren (Elimination)
          </td>
        </tr>
      </tbody>
    </table>
  </CheatBox>,

  <CheatBox title="CFO Indirekt">
    <div className="horizontal">
      <img src={indirekt} alt="Cashflow Indirekt" />
      <img src={exampleIndirekt} alt="Cashflow Indirekt" />
    </div>
  </CheatBox>,

  <CheatBox title="CFI">
    <img src={cfi} alt="CFI" />
  </CheatBox>,

  <CheatBox title="CFF">
    <img src={cff} alt="CFF" />
  </CheatBox>,
];
