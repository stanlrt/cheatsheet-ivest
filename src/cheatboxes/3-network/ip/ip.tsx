import { CheatBox } from "src/react-cheatsheet/CheatBox";
import { MathLatex } from "src/react-cheatsheet/MathLatex";
import classes from "./classes.png";
import ipHeader from "./ipHeader.png";
import ipMasks from "./ipMasks.png";
import supernetting from "./supernetting.png";
import subnetting from "./subnetting.png";
import subnettingnew from "./subnettingnew.png";
import header from "./6header.png";
import optHeaders from "./optHeaders.png";
import bspHeaders from "./bspHeaders.png";
import v6addr from "./v6addr.png";

export const ip = [
  <CheatBox title="IP Addressing">
    <div className="horizontal">
      <div>
        <p>
          4 bytes, Netz-Adr. + Interface/Host-Adr. Netz-Adr. = Netz-ID +
          Interface-ID
        </p>
        <p>Broadcast-Adr.: alle Host-Bits sind 1 (→ungerade)</p>
        <p>
          Netz-Adr.: alle Host-Bits sind 0 (→2<sup>x</sup>)
        </p>
      </div>
      <div>
        <img src={classes} />
        <p>D: 224.0.0.0 - 239.255.255.255</p>
        <p>E: 240.0.0.0 - 255.255.255.255</p>
      </div>
    </div>
  </CheatBox>,
  <CheatBox title="IP Header">
    <div className="horizontal">
      <div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
        <img src={ipHeader} style={{ width: "100%" }} />
        <img src={ipMasks} style={{ width: "100%" }} />,
      </div>
      <table style={{ width: "50%" }}>
        <tr>
          <th></th>
          <th>Byte</th>
          <th>Werten</th>
        </tr>
        <tr>
          <td>IP Version</td>
          <td>0.5</td>
          <td>4 oder 6</td>
        </tr>
        <tr>
          <td>Internet Header Length</td>
          <td>0.5</td>
          <td>
            Länge <MathLatex>{`l`}</MathLatex> des Headers s.d:{" "}
            <MathLatex>{`4 \\cdot l = Anzahl Bytes`}</MathLatex>. Default 5 (20
            bytes), max 15 (60 bytes)
          </td>
        </tr>
        <tr>
          <td>Diffentiated Services</td>
          <td>1</td>
          <td>Priorisierung des Packets</td>
        </tr>
        <tr>
          <td>Total Length</td>
          <td>2</td>
          <td>Länge ganzes IP-Packet in bytes (max 65 535)</td>
        </tr>
        <tr>
          <td>Time to Live</td>
          <td>1</td>
          <td>
            Wie viele router-Weiterleitungen (Hop) das Packet noch überleben
            kann Bei Weiterleitung dekrementiert
          </td>
        </tr>
        <tr>
          <td>Protocol</td>
          <td>1</td>
          <td>ICMP 1 / TCP 6 / UDP 17</td>
        </tr>
        <tr>
          <td>Checksum</td>
          <td>2</td>
          <td>Prüfsumme, in jedem Router neu berechnet (wegen TTL, NAT)</td>
        </tr>
        <tr>
          <td>Source Address</td>
          <td>4</td>
          <td>IP</td>
        </tr>
        <tr>
          <td>Destnation Address</td>
          <td>4</td>
          <td>IP</td>
        </tr>
        <tr>
          <td>Options / Padding</td>
          <td></td>
          <td>
            Siehe Options und Fragmentierung. Padding, um Reihe zu füllen (länge
            ist vielfach von 4 bytes)
          </td>
        </tr>
      </table>
    </div>
  </CheatBox>,
  <CheatBox title="IP Fragmentierung">
    <p>Fragmente sind IP Packets (Header+Daten)</p>
    <p>
      Fragmentierung in Sender: IP Packet in Fragment mit Grösse=PMTU zerbrochen
    </p>
    <ul>
      IP Header fields:
      <li>ID: ID von ursprnglichem IP Packet</li>
      <li>Flags: 0 bit, DF, MF (don't fragment/more fragments)</li>
      <li>
        Fragment Offset: Position des Fragments in Daten-Bytes. Vielfaches von 8
        bytes.
      </li>
    </ul>
  </CheatBox>,
  <CheatBox title="Supernetting">
    <p>Wir wollen mehreren C Klassen als 1 Supernet kombinieren.</p>
    <div className="horizontal">
      <ol>
        <li>Check contiguous: Ja, +1 Inkrement zur Netz-Adr.</li>
        <li>Check equal size: Ja, alle Class C (→ size $2^8$)</li>
        <li>
          Check first IP divisible by Supernet size:
          <ol>
            <li>Supernet size: $Anzhal Class C * 2^8 = 2^{10}$</li>
            <li>Last 10 bits of $198.51.0110'0100'0000'0000$ are 0 </li>
          </ol>
        </li>
        <li>
          Addresses to merge → 4 = 2<sup>2</sup> → add 2 bits to subnet mask
          Create Supernet IP Addr. by shifting by 2 t the left
        </li>
      </ol>
      <img src={supernetting} />
    </div>
  </CheatBox>,
  <CheatBox title="Subnetting">
    <p>Wir wollen eine Class B Net in 8 kleinere Subnets teilen.</p>
    <div className="horizontal">
      <ul>
        <li>
          Before: Class B Addr. with /16 → 2<sup>16</sup> Hosts
        </li>
        <li>
          Wanted: 8 Subnets → 2<sup>3</sup> → 3 more Net bits needed (3 Host
          bits less)
        </li>
        <li>
          After: /19, 2<MathLatex>{`\\frac{2^{16}}{8} = 8192`}</MathLatex> Addr.
          per subnet
        </li>
      </ul>
      <div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
        <img src={subnetting} style={{ width: "100%" }} />
        <img src={subnettingnew} style={{ width: "100%" }} />
      </div>
    </div>
  </CheatBox>,
  <CheatBox title="IPv6">
    <p>
      16 bytes → <MathLatex>{`2^{128}`}</MathLatex> Adressen
    </p>
    <p>Broadcast durhc Multicast ersetzt, ARP durch NDP ersetzt</p>
    <ul>
      <strong>Adressing:</strong>
      <li>
        2 bytes getrennet mit “:”:
        2001:**0**620:0000:0000:0000:**00**FF:FE9C:7E4A
      </li>
      <li>Fhrende 0 weglassen: 2001:620:0000:0000:0000:FF:FE9C:7E4A</li>
      <li>Nullfolge weglassen (max 1 Mal): 2001:620::FF:FE9C:7E4A</li>
    </ul>
    <img src={v6addr} />
    <p>
      Header: 40 bytes, erweitert von optionale Headers in fixe Reihenfolge.
      Enthält Typ & Länge von nachfolgenden Headers
    </p>
    <img src={header} />
    <img src={optHeaders} />
    <img src={bspHeaders} />
  </CheatBox>,
];
