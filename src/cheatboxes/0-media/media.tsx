import { CheatBox } from "src/react-cheatsheet/CheatBox";
import { CheatTitle } from "src/react-cheatsheet/CheatTitle";
import { MathLatex } from "src/react-cheatsheet/MathLatex";
import twisting from "./twisting.png";
import comple from "./comple.png";
import lightCalc from "./lightCalc.png";
import classiMulti from "./classiMulti.png";
import dispDist from "./dispDist.png";

export const media = [
  <CheatTitle title="0 - Media" />,
  <CheatBox title="Aufgaben">
    <ul>
      <li>Kategorisierung der Übertragungsmedien</li>
      <li>
        Bestimmung physikalischer Eigenschaften (Bandbreite, Dämpfung,
        Übersprechen)
      </li>
      <li>Auswahl geeigneter Medien für spezifische Aufgaben</li>
      <li>
        Erklärung der Funktionsprinzipien von Medien wie Kabeln und
        Lichtwellenleitern
      </li>
    </ul>
  </CheatBox>,

  <CheatBox title="Dampfung">
    <div style={{ paddingBottom: "8px" }}>
      Datenrate ↑ ↔ Bandbreite ↑ (Dämpfung fix)
      <br />
      Dämpfung ↑ ↔ Max Distanz ↓
      <br />
      (Datenrate fix) Datenrate ↓ ↔ Max Distanz ↑ (Dämpfung fix)
    </div>
    <MathLatex>{`Dämpfung / SNR \\ A = 10 * log(\\frac{P_1}{P_2}) = 20 * log(\\frac{U_1}{U_2})`}</MathLatex>{" "}
    wo P Leistung, U Spannung
  </CheatBox>,

  <CheatBox title="Kabeln">
    <table>
      <tr>
        <th style={{ width: "10%" }}>Kabeltyp</th>
        <th style={{ width: "20%" }}>Konzept/Definition</th>
        <th style={{ width: "10%" }}>Reichweite</th>
        <th style={{ width: "10%" }}>Signalqualität</th>
        <th style={{ width: "25%" }}>Vorteile</th>
        <th style={{ width: "25%" }}>Nachteile</th>
      </tr>
      <tr>
        <td>Koaxialkabel</td>
        <td>
          Ein Kabel mit einem inneren Leiter, der von einem dielektrischen
          Material und einem äußeren Leiter umgeben ist.
        </td>
        <td>Mittlere</td>
        <td>Hoch</td>
        <td>
          Hohe Übertragungsgeschwindigkeit, geringe Störanfälligkeit, große
          Reichweite, hohe Bandbreite, kostengünstig
        </td>
        <td>
          Dick und unflexibel, begrenzte maximale Entfernung, potenzielle
          Signalverluste, empfindlich gegenüber physischer Beschädigung,
          veraltete Technologie
        </td>
      </tr>
      <tr>
        <td>Twisted Pair</td>
        <td>
          Zwei isolierte Kupferdrähte, die miteinander verdrillt sind, um
          elektromagnetische Störungen zu reduzieren.
        </td>
        <td>Kurze bis mittlere</td>
        <td>Mittel</td>
        <td>
          Flexibel, einfach zu installieren, kostengünstig, weit verbreitet
        </td>
        <td>
          Geringere Bandbreite im Vergleich zu Koaxialkabeln und Glasfasern,
          anfällig für elektromagnetische Störungen ohne Abschirmung
        </td>
      </tr>
      <tr>
        <td>STP (Shielded Twisted Pair)</td>
        <td>
          Twisted Pair Kabel mit zusätzlicher Abschirmung, um elektromagnetische
          Störungen weiter zu reduzieren.
        </td>
        <td>Kurze bis mittlere</td>
        <td>Hoch</td>
        <td>Geringe Störanfälligkeit, gute Signalqualität, flexibel</td>
        <td>
          Kostspieliger als ungeschirmte Twisted Pair Kabel, schwieriger zu
          installieren
        </td>
      </tr>
      <tr>
        <td>Glasfaserkabel</td>
        <td>
          Ein Kabel aus Glasfasern, das Licht zur Übertragung von Daten
          verwendet.
        </td>
        <td>Lange Reichweite</td>
        <td>Sehr hoch</td>
        <td>
          Sehr hohe Bandbreite, keine elektromagnetischen Störungen, lange
          Reichweite, hohe Sicherheit
        </td>
        <td>
          Kostspielig, schwieriger zu installieren, empfindlich gegenüber
          physischer Beschädigung
        </td>
      </tr>
      <tr>
        <td>Twinaxial-Kabel</td>
        <td>
          Ein Kabel mit mehreren symmetrischen Aderpaaren, die einzeln und
          insgesamt geschirmt sind.
        </td>
        <td>Kurze bis mittlere</td>
        <td>Sehr hoch</td>
        <td>
          Hervorragende Schirmungseigenschaften, bietet höchsten Schutz gegen
          elektromagnetische Beeinflussung, geringste Laufzeitdifferenzen
          (Skew), geeignet für hohe Datenraten (25 Gb/s und höher), häufig in
          Rechenzentren verwendet.
        </td>
        <td>Kostspieliger als andere Kabeltypen, schwierig zu installieren.</td>
      </tr>
    </table>
  </CheatBox>,
  <CheatBox title="Twisted Pairs">
    <table>
      <tr>
        <th>Bezeichnung</th>
        <th>Beschreibung</th>
      </tr>
      <tr>
        <td>xx</td>
        <td>Gesamtschirmung (whole cable)</td>
      </tr>
      <tr>
        <td>y</td>
        <td>Aderpaarschirmung (wire pairs)</td>
      </tr>
      <tr>
        <td>TP</td>
        <td>Twisted Pair</td>
      </tr>
    </table>
    <div className="horizontal">
      <ul>
        <p>
          <b>Mögliche Bezeichnungen</b>:
        </p>
        <li>
          <b>U:</b> ungeschirmt
        </li>
        <li>
          <b>F:</b> Folienschirm
        </li>
        <li>
          <b>S:</b> Geflechtschirm
        </li>
        <li>
          <b>SF:</b> Schirm aus Geflecht und Folie
        </li>
      </ul>
      {/* <h3>Beispiele:</h3>
      <table>
        <tr>
          <th>Bezeichnung</th>
          <th>Beschreibung</th>
        </tr>
        <tr>
          <td>U/UTP</td>
          <td>
            Ungeschirmtes Twisted Pair Kabel ohne Schirmung der einzelnen
            Adernpaare.
          </td>
        </tr>
        <tr>
          <td>F/UTP</td>
          <td>Folienschirmung um das Gesamtkabel, ungeschirmte Adernpaare.</td>
        </tr>
        <tr>
          <td>S/FTP</td>
          <td>
            Geflechtschirm um das Gesamtkabel, Folienschirmung um die einzelnen
            Adernpaare.
          </td>
        </tr>
        <tr>
          <td>SF/UTP</td>
          <td>
            Gesamtschirmung aus Geflecht und Folie, ungeschirmte Adernpaare.
          </td>
        </tr>
      </table> */}
    </div>
    <table>
      <tr>
        <th style={{ width: "10%" }}>Störung</th>
        <th style={{ width: "20%" }}>Lösung</th>
        <th style={{ width: "70%" }}>Bild</th>
      </tr>
      <tr>
        <td>Kapaziitver</td>
        <td>Komplementäres Signal</td>
        <td>
          <img src={comple} />
        </td>
      </tr>
      <tr>
        <td>Induktiver</td>
        <td>Verdrillung (Twisting)</td>
        <td>
          <img src={twisting} style={{ width: "75%" }} />
        </td>
      </tr>
    </table>
    <table>
      <tr>
        <th>Cat #</th>
        <th>Frequenz</th>
        <th>Geschwindigkeit/Reichweite</th>
        <th>Notizen</th>
      </tr>
      <tr>
        <td>1...4</td>
        <td>{`< 1 MHz`}</td>
        <td>{`< 1 Mb/s`}</td>
        <td>
          Billigkabel fr analoge Sprachbertragung; Leistung vergleichbar mit
          konventionellem Telefonkabel
        </td>
      </tr>
      <tr>
        <td>5</td>
        <td>bis 100 MHz</td>
        <td>100 Mb/s oder 1 Gb/s Ethernet bis 100 m</td>
        <td></td>
      </tr>
      <tr>
        <td>6</td>
        <td>250 MHz</td>
        <td>1 Gb/s Ethernet und 10 Gb/s Ethernet bis 55 m</td>
        <td></td>
      </tr>
      <tr>
        <td>7</td>
        <td>600 MHz</td>
        <td>10 Gb/s Ethernet bis 100 m</td>
        <td></td>
      </tr>
    </table>
    NEXT: near-end cross talk = induktive Störungen neben Plug, wird mit höher
    Frequenzen reduziett
  </CheatBox>,

  <CheatBox title="Glasfasern">
    <div className="horizontal">
      <ul>
        <li>Höhe Bandbreite → Höhe Datenraten</li>
        <li>Geringe Dämpfung → grosse Distanz</li>
        <li>Resistent gegen elektromag. Störungen</li>
        <li>Kern: Brechungsindex 1.5</li>
        <li>Mantel: Brechungsindex 1.48</li>
      </ul>
      <img src={lightCalc} style={{ width: "60%" }} />
    </div>
    <MathLatex>{`200000km \\cdot s^{-1} = 20 cm \\cdot ns^{-1} = 5 ns \\cdot m^{-1}`}</MathLatex>
    <table>
      <tr>
        <th>Mode</th>
        <th>Kern</th>
        <th>Preis</th>
        <th>Desk.</th>
      </tr>
      <tr>
        <td>Multi</td>
        <td>Dick</td>
        <td>Billig</td>
        <td>
          Dicken Kern → Lichtwellen können sich auf verschiedenen Wegen (Moden)
          durch die Glasfaser bewegen → Delay-Skew
          <br /> Starke Moden-Dispersion → kleinere datenraten & Distanz
        </td>
      </tr>
      <tr>
        <td>Single</td>
        <td>Dünn</td>
        <td>Teuer</td>
        <td>Keine Moden-Dispersion → hohe Datenraten & Distanz</td>
      </tr>
    </table>
    <h3>Moden-Dispersion</h3>
    <strong>Stufen: </strong>Kern hat überall die gleiche Dichte → starke
    Moden-Disp
    <br />
    <strong>Gradient: </strong>Kern is progressiv dnner neben Mantel → kleine
    Moden-Disp.
    <div className="horizontal">
      <img src={classiMulti} />
      <img src={dispDist} />
    </div>
  </CheatBox>,
];
