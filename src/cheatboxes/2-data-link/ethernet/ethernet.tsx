import { CheatBox } from "src/react-cheatsheet/CheatBox";
import frame from "./frame.png";
import frameGrossen from "./frameGrossen.png";
import baseTNaming from "./baseTNaming.png";
import baseTTopo from "./baseTTopo.png";
import flp from "./flp.png";
import crossover from "./crossover.png";

export const ethernet = [
  <CheatBox title="Ethernet Frame">
    <div className="horizontal">
      <table style={{ width: "60%" }}>
        <thead>
          <tr>
            <th>Field</th>
            <th>Grösse in bytes</th>
            <th>Deskription/Werten</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Preamble</td>
            <td>7</td>
            <td>
              Synchronisationsmuster für den Empfänger (1010'1010 widerholt 7
              mal)
            </td>
          </tr>
          <tr>
            <td>Start Frame Delimiter (SFD)</td>
            <td>1</td>
            <td>Zeigt den Beginn des Frames an (1010'1011)</td>
          </tr>
          <tr>
            <td>Destination MAC Address</td>
            <td>6</td>
            <td>MAC-Adresse des Empfängers</td>
          </tr>
          <tr>
            <td>Source MAC Address</td>
            <td>6</td>
            <td>MAC-Adresse des Senders</td>
          </tr>
          <tr>
            <td>Length/Type</td>
            <td>2</td>
            <td>
              <ul>
                Wert:
                <li>≤ 1500: Länge von Data ohne Padding </li>
                <li>≥ 1536: Protokoll Network Schicht (0x0800=2048: IP)</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Data</td>
            <td>46-1500</td>
            <td>
              Die zu übertragenden Daten, oder Padding falls Daten kleiner als
              46 bytes
            </td>
          </tr>
          <tr>
            <td>Frame Check Sequence (FCS)</td>
            <td>4</td>
            <td>CRC-32-Prüfsumme zur Fehlererkennung</td>
          </tr>
          <tr>
            <th>Total</th>
            <td>
              72-1526 (Sendedauer) <br /> 64-1518 (Frame)
            </td>
            <td>Gesamtanzahl der Bytes im Frame</td>
          </tr>
        </tbody>
      </table>
      <img src={frame} style={{ width: "40%" }} />
    </div>
    <img src={frameGrossen} style={{ width: "60%" }} />
  </CheatBox>,
  <CheatBox title="Ethernet Ausrüstung">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Beschreibung</th>
          <th>OSI Schicht</th>
          <th>Fehlererkennung</th>
          <th>HW/SW</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Repeater/Hub</td>
          <td>Geräte zur Verstärkung und Verteilung von Signalen.</td>
          <td>1 (Physical Layer)</td>
          <td>Nein</td>
          <td>Hardware</td>
        </tr>
        <tr>
          <td>Switch</td>
          <td>
            Leitet Datenpakete innerhalb eines Netzwerks anhand von
            MAC-Adressen.
          </td>
          <td>2 (Data Link Layer)</td>
          <td>Ja</td>
          <td>Hardware</td>
        </tr>
        <tr>
          <td>Bridge</td>
          <td>
            Verbindet und filtert Netzwerksegmente. Langsamer als Switches
            aufgrund softwarebasierter Verarbeitung.
          </td>
          <td>2 (Data Link Layer)</td>
          <td>Ja</td>
          <td>Hardware/Software</td>
        </tr>
      </tbody>
    </table>
    <div>
      <h3>Bridge filtering</h3>
      <ul>
        Ziele:
        <li>
          Verwerfe ungültige Pakete ({">"}1526B, {"<"}64B, CRC-Fehler)
        </li>
        <li>
          Vermeide wiederholtes Unicast-Flooding. Wenn Bridge ein Paket erhält
          weisst es nicht, welches Port zu nutzen → sendet an allen Ports
        </li>
      </ul>
      <strong>Filtering database:</strong> Database mit MAC{"<>"}Port Entries
      <ol>
        <li>Station sendet unicast Frame.</li>
        <li>Frame beitretet Brdige durch Port 1</li>
        <li>
          Bridge checkt Frame
          <ol style={{ listStyleType: "lower-latin" }}>
            <li>
              Falls Empfängers MAC-Adresse nicht in Filtering-Database ist:
              <ol style={{ listStyleType: "lower-roman" }}>
                <li>
                  Bridge sendet broadcast Frame an alle andere Ports ausser Port
                  1.
                </li>
                <li>
                  Stationen checken Empfänger-MAC, und falls eigene MAC
                  identisch ist, ist die Frame akzeptiert und eine Antwort
                  zurckgesendet.
                </li>
                <li>
                  Bridge erhaltet Antwort, und MAC-Adresse ist in Database
                  hinzugefgt
                </li>
              </ol>
            </li>
            <li>
              Falls in der Database, Bridge discards oder weiterleitet (basiert
              auf Database-Entry)
            </li>
          </ol>
        </li>
      </ol>
    </div>
  </CheatBox>,
  <CheatBox title="BASE-T">
    <div className="horizontal">
      Naming: <img src={baseTNaming} style={{ width: "30%" }} />
      Topo: <img src={baseTTopo} style={{ width: "30%" }} />
    </div>
    {/* <div className="horizontal"> */}
    Autonegociation:{" "}
    <ul>
      Stationen senden Link Pulse:
      <li>
        NLP (Normal): 1 bit jede 16ms → Half-Duplex 10BASE-T (backward-comp.)
      </li>
      <li>
        FLP (Fast): 16 bits jede 16ms → <img src={flp} />
      </li>
    </ul>
    Crossover & polarity: <img src={crossover} />
    {/* </div> */}
  </CheatBox>,
];
