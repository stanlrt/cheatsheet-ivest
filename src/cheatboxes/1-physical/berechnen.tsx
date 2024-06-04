import { CheatBox } from "src/react-cheatsheet/CheatBox";
import { MathLatex } from "src/react-cheatsheet/MathLatex";
import einUb from "./einheitenUb.png";
import Hartley from "./idk.png";

export const berechnen = [
  <CheatBox title="Information">
    <table>
      <tr>
        <th>Name</th>
        <th>Einheit</th>
        <th>Deskription/Formel</th>
      </tr>
      <tr>
        <td>
          <MathLatex>{`Id{N}`}</MathLatex>
        </td>
        <td>---</td>
        <td>
          Wie viele Bits nötig sind, um N mögliche Werten zu repräsentieren. Bsp
          für 8 Werten (2^3) → 3 Bits
          <MathLatex>{`Id{N} = \\lceil \\log_2{N} \\rceil`}</MathLatex>
        </td>
      </tr>
      <tr>
        <td>(Leitungs-)Symbol</td>
        <td>---</td>
        <td>
          Physikalisches Signal, das zu einem bestimmten Zeitpunkt übertragen
          wird
        </td>
      </tr>
      <tr>
        <td>Baudrate/Symbolrate</td>
        <td>Baud</td>
        <td>Anzahl der Symbole pro Sekunde</td>
      </tr>
      <tr>
        <td>Bitrate/Daten(übertragungs)rate/Durchsatz </td>
        <td>Bit/s</td>
        <td>
          Übertragene Informationsmenge pro Zeiteinheit <br /> Gleich Baudrate
          falls Codierung ist binär (Symbole 0 und 1)
        </td>
      </tr>
      <tr>
        <td>Zeichen</td>
        <td>---</td>
        <td>Einheit der übertragenen Daten, z.B. ein ASCII Zeichen</td>
      </tr>
      <tr>
        <td>Zeichenrate</td>
        <td>Zeichen/s</td>
        <td>Anzahl übertragener Zeichen pro Sekunde</td>
      </tr>
      <tr>
        <td>Bandbreite</td>
        <td>Hz</td>
        <td>???</td>
      </tr>
      <tr>
        <td>Kanalkapazität</td>
        <td>Bit/s</td>
        <td>
          Berücksichtigt das Signal-zu-Rausch-Leistungsverhältnis (Shannon)
        </td>
      </tr>
    </table>
    <div className="horizontal">
      <img src={einUb} alt="Baud" />
      <ul>
        <li>Baudrate: 1kBaud weil 1 Symbole / Millisek.</li>
        <li>Bit/Symbol: 2</li>
        <li>Bitrate: 2000 Bit/s</li>
        <li>Tragerfrequenz: 4 kHz</li>
      </ul>
    </div>
  </CheatBox>,
  <CheatBox title="Kanalkapazität finden">
    <div>
      Theoretische max. Baudrate: <MathLatex>{`f_s \\leq 2B`}</MathLatex>{" "}
      <p>
        wo:
        <ul>
          <li>B: Bandbreite in Hz</li>
          <li>
            f<sub>s</sub>: max. Baudrate in Baud
          </li>
        </ul>
      </p>
    </div>
    <div className="horizontal">
      <div>
        <strong>
          Finde max. Bitrate R in idealer Übertragungsmedia (Hartley):
        </strong>
        <ol>
          <li>
            Finde f<sub>s</sub>
          </li>
          <li>
            Finde mittlerem Informationsgehalt der Symbole I<sub>s</sub> <br />
            <MathLatex>{`I_s = \\log_2(1 + \\frac{A}{\\Delta V})`}</MathLatex>{" "}
            <br />
            wo:
            <ul>
              <li>A: Amplitude</li>
              <li>
                delta V: Differenz der Spannung zwischen zwei
                aufeinanderfolgenden Signalen
              </li>
            </ul>
          </li>
          <li>
            <MathLatex>{`R \\leq f_s \\cdot I_s`}</MathLatex>
          </li>
        </ol>
      </div>
      <img src={Hartley} alt="Hartley" />
    </div>
    <div>
      <strong>
        Finde max. Kanalkapazität R in realer Übertragungsmedia (Shannon):
      </strong>{" "}
      <br />
      <MathLatex>{`C_s \\leq B \\cdot log_2(1 + \\frac{S}{N})`}</MathLatex>{" "}
      <br />
      wo:
      <ul>
        <li>
          C<sub>s</sub>: Kanalkapazität
        </li>
        <li>B: Bandbreite (Hz)</li>
        <li>S: Signal (W)</li>
        <li>N: Noise (W)</li>
      </ul>
    </div>
  </CheatBox>,
];
