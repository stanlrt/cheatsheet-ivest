import { CheatBox } from "src/react-cheatsheet/CheatBox";
import { CheatTitle } from "src/react-cheatsheet/CheatTitle";
import { serielAsynch } from "./serielAsynch";
import { serielSynch } from "./serielSynch";
import { berechnen } from "./berechnen";

export const physical = [
  <CheatTitle title="1 - Physical" />,
  <CheatBox title="Theorie">
    <ul>
      <strong>Aufgaben</strong>
      <li>Übertragung von Bitströmen</li>
      <li>
        Festlegung elektrischer Eigenschaften (Signalform, Amplituden,
        Frequenzen)
      </li>
      <li>Codierung der Daten auf elektrische Signale</li>
      <li>Mechanische Eigenschaften (Stecker, Pinbelegung)</li>
    </ul>

    <table>
      <thead>
        <tr>
          <th>Übertragung</th>
          <th>Karakteristik</th>
          <th>+</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Seriell</td>
          <td>
            <ul>
              <li>Dominierend</li>
              <li>Einzelne Bits zeitlich gestaffelt</li>
              <li>Asynchrones oder synchrones Verfahren</li>
            </ul>
          </td>
          <td>Eine Leitung</td>
        </tr>
        <tr>
          <td>Parallel</td>
          <td>
            <ul>
              <li>Selten</li>
              <li>Mehrere Bits gleichzeitig über mehrere Leitungen</li>
            </ul>
          </td>
          <td>Schneller</td>
        </tr>
      </tbody>
    </table>
  </CheatBox>,
  ...serielAsynch,
  ...serielSynch,
  ...berechnen,
];
