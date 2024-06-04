import { CheatBox } from "src/react-cheatsheet/CheatBox";

import DHCPAblaufDiagram from "./dhcpAblauf.png";
import DHCPPacket from "./DHCPPacket.png";
// import DHCPZusammenfassung from "./DHCPZusammenfassung.png";

export const dhcp = [
  <CheatBox title="DHCP Grundlagen">
    <ul>
      <li>
        <strong>Dynamic Host Configuration Protocol (DHCP):</strong> Dynamische
        Zuweisung von IP-Adressen an Clients.
      </li>
      <li>
        <strong>Wichtige Begriffe:</strong>
        <ul>
          <li>Lease: Zeitraum, für den eine IP-Adresse zugewiesen wird.</li>
          <li>Client: Gerät, das eine IP-Adresse anfordert.</li>
          <li>Server: Gerät, das IP-Adressen vergibt.</li>
        </ul>
      </li>
    </ul>
    <h3>Optionen</h3>
    <ul>
      <li>
        <strong>Subnet Mask:</strong> Netzmaske zur Unterscheidung zwischen
        Netzwerk- und Hostanteil einer IP-Adresse.
      </li>
      <li>
        <strong>Router:</strong> IP-Adresse des Standard-Gateways.
      </li>
      <li>
        <strong>DNS Server:</strong> IP-Adressen der DNS-Server.
      </li>
      <li>
        <strong>Hostname:</strong> Name des Client-Geräts.
      </li>
      <li>
        <strong>DNS Domain:</strong> Name der DNS-Domain.
      </li>
    </ul>
  </CheatBox>,

  <CheatBox title="DHCP Ablauf">
    <div className="horizontal">
      <ol>
        <li>
          <strong>DHCP Discover:</strong> Der Client sendet eine
          Broadcast-Anfrage, um einen DHCP-Server zu finden.
        </li>
        <li>
          <strong>DHCP Offer:</strong> Einer oder mehrere DHCP-Server antworten
          mit einem Angebot für eine IP-Adresse.
        </li>
        <li>
          <strong>DHCP Request:</strong> Der Client wählt ein Angebot aus und
          fordert die angegebenen Parameter an.
        </li>
        <li>
          <strong>DHCP Acknowledge:</strong> Der Server bestätigt die Auswahl
          und sendet die endgültigen Parameter.
        </li>
        <li>
          <strong>Lease Erneuerung:</strong> Vor Ablauf der Lease Time erneuert
          der Client die Adresse per Unicast.
        </li>
      </ol>
      <img src={DHCPAblaufDiagram} />
    </div>
  </CheatBox>,

  <CheatBox title="DHCP Packet">
    <img style={{ width: "60%" }} src={DHCPPacket} />
    <table>
      <tr>
        <th>Feld</th>
        <th>Grösse in Bits (Bytes)</th>
        <th>Beschreibung</th>
      </tr>
      <tr>
        <td>Op</td>
        <td>8 (1)</td>
        <td>Gibt den Nachrichtentyp an: 1 für Request, 2 für Reply</td>
      </tr>
      <tr>
        <td>Htype</td>
        <td>8 (1)</td>
        <td>Hardware-Typ, z.B. Ethernet = 1</td>
      </tr>
      <tr>
        <td>Hlen</td>
        <td>8 (1)</td>
        <td>Länge der Hardware-Adresse</td>
      </tr>
      <tr>
        <td>Hops</td>
        <td>8 (1)</td>
        <td>
          Setzt der Client auf 0, jeder Router inkrementiert um 1, um Loops zu
          verhindern
        </td>
      </tr>
      <tr>
        <td>Xid (Transaktions-ID)</td>
        <td>32 (4)</td>
        <td>
          Eindeutige Transaktions-ID zur Client-Zuordnung von Requests und
          Replies
        </td>
      </tr>
      <tr>
        <td>Seconds</td>
        <td>16 (2)</td>
        <td>Sekunden seit Start des Clients</td>
      </tr>
      <tr>
        <td>Unused</td>
        <td>16 (2)</td>
        <td>Unbenutzte Flags</td>
      </tr>
      <tr>
        <td>Ciaddr (Client-IP-Adresse)</td>
        <td>32 (4)</td>
        <td>Client-IP-Adresse, falls der Client bereits eine hat (renewing)</td>
      </tr>
      <tr>
        <td>Yiaddr (Your Client IP-Adresse)</td>
        <td>32 (4)</td>
        <td>IP-Adresse, die dem Client zugewiesen wird. Vom Server gesetzt.</td>
      </tr>
      <tr>
        <td>Siaddr (Server-IP-Adresse)</td>
        <td>32 (4)</td>
        <td>IP-Adresse des DHCP-Servers</td>
      </tr>
      <tr>
        <td>Giaddr (Gateway-IP-Adresse)</td>
        <td>32 (4)</td>
        <td>IP-Adresse des Gateways, falls vorhanden</td>
      </tr>
      <tr>
        <td>Chaddr (Client-Hardware-Adresse)</td>
        <td>128 (16)</td>
        <td>
          Hardware-Adresse des Clients (erlaubt quasi-statische IP-Adresse)
        </td>
      </tr>
      <tr>
        <td>Sname (Server-Host-Name)</td>
        <td>512 (64)</td>
        <td>
          Vom Client gesetzt, dann darf nur den Server mit diesem Namen
          antworten
        </td>
      </tr>
      <tr>
        <td>Boot-File</td>
        <td>1024 (128)</td>
        <td>
          Optionaler Boot-Dateiname, die nachher vom TFTP-Server geladen wird
        </td>
      </tr>
      <tr>
        <td>Options</td>
        <td>Variabel</td>
        <td>Optionale Parameter, z.B. Subnetzmaske, Router-IP</td>
      </tr>
    </table>
  </CheatBox>,
];
