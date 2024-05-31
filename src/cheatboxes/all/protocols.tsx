import { CheatBox } from "src/react-cheatsheet/CheatBox";
import FullPath from "./FullPath.png";
import Beziehung from "./beziehung.png";

export const protocols = [
  <CheatBox>
    <div className="horizontal">
      <img src={Beziehung} alt="Beziehung" />
      <ul>
        <li> Simplex: one station sends, the other receives</li>
        <li>
          Half-duplex: one channel where 1st station sends and 2nd receives,
          other channel where 1st station receives and 2nd sends
        </li>
        <li>
          Full-duplex: one channel where both stations can send and receive
        </li>
      </ul>
    </div>
    <img src={FullPath} />
    <table>
      <tbody>
        <tr>
          <th>
            <strong>Protocol</strong>
          </th>
          <th>Verbindungstyp</th>
          <th>Zuverlässigkeit</th>
          <th>Verkehrsbeziehung</th>
          <th>Kopplung</th>
        </tr>
        <tr>
          <td>
            <strong>Ethernet</strong>
          </td>
          <td>Verbindungsorientiert</td>
          <td>Zuverlässig</td>
          <td>Vollduplex</td>
          <td>Beide</td>
        </tr>
        <tr>
          <td>
            <strong>TCP</strong>
          </td>
          <td>Verbindungsorientiert</td>
          <td>Zuverlässig</td>
          <td>Vollduplex</td>
          <td>Punkt zu Punkt</td>
        </tr>
        <tr>
          <td>
            <strong>UDP</strong>
          </td>
          <td>Verbindungslos</td>
          <td>Unzuverlässig</td>
          <td>Halbduplex</td>
          <td>Shared Medium</td>
        </tr>
        <tr>
          <td>
            <strong>IP</strong>
          </td>
          <td>Verbindungslos</td>
          <td>Unzuverlässig</td>
          <td>Halbduplex</td>
          <td>Shared Medium</td>
        </tr>
      </tbody>
    </table>

    <div>
      <strong>Multiplexing</strong>: Sammeln von Daten aus mehreren
      Anwendungsprozessen des Senders, Hinzufügen eines Headers und Senden als
      Ganzes an die nächste Schicht.
      <br />
      <strong>Demultiplexing</strong>: Extrahieren von Daten aus dem Header
      durch die empfangende Schicht, um den Anwendungsprozess zu identifizieren.
      <br />
      Findet auf allen Schichten statt: „Type“ bei Ethernet, „Protocol“ bei IP,
      „Port“ bei TCP/UDP.
    </div>
  </CheatBox>,
];
