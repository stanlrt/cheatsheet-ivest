import { CheatTitle } from "src/react-cheatsheet/CheatTitle";
import { dns } from "./dns";
import { dhcp } from "./dhcp";
import { nat } from "./nat";
import { http } from "./http";
import { CheatBox } from "src/react-cheatsheet/CheatBox";

export const application = [
  <CheatTitle title="5-7 - Application" />,
  <CheatBox title="Aufgaben">
    <ul>
      <strong>Session (Sitzung)</strong>
      <li>Aufbau, Verwaltung und Abbau von Sitzungen</li>
      <li>Synchronisation von Dialogen</li>
      <li>Wiederherstellung von Sitzungen bei Verbindungsverlust</li>
      <strong>Presentation (Darstellung)</strong>
      <li>Umwandlung der Darstellung von Daten</li>
      <li>Verschlüsselung und Entschlüsselung</li>
      <li>Datenkomprimierung und -dekomprimierung</li>
      <strong>Application (Anwendung)</strong>
      <li>Netzwerkdienste fr Anwendungen bereitstellen</li>
      <li>Protokolle für spezielle Anwendungen wie HTTP, FTP, SMTP</li>
      <li>Benutzer-Authentifizierung und -Datenschutz</li>
    </ul>
  </CheatBox>,
  ...dns,
  ...dhcp,
  ...nat,
  ...http,
];
