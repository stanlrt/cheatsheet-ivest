import { CheatBox } from "src/react-cheatsheet/CheatBox";
import bilanzImg from "./bilanz.png";
import bilanzBsp from "./bilanzBsp.png";
import bilanzStruktur from "./bilanzStruktur.png";
import rechnungen from "./rechnungen.png";

export const bilanz = [
  <CheatBox title="Zusammenfassung">
    <img style={{ width: "100%" }} src={rechnungen} alt="Zusammenfassung" />
  </CheatBox>,
  <CheatBox title="Bilanz/Bestandesrechnung">
    <span>"Snapshot": wo das Kapital investiert wird und woraus es kommt</span>
    <table>
      <thead>
        <tr>
          <th>Name DE</th>
          <th>Name EN</th>
          <th>Definition</th>
          <th>Beispiele</th>
          <th>Passiv/aktiv</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Umlaufvermögen</td>
          <td>Current Assets</td>
          <td>
            Alle Vermögensteile die als <strong>flüssige Mittel</strong>{" "}
            vorhanden sind, oder die sich <strong>innert eines Jahres</strong>{" "}
            zu solchen umwandeln
          </td>
          <td>
            Bargeld, Bankguthaben, Forderungen aus Lieferungen und Leistungen,
            Vorräte, kurzfristige Wertschriften, ARA
          </td>
          <td>Aktiv</td>
        </tr>
        <tr>
          <td>Anlagevermögen</td>
          <td>Fixed Assets</td>
          <td>
            Aktiven die für eine <strong>mehr als einjährige Nutzung</strong>{" "}
            vorgesehen sind
          </td>
          <td>Gebäude, Maschinen, Fahrzeuge, langfristige Investitionen</td>
          <td>Aktiv</td>
        </tr>
        <tr>
          <td>Kurzfristiges Fremdkapital</td>
          <td>Current Liabilities</td>
          <td>
            Geld-, Sachgüter- oder Dienstleistungsabgänge an Dritte, die gemäss
            Erwartungen <strong>innerhalb eines Jahres erfolgen werden</strong>
          </td>
          <td>
            Verbindlichkeiten aus Lieferungen und Leistungen, kurzfristige
            Kredite, Rückstellungen
          </td>
          <td>Passiv</td>
        </tr>
        <tr>
          <td>Langfristiges Fremdkapital</td>
          <td>Long-term Liabilities</td>
          <td>
            Geld-, Sachgüter- oder Dienstleistungsabgänge an Dritte, die gemäss
            Erwartungen erst nach einem Jahr erfolgen werden
          </td>
          <td>Langfristige Kredite, Anleihen, Hypotheken</td>
          <td>Passiv</td>
        </tr>
        <tr>
          <td>Eigenkapital</td>
          <td>Equity</td>
          <td>
            Das Eigenkapital entspricht dem{" "}
            <strong>Wert der Ansprüche der Eigentümer</strong> auf das
            Unternehmen
          </td>
          <td>Aktienkapital, Gewinnrücklagen, Reserven</td>
          <td>Passiv</td>
        </tr>
      </tbody>
    </table>
    <img src={bilanzImg} alt="Bilanz" style={{ width: "70%" }} />
    <img src={bilanzBsp} alt="Bilanz" style={{ width: "70%" }} />
    <img src={bilanzStruktur} alt="Erfolgsrechnung" style={{ width: "50%" }} />
    <div>Summe Aktiven = Summe Passiven</div>
  </CheatBox>,
];
