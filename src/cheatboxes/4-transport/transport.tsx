import { CheatTitle } from "src/react-cheatsheet/CheatTitle";
import { tcp } from "./tcp";
import { udp } from "./udp";
import { CheatBox } from "src/react-cheatsheet/CheatBox";
import { udpTcp } from "./udpTcp";

export const transport = [
  <CheatTitle title="4 - Transport" />,
  <CheatBox title="Aufgaben">
    <ul>
      <li>Zuverlässige Datenübertragung</li>
      <li>Verbindungsaufbau und -abbau</li>
      <li>Flusskontrolle</li>
      <li>Fehlerbehebung</li>
      <li>Multiplexing und Demultiplexing von Daten</li>
    </ul>
  </CheatBox>,
  ...udpTcp,
  ...udp,
  ...tcp,
];
