import { CheatBox } from "src/react-cheatsheet/CheatBox";
import { CheatTitle } from "src/react-cheatsheet/CheatTitle";
import osiTcpIp from "./osiTcpIp.png";
import hier from "./hier.png";
import atoB from "./atoB.png";
import arpFrame from "./arpFrame.png";
import arpSequ from "./arpSequ.png";
import icmpFrameEncaps from "./icmpFrameEncaps.png";
import icmpFrame from "./icmpFrame.png";
import { ip } from "./ip/ip";

export const network = [
  <CheatTitle title="3 - Network" />,
  <CheatBox title="Aufgaben, Grundsätze & vs OSI">
    <div className="horizontal">
      <ul>
        <strong>Aufgaben</strong>
        <li>Netze verbinden und ihre Besonderheiten verbergen</li>
        <li>Netzweite Adressierung </li>
        <li>Nachführen der Routing Informationen</li>
        <li>Ermitteln des optimalen Weges</li>
        <li>Weiterleiten der Daten über den festgelegten Weg</li>
        <li>NICHT: Fehlerkorrektur, Reihenfolgebehaltung, Flusstseuerung</li>
        <strong>Grundätze</strong>
        <li>Jedes Netzwerk soll für sich selbst funktionsfähig sein</li>
        <li>
          Für den Anschluss ans Internet soll{" "}
          <strong>keine netzinterne Anpassung nötig</strong> sein
        </li>
        <li>
          Die Kommunikation basiert auf "best effort": Schafft es ein Paket
          nicht bis zum Ziel, so soll es (falls notwendig){" "}
          <strong>nach kurzer Zeit von der Quelle nochmals bertragen</strong>{" "}
          werden
        </li>
        <li>
          Netzverbindungen erfolgen durch Routers, die keine Informationen über
          Paketflüsse sammeln und sich dadurch einfach und schnell von Fehlern
          erholen können.
        </li>
        <li>
          Es soll <strong>keine zentrale Funktionssteuerung</strong> bentigt
          werden
        </li>
      </ul>
      <img src={osiTcpIp} />
    </div>
  </CheatBox>,
  <CheatBox title="Router">
    Router hat für jeden Netztyp ein Interface. Router ist normaler Knoten des
    Netzes. ROuter kann Firewall haben.
    <div className="horizontal"></div>
    <img src={hier} />
    <table>
      <tr>
        <th>Merkmal</th>
        <th>Flaches Routing</th>
        <th>Hierarchisches Routing</th>
      </tr>
      <tr>
        <td>Struktur</td>
        <td>Einzelne, flache Ebene</td>
        <td>Mehrere, hierarchisch angeordnete Ebenen</td>
      </tr>
      <tr>
        <td>Verwaltung</td>
        <td>Jeder Router kennt das gesamte Netzwerk</td>
        <td>Jeder Router kennt nur einen Teil des Netzwerks</td>
      </tr>
      <tr>
        <td>Skalierbarkeit</td>
        <td>Wenig skalierbar</td>
        <td>Sehr skalierbar</td>
      </tr>
      <tr>
        <td>Effizienz</td>
        <td>Effizienter bei großen Netzwerken</td>
        <td>Kann bei großen Netzwerken ineffizient sein</td>
      </tr>
      <tr>
        <td>Beispiel</td>
        <td>RIP (Routing Information Protocol)</td>
        <td>OSPF (Open Shortest Path First)</td>
      </tr>
      <tr>
        <td>Routing-Tabelle</td>
        <td>Groß</td>
        <td>Klein</td>
      </tr>
      <tr>
        <td>Administrativer Aufwand</td>
        <td>Niedrig</td>
        <td>Hoch</td>
      </tr>
      <tr>
        <td>Verwendung</td>
        <td>
          Große/vermaschte Netzwerke, wie Unternehmensbackbones oder das
          Internet
        </td>
        <td>
          Kleine bis mittelgroße Netzwerke, einfachere Netzwerktopologien, Rand
          von Netzen
        </td>
      </tr>
    </table>
  </CheatBox>,
  ...ip,
  <CheatBox title="Netz A zu Netz B">
    Knoten a muss Packet an Knot c senden. Sie sind aber in unterschiedlichen
    Netzen.
    <div className="horizontal">
      <ol>
        <li>
          Knoten a checkt seine Routing-Tabelle und sieht, c ist nicht im LAN 
          Packet muss an Router AB gesendet werden.
        </li>
        <li>
          Knoten a sendet ARP Anfrage mit IP von AB auf dem LAN, um MAC-Adresse
          von AB zu erhalten.
        </li>
        <li>Router AB erhält die Anfrage und checkt seine Routing-Tabelle.</li>
        <li>Router AB sendet ARP Antwort an Knoten a.</li>
        <li>Knoten a generiert ein Ethernet-Frame und sendet es an AB.</li>
      </ol>
      <img src={atoB} />
    </div>
  </CheatBox>,
  <CheatBox title="ARP (Address Resolution Protocol)">
    Ziel: Finde MAC-Adresse dank IP-Adresse in LAN
    <ol>
      <li>
        Polling
        <ul style={{ listStyleType: "lower-latin" }}>
          <li>
            Broadcast (gesendet wenn Adresse wird bentigt): a sendet Broadcast
            Ethernet-Frame mit IP-Addresse von AB
          </li>
          <li>
            Unicast (regelmassig an jedes Knoten gesendet, bis ein Knoten
            mehrmals nicht antwortet → Knoten ist offline)
          </li>
        </ul>
      </li>
      <li>AB sendet seine MAC-Addresse zurck</li>
      <li>a sendet Ethernet frame (mit enkapsulierte IP-Packet)</li>
      <li>a speichert MAC-Adresse von AB in ARP-Tabelle</li>
    </ol>
    <div className="horizontal">
      <img src={arpFrame} />
      <img src={arpSequ} />
    </div>
  </CheatBox>,
  <CheatBox title="ICMP (Internet Control Message Protocol)">
    Zur Kommunikation zwischen Hosts und Router verwendet. Keine Garantie, dass
    Paket delivered wird.
    <div className="horizontal">
      <img src={icmpFrameEncaps} />
      <img src={icmpFrame} />
    </div>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "20px",
      }}
    >
      <table>
        <tr>
          <th>ICMP-Typ</th>
          <th>Bedeutung</th>
        </tr>
        <tr>
          <td>0</td>
          <td>Echo Reply</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Destination Unreachable</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Redirect</td>
        </tr>
        <tr>
          <td>8</td>
          <td>Echo</td>
        </tr>
        <tr>
          <td>11</td>
          <td>Time Exceeded</td>
        </tr>
        <tr>
          <td>12</td>
          <td>Parameter Problem: Bad IP Header</td>
        </tr>
        <tr>
          <td>13</td>
          <td>Timestamp</td>
        </tr>
        <tr>
          <td>14</td>
          <td>Timestamp Reply</td>
        </tr>
      </table>
      <div>
        <strong>Redirect:</strong>
        <ol>
          <li>Ein Host H sendet ein IP-Paket an einen ersten Router R1</li>
          <li>
            R1 stellt fest, dass der nächste Router auf dem Weg zum Ziel R2 ist;
            R2 ist aber im gleichen Netz wie H und R1 (mglicherweise
            unvollständige Routingtabelle im Host H)
          </li>
          <li>
            R1 sendet an H eine Redirect-Meldung, damit H Pakete fortan direkt
            an R2 sendet
          </li>
        </ol>
      </div>
      <div>
        <strong>Parameter Problem: Bad IP Header: </strong>
        IP-Header ist fehlerhaft.
      </div>
      <div>
        <strong>Timestamp Request: </strong>
        Echo mit aktuelle Zeit in ms.
      </div>
      <div>
        <strong>Destination Unreachable: </strong>
        <table>
          <tr>
            <th>Code</th>
            <th>Code setter</th>
          </tr>
          <tr>
            <td>0: Net unreachable</td>
            <td>Router</td>
          </tr>
          <tr>
            <td>1: Host unreachable</td>
            <td>Last router in chain (router in net of host)</td>
          </tr>
          <tr>
            <td>2: protocol unreachable</td>
            <td>Destination host</td>
          </tr>
          <tr>
            <td>5: port unreachable</td>
            <td>destination host</td>
          </tr>
          <tr>
            <td>4: Fragment. needed but DF set</td>
            <td>Router</td>
          </tr>
          <tr>
            <td>13: communication administratively prohibited</td>
            <td>Firewall</td>
          </tr>
        </table>
      </div>
      <div>
        <strong>Echo Reply (ping):</strong>
        <ol>
          <li>Host sends echo to other host (Typ 8)</li>
          <li>Other host replies with same data (Typ 0)</li>
        </ol>
        Identifier erlaubt Zuordnung von Reply. Sequence number wird jeweils
        inkrementiert.
      </div>
      <div>
        <strong>Time Exceeded:</strong>
        <ul>
          <li>Fall 1: Packet stirbt (TTL 0)</li>
          <ol>
            <li>
              Router sets TTL of IP-Packet from 1 to 0 → packet is dead and
              won't be sent further
            </li>
            <li>
              Router informs sender by sending Time Exceeded with{" "}
              <strong>Code 0</strong>
            </li>
          </ol>
          <li>Fall 2: Fehlende Fragmente</li>
          <ol>
            <li>Receiver can't reassemble IP-Packet</li>
            <li>
              Receiver sends Time Exceeded with <strong>Code 1</strong> to
              Sender
            </li>
          </ol>
        </ul>
        "Identifer, Sequence" muss 0 sein.
      </div>
    </div>
  </CheatBox>,
  <CheatBox title="MTU (Maximum Transmission Unit)">
    PMTU: Pfad MTU, grosste mogliche Packe-Grosse auf dem Pfad (bestimmt durhc
    Protokol, Hardware...).
    <ol>
      Ziel: find MTU auf Pfad (PMTU) von Sender nach Empfänger, um
      Fragmentierung im Sender zu machen anstatt unterwegs
      <li>Setze PMTU auf MTU</li>
      <li>Sende IP-Packets mit Länge PMTU</li>
      <li>
        Empfänge Destination Unreachable mit Code 4 and Next-Hop MTU in
        “Identifier, Sequence" (siehe Frame).
      </li>
      <li>Setze PMTU auf Next-Hop MTU</li>
      <li>Wiederhole Schritt bis Empfänger erreicht</li>
    </ol>
  </CheatBox>,
  <CheatBox title="traceroute">
    Ziel: Weg zu Host auflisten
    <ol>
      <li>Sende Packet mit TTL = 1</li>
      <li>
        Packet wird von Router 1 verwirft, und ICMP Time Exceeded wird empfangen
        → Router 1 ist bekannt
      </li>
      <li>Sende Packet mit TTL = 2</li>
      <li>uzw</li>
    </ol>
  </CheatBox>,
];
