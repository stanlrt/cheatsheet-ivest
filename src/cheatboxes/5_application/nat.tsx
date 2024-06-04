import { CheatBox } from "src/react-cheatsheet/CheatBox";
import NATSteps from "./NATSteps.png";

export const nat = [
  <CheatBox title="NAT Übersicht">
    <span>
      Network Address Translation (NAT) ist ein Mechanismus, der ermöglicht
      mehrere Hosts in einem lokalen Netzwerk eine einzige öffentliche
      IP-Adresse zu teilen. Die NAT Adresse ist wetlweit eindeutig. Die lokale
      IP-Adressen sind nicht.
    </span>
    <table>
      <th></th>
      <th>Dynamisches Port NAT (NAPT)</th>
      <th>Statisches NAT</th>
      <tr>
        <td>Host-Typ</td>
        <td>Normales Host</td>
        <td>
          Servers (das Port-Nummer ist also standard und kann nicht geändert
          werden)
        </td>
      </tr>
      <tr>
        <td>Locales Port</td>
        <td colSpan={2}>Host Port</td>
      </tr>
      <tr>
        <td>Globales (weltweit) Port</td>
        <td>NAT Tabelle definiert</td>
        <td>Host Port</td>
      </tr>
      <tr>
        <td>Locales IP</td>
        <td colSpan={2}>Host IP</td>
      </tr>
      <tr>
        <td>Globales IP</td>
        <td colSpan={2}>NAT IP</td>
      </tr>
    </table>
  </CheatBox>,

  <CheatBox title="NAPT Auflösungsschritte">
    <div className="horizontal">
      <ol>
        <li>
          <strong>Originalpaket vom lokalen Host:</strong> Der Host im privaten
          Netzwerk (z.B. 192.168.0.10) sendet ein Paket mit seiner eigenen
          IP-Adresse als Quelladresse und einem bestimmten Quellport.
          <br />
          <code>Source IP: 192.168.0.10, Source Port: 12345</code>
        </li>
        <li>
          <strong>Ersetzen der Quelladresse und des Quellports:</strong> Der
          NAT-Router ersetzt die lokale Quelladresse durch die öffentliche
          IP-Adresse und den Quellport durch einen eindeutigen freien Port.
          <br />
          <code>Source IP: 160.85.17.11, Source Port: 54321</code>
        </li>
        <li>
          <strong>Speichern der Zuordnung:</strong> Die Zuordnung zwischen der
          ursprünglichen und der ersetzten Adresse/Port wird in einer
          NAT-Tabelle gespeichert.
        </li>
        <li>
          <strong>Weiterleitung des Pakets:</strong> Das modifizierte Paket wird
          an das Ziel im Internet gesendet.
          <br />
          <code>Destination IP: 8.8.8.8, Destination Port: 80</code>
        </li>
        <li>
          <strong>Rückkehr des Pakets:</strong> Das Ziel sendet ein Antwortpaket
          zurück an die öffentliche IP-Adresse und den zugeordneten Port des
          NAT-Routers.
          <br />
          <code>Destination IP: 160.85.17.11, Destination Port: 54321</code>
        </li>
        <li>
          <strong>Umkehr der Übersetzung:</strong> Der NAT-Router verwendet die
          NAT-Tabelle, um die ursprüngliche Quelladresse und den ursprünglichen
          Quellport wiederherzustellen.
          <br />
          <code>Destination IP: 192.168.0.10, Destination Port: 12345</code>
        </li>
        <li>
          <strong>Zustellung an den lokalen Host:</strong> Das Paket wird an den
          ursprünglichen Host im lokalen Netzwerk zugestellt.
        </li>
      </ol>
      <img src={NATSteps} alt="NAT Auflösungsschritte Diagramm" />
    </div>
  </CheatBox>,

  <CheatBox title="Probleme mit NAT">
    <p>
      <strong>Verletzung des OSI-Layer-Konzepts:</strong> NAT greift auf
      Informationen aus dem Transport-Header zu und verändert diese, was gegen
      das Prinzip der Schichtentrennung verstößt.
      <ul>
        <li>
          Portnummern und IP-Adressen werden geändert → Prüfsummen müssen
          angepasst werden.
        </li>
        <li>
          Verschlüsselung unterhalb des Transport-Layers kann Probleme
          verursachen.
        </li>
      </ul>
    </p>
    <p>
      <strong>Komplexität:</strong> NAT erfordert eine Verwaltung der
      Zuordnungstabellen und die Anpassung der Prüfsummen für jedes Paket, was
      zu zusätzlicher Komplexität und Verzögerungen führen kann.
    </p>
    {/* <img src={NATProblemDiagram} /> */}
  </CheatBox>,
];
