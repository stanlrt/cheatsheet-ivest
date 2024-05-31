import { CheatBox } from "src/react-cheatsheet/CheatBox";
import { CheatTitle } from "src/react-cheatsheet/CheatTitle";
import Asynch from "./asynch.png";
import TaktRueck from "./taktru.png";
import Synch from "./synch.png";
import { MathLatex } from "src/react-cheatsheet/MathLatex";

export const physical = [
  <CheatTitle title="Physical" />,
  <CheatBox title="Theorie">
    <table>
      <thead>
        <tr>
          <th>Übertragung</th>
          <th>Karakteristik</th>
          <th>+</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Seriell</td>
          <td>
            <ul>
              <li>Dominierend</li>
              <li>Einzelne Bits zeitlich gestaffelt</li>
              <li>Asynchrones oder synchrones Verfahren</li>
            </ul>
          </td>
          <td>Eine Leitung</td>
        </tr>
        <tr>
          <td>Parallel</td>
          <td>
            <ul>
              <li>Selten</li>
              <li>Mehrere Bits gleichzeitig über mehrere Leitungen</li>
            </ul>
          </td>
          <td>Schneller</td>
        </tr>
      </tbody>
    </table>
  </CheatBox>,
  <CheatBox title="Seriell asynchron">
    <div className="horizontal">
      <img src={Asynch} alt="Asynch" />
      <ul>
        <li>S und E haben unabhängige Clocks</li>
        <li>Synchronisation vor jedes Frame dank Start+Stop-Bits</li>
        <li>Start-Bit = 0</li>
        <li>
          8 Daten-Bits <strong>(LSB → MSB)</strong>: hier 0011 1001 (MSB → LSB)
        </li>
        <li>Parity-Bit für Fehlererkennung (optionell)</li>
        <li>
          Stop-Bits = <strong>111</strong>
        </li>
      </ul>
      <span>
        <MathLatex>{`T_{bit} = \\frac{1}{Baudrate}`}</MathLatex> wie viele Takte
        pro Bit
      </span>
    </div>
    <div className="horizontal">
      <div style={{ width: "50%" }}>
        <strong>In Diagram / Gegeben:</strong>
        <ul>
          <li>(Baud Rate (B): 9600 bps)</li>
          <li>Start Bit: 1</li>
          <li>Data Bits: 8</li>
          <li>Parity Bit: 1</li>
          <li>Stop Bits: 3</li>
          <li>Clock Genauigkeit: ±50 ppm</li>
        </ul>
      </div>
      <div>
        <strong>Clock drift berechnen</strong>
        <ol>
          <li>
            Framegrösse: <MathLatex>{`1+8+1+3= 12`}</MathLatex> bits <br />
          </li>
          <li>
            ±50ppm → maximal 100 ppm Abstand zwischen S und E <br />
            <MathLatex>{`100 \\cdot 10^{-6} = 10^{-4} \\ \\frac{Tbit}{Bit}`}</MathLatex>{" "}
            Drift pro Bit
          </li>
          <li>
            <MathLatex>{`12 \\cdot 10^{-4} \\ Tbit`}</MathLatex> Frame Drift.{" "}
            <br />
            <MathLatex>{`|12 \\ Tbit \\cdot 10^{-4}| \\leq 0.5`}</MathLatex>,
            Takt-Rückgewinung möglich
          </li>
          <li>
            <MathLatex>{`1 Tbit = 1/9600 = 104.17 \\ μs`}</MathLatex> <br />
            <MathLatex>{`104.17 \\ μs \\cdot 12 \\cdot 10^{-4} = 0.10417 \\ μs`}</MathLatex>
          </li>
        </ol>
      </div>
    </div>
  </CheatBox>,
  <CheatBox title="Seriell synchron">
    <div className="horizontal">
      <div>
        <ul>
          <li>S sendet nicht nur Daten, sondern auch Clock (Takt)</li>
          <li>E macht Taktrückgewinnnung um sein Clock zu synchronisieren</li>
        </ul>
        <img src={TaktRueck} style={{ width: "100%" }} />
      </div>
      <img src={Synch} alt="Synch" />
    </div>
  </CheatBox>,
];
