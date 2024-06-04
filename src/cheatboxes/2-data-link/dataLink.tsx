import { CheatBox } from "src/react-cheatsheet/CheatBox";
import { CheatTitle } from "src/react-cheatsheet/CheatTitle";

import frameAsync from "./frameAsynch.png.png";
import framingSync from "./hfhfhfhfh.png";
import framingAsync from "./iframingAsync.png";
import frameSync from "./jfjfjfjfj.png";
import { senden } from "./senden/senden";
import { fehler } from "./fehler/fehler";
import { lan } from "./lan/lan";
import { ethernet } from "./ethernet/ethernet";
import { vlan } from "./vlan/vlan";

export const dataLink = [
  <CheatTitle title="2 - Data Link" />,
  <CheatBox title="Aufgaben">
    <ul>
      <li>
        <strong>Zuverlässige, fehlerfreie</strong> Verbindung zwischen Knoten im
        lokalen Netz → Fehlererkennung, -korrektur
      </li>
      <li>Framing</li>

      <li>Flusssteuerung</li>
      <li>Adressierung der Knoten im lokalen Netz</li>
      <li>Koordination der Knoten-Zugriffe auf das Übertragungsmedium</li>
    </ul>
  </CheatBox>,
  <CheatBox title="Framing">
    <div className="horizontal">
      <div>
        <h3>Seriell asynchron</h3> <br />
        <img src={frameAsync} style={{ width: "100%" }} /> <br />
        <img src={framingAsync} style={{ width: "100%" }} />
      </div>
      <div>
        <h3>Seriell synchron</h3>
        <img src={frameSync} style={{ width: "100%" }} /> <br />
        Keine Daten zu senden → Flags <br />
        <img src={framingSync} style={{ width: "100%" }} /> <br />
        Flag ist ein Bitmuster (bsp: 01111110). Bitstuffing: Sender fgt nach 5
        Eisen immer 1 Null. Empfänger wirft nach 5 Eisen 1 Bit weg.
      </div>
    </div>
  </CheatBox>,
  ...fehler,
  ...senden,
  ...lan,
  ...vlan,
  ...ethernet,
];
