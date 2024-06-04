import { CheatBox } from "src/react-cheatsheet/CheatBox";
import { MathLatex } from "src/react-cheatsheet/MathLatex";
import berrer from "./berrer.png";
import checksum from "./checksum.png";
import cube from "./cube.png";
import korrektion from "./korrektion.png";
import langQuer from "./langQuer.png";
import parity from "./parity.png";
import crc32 from "./crc32.png";
import bec from "./bec.png";

export const fehler = [
  <CheatBox title="Fehlerrechnung">
    <table>
      <tr>
        <th style={{ width: "10%" }}>Parameter</th>
        <th style={{ width: "30%" }}>Beschreibung</th>
        <th style={{ width: "60%" }}>Berechnung</th>
      </tr>
      <tbody>
        <tr>
          <td>
            Bitfehlerwahrscheinlichkeit (Bit Error Ratio, BER, p<sub>e</sub>)
          </td>
          <td>Wahrscheinlichkeit, dass 1 Bit falsch ist</td>
          <td>
            p<sub>e</sub> = Anzahl fehlerhafte Bits / Gesamtanzahl Bits
          </td>
        </tr>
        <tr>
          <td>Rahmenfehlerwahrscheinlichkeit (Frame Error Ratio, FER)</td>
          <td>Wahrscheinlichkeit, Frame Länge N enthält 1 Fehler</td>
          <td>
            <MathLatex>{`FER \\approx N * p_e`}</MathLatex>, <br />
            wo:
            <ul>
              <li>N: Framegrösse</li>
              <li>
                p<sub>e</sub>: BER
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>Restfehlerwahrscheinlichkeit (Residual Error Ratio, RER)</td>
          <td>
            Wahrscheinlichkeit, F oder mehr unentdeckte Fehler in einem Frame
            Länge N.
          </td>
          <td>
            <MathLatex>{`RER_{F, N} = 1 - P_{\\leq F ,N} = 1 - \\sum_{i=0}^{F} \\binom{N}{i} * (\\epsilon)^i * (1-\\epsilon)^{N-i}`}</MathLatex>{" "}
            wo:
            <ul>
              <li>F: Anzahl Fehler</li>
              <li>N: Framegrsse</li>
              <li>e: Wahscheinlichtkeit, Bit ist unentdecktes Fehler</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>Fehler pro Framebyte (FFB)</td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
    <div className="horizontal">
      <img src={berrer} />
      <p>
        <br />
        LAN: <MathLatex>{`FFB ≤ 5 * 10^{-14}, BER ≤ 10^{-8}`}</MathLatex>
      </p>
    </div>
  </CheatBox>,
  <CheatBox title="Hamming & Codewörter">
    <div>
      <p>
        Hamming-Distance d<sub>min</sub>: # unterschiedliche Bits zwischen 2
        Codewrter
      </p>
      <p>
        <MathLatex>{`e \\leq h-1`}</MathLatex>: Anzhal fehlerhafte Bits
      </p>
      <p>
        <MathLatex>{`k \\leq \\frac{h-1}{2}`}</MathLatex>: Anzhal
        korriegierbarer Bits
      </p>
    </div>
    <div className="horizontal">
      <img src={cube} />
      <img src={korrektion} />
    </div>
    <p>
      Grün: Codewörter, Gelb: fehlerhafte Wörter. Fehlerhafte Wörter in der
      Mitte können nicht korrigiert werden
    </p>
  </CheatBox>,
  <CheatBox title="Fehlererkennung Strats">
    <div className="horizontal">
      <table>
        <tr>
          <th>Typ</th>
          <th>Def</th>
          <th>Max Erkennung</th>
          <th>Max Vorwärts-Korrektur</th>
          <th>Bild</th>
        </tr>
        <tbody>
          <tr>
            <td>Parität</td>
            <td>Inklusiv Paritybit</td>
            <td>Ungerade # Fehler</td>
            <td>0</td>
            <td>
              <img src={parity} />
            </td>
          </tr>
          <tr>
            <td>Längs- + Querparity</td>
            <td></td>
            <td>
              Mindestens 2 Fehler, bis 8 falls alle auf verschiedenen Reihen &
              Spalten
            </td>
            <td>Mindestens 1</td>
            <td>
              <img src={langQuer} />
            </td>
          </tr>
          <tr>
            <td>Checksum</td>
            <td>
              Längsumme (aller Spalten, RTL), letzes Remainder weggeworfen
            </td>
            <td>1</td>
            <td>0</td>
            <td>
              <img src={checksum} />
            </td>
          </tr>
          <tr>
            <td>CRC</td>
            <td>
              Reste der Polynomdivision ist Prüfsumme. Impl. einfach (bit shift)
            </td>
            <td>Kommt an</td>
            <td>0</td>
            <td>
              <img src={crc32} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </CheatBox>,
  <CheatBox title="Fehlerkorrektur">
    <table>
      <tr>
        <th>Typ</th>
        <th>Def</th>
        <th>Probleme</th>
        <th>Bild</th>
      </tr>
      <tr>
        <td>Backward (BEC)</td>
        <td>
          Empfänger sendet keine Quittung, falls Fehler detektiert → Sender
          sendet nochmal
        </td>
        <td>Quittungzeit, E→S Kanal nötig</td>
        <td>
          <img src={bec} />
        </td>
      </tr>
      <tr>
        <td>Forward (FEC)</td>
        <td>Empfänger detektiert und korrigiert Fehlern</td>
        <td></td>
        <td></td>
      </tr>
    </table>
  </CheatBox>,
];
