import { CheatBox } from "src/react-cheatsheet/CheatBox";
import commonPorts from "./tcp_udp_ports.jpg";

export const udpTcp = [
  <CheatBox title="UDP&TCP">
    <h3>Pseudo-header</h3>
    <table>
      <tr>
        <th>Feld</th>
        <th>Grösse in Bits</th>
        <th>Beschreibung</th>
      </tr>
      <tr>
        <td>Source IP Address</td>
        <td>32</td>
        <td>IP-Adresse des Absenders</td>
      </tr>
      <tr>
        <td>Destination IP Address</td>
        <td>32</td>
        <td>IP-Adresse des Empfängers</td>
      </tr>
      <tr>
        <td>Protocol</td>
        <td>8</td>
        <td>Protokolltyp (6 für TCP)</td>
      </tr>
      <tr>
        <td>TCP Length</td>
        <td>16</td>
        <td>
          Länge des Datagram (TCP/UDP) inklusive Header und Daten (nicht ganzes
          IP-Packet)
        </td>
      </tr>
    </table>
    Damit ist es u.A. möglich, fehlgeleitete Datagramme zu erkennen. Dies kann
    z.B. auf Grund eines Bit-Flip der Destination Address im Memory eines
    Routers auftreten
    <h3>Ports</h3>
    <div className="horizontal">
      <table>
        <tbody>
          <tr>
            <th>Port-Typ</th>
            <th>Bereich</th>
            <th>Info</th>
          </tr>
          <tr>
            <td>Well-known</td>
            <td>1 - 1'023</td>
            <td>
              Fur UDP & TCP reserviert, können nur für die vorgesehenen
              Anwendungen verwendet werden
            </td>
          </tr>
          <tr>
            <td>Registered</td>
            <td>1'024 - 49'151</td>
            <td>
              Reservierter Bereich für herstellerspezifische Applikationen
            </td>
          </tr>
          <tr>
            <td>Dynamic/Private</td>
            <td>49'152 bis 65'536</td>
            <td>können nach Belieben verwendet werden</td>
          </tr>
        </tbody>
      </table>
      <img src={commonPorts} />
    </div>
  </CheatBox>,
];
