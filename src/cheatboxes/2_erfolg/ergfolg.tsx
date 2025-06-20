import { CheatBox } from "src/react-cheatsheet/CheatBox";
import ebitda from "./ebitda.png";
import ebitdaBsp from "./ebitdaBsp.png";

export const erfolg = [
  <CheatBox title="Erfolgsrechnung mehrstufig (EBITDA)">
    <span>
      "Dynamisch": finanziellen Erfolg (Gewinn oder Verlust) über ein
      Geschäftsjahr
    </span>
    <div>Ertrag: Gewinn, Aufwand: Spende/Verlust</div>
    <div className="horizontal">
      <img src={ebitda} alt="Erfolgsrechnung" />
      <img src={ebitdaBsp} alt="Erfolgsrechnung" />
    </div>
    <table>
      <thead>
        <tr>
          <th>Grösse (Abk.)</th>
          <th>Vollständiger Name DE</th>
          <th>Vollständiger Name EN</th>
          <th>Erklärung</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>EBITDA</td>
          <td>Ergebnis vor Zinsen, Steuern und Abschreibungen</td>
          <td>
            Earnings Before Interest, Taxes, Depreciation and Amortization
          </td>
          <td>
            Diese Grösse misst den betrieblichen Erfolg, unabhängig davon, wie
            das Unternehmen mit Anlagevermögen ausgestattet ist (altes bzw.
            neues Anlagevermögen o. Ä.) und unabhängig von den
            Finanzierungskosten und der Steuerlast (vgl. EBIT).
          </td>
        </tr>
        <tr>
          <td>EBIT</td>
          <td>Ergebnis vor Zinsen und Steuern</td>
          <td>Earnings Before Interest and Taxes</td>
          <td>
            Diese Grösse dient zum Vergleich betrieblicher Ergebnisse,
            <strong>unabhängig von der Finanzierungsstruktur</strong>{" "}
            (Verhältnis Eigen- und Fremdkapital), den{" "}
            <strong>Finanzmarktbedingungen</strong> (billiges bzw. teures
            Kapital) und den <strong>Steuerregelungen</strong>.
          </td>
        </tr>
        <tr>
          <td>EBT</td>
          <td>Ergebnis vor Steuern</td>
          <td>Earnings Before Taxes</td>
          <td>Diese Grösse misst den betrieblichen Erfolg vor den Steuern.</td>
        </tr>
      </tbody>
    </table>
  </CheatBox>,
];
