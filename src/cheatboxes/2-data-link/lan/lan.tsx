import { CheatBox } from "src/react-cheatsheet/CheatBox";
import baum from "./baum.png";
import bpdu from "./bpdu.png";
import bus from "./bus.png";
import linie from "./linie.png";
import macClass from "./macClass.png";
import macParts from "./macParts.png";
import multiport from "./multiport.png";
import ring from "./ring.png";
import stern from "./stern.png";
import vermascht from "./vermascht.png";
import tap from "./tap.png";
import mirror from "./mirror.png";

export const lan = [
  <CheatBox title="MAC">
    6 bytes, regelmassig geändert, in bytes LSB→MSB.
    <div className="horizontal">
      <div>
        <img src={macParts} />
        Hersteller ID eindeutig, Hersteller nummer eindeutig fur Hersteller
      </div>
      <div>
        <img src={macClass} style={{ width: "80%" }} />
        Bit 1 & 2 fr Klassifierung (meistens 00)
      </div>
    </div>
  </CheatBox>,
  <CheatBox title="LAN Topologie">
    <table>
      <thead>
        <tr>
          <th>Topo</th>
          <th>Def</th>
          <th>Pros</th>
          <th>Cons</th>
          <th>Bild</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Bus</td>
          <td>
            <li>Stationen horchen Leitung permanent ab</li>
            <li>Stationen sind aktiv beim Senden</li>
            <li>Keine feste Ausbreitungsrichtung</li>
            <li>
              Empfänger, weisst wenn Daten fr ihn relevant sind, dank der
              Adresse
            </li>
          </td>
          <td></td>
          <td></td>
          <td>
            <img src={bus} />
          </td>
        </tr>
        <tr>
          <td>Linie</td>
          <td>
            <li>Alle Stationen</li>
            <li>empfangen Daten</li>
            <li>senden Daten</li>
            <li>→ weiterleiten Daten</li>
          </td>
          <td></td>
          <td>Eine Station ausgefallen → LAN in 2 Teile segmentiert</td>
          <td>
            <img src={linie} />
          </td>
        </tr>
        <tr>
          <td>Ring</td>
          <td></td>
          <td>Redundanz falls eine Station ausfällt</td>
          <td>Verfahren zur Vermeidung “endlosem Kreisverkehr” benötigt</td>
          <td>
            <img src={ring} />
          </td>
        </tr>
        <tr>
          <td>Vermascht</td>
          <td></td>
          <td>Mehr Redundanz</td>
          <td>Kosten, Aufwand</td>
          <td>
            <img src={vermascht} />
          </td>
        </tr>
        <tr>
          <td>Stern</td>
          <td>Switch/Bridge weiterleitet Daten</td>
          <td></td>
          <td></td>
          <td>
            <img src={stern} />
          </td>
        </tr>
        <tr>
          <td>Baum</td>
          <td></td>
          <td>
            - Mehr Switches → mehr lokale Kommunikation (zBsp: Knot D sendet an
            Knot C), weniger Last auf Switch
          </td>
          <td></td>
          <td>
            <img src={baum} />
          </td>
        </tr>
      </tbody>
    </table>
  </CheatBox>,

  <CheatBox title="LAN Redundanz & Loop">
    Redundante Pfad → Loop → Frames ohne bekannte Empfängers-Adresse
    (Broadcasts) laufen unendlich
    <div className="horizontal">
      <div>
        <ol>
          Spanning-Tree algo:
          <li>
            Root wählen (Zentrum besser als Peripherie)
            <ol type="i">
              <li>Alle Ports blockieren</li>
              <li>„Ich bin Root“</li>
              <li>BPDU mit Nachbarn austauschen</li>
            </ol>
          </li>
          <li>
            ST von Root bauen
            <ol type="i">
              <li>
                Aufdatieren der Info zu Root (kleinste ID) und Pfadkosten zu
                dieser
              </li>
              <li>Austausch aufdatierter BPDUs bis Konvergenz</li>
            </ol>
          </li>
          <li>
            Kanten sperren, die nicht in MST sind
            <ol type="i">
              <li>
                Root-Ports (Empfang der besten BPDU) und Designated-Ports
                (Gegenstück zu Root-Ports) identifizieren
              </li>
              <li>Andere Ports sperren (discarding)</li>
            </ol>
          </li>
        </ol>
        <ul>
          Probleme:
          <li>Langsam (BPDU Austausch jede 2 Sekunde)</li>
          <li>Muss nach jede Topologie-änderung wieder gelaufen werden</li>
        </ul>
        Rapid ST: nur lokale Reaktion auf Topologie-Änderungen (500 ms)
      </div>
      <img src={bpdu} />
    </div>
  </CheatBox>,
  <CheatBox title="LAN Monitoring">
    <div className="horizontal">
      <div>
        <img src={multiport} style={{ width: "100%" }} />
        <p>
          Multiport Hub: Switch port sends frames to a hub than then sends it to
          the stations in LAN, including monitoring station (C)
        </p>
        <p>Pros: All data visible on all ports</p>
        <p>Cons: Changes situation, A and B must be half-duplex</p>
      </div>
      <div>
        <img src={tap} style={{ width: "100%" }} />
        Tap
      </div>
      <div>
        <img src={mirror} style={{ width: "100%" }} />
        <p>
          Mirroring: Switch sends all data from mirrored port (P2) to an extra
          mirroring port (P6). Mirrored frames are tagged.
        </p>
        <p>Pros: Low-level details visible</p>
        <p>Cons: Costs, latency</p>
      </div>
    </div>
  </CheatBox>,
];
