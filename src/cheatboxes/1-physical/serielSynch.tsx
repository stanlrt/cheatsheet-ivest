import { CheatBox } from "src/react-cheatsheet/CheatBox";
import Synch from "./synch.png";
import TaktRueck from "./taktru.png";
import TaktRueckDet from "./taktrudet.png";
import ami from "./ami.png";
import pam3Signal from "./pam3Signal.png";
import pam3Table from "./pam3Table.png";

export const serielSynch = [
  <CheatBox title="Seriell synchron">
    <div className="horizontal">
      <div>
        <ul>
          <li>
            S sendet nicht nur Daten, sondern auch Clock (Takt), in 2 oder 1
            Signal
          </li>
          <li>E macht Taktrückgewinnnung um sein Clock zu synchronisieren</li>
        </ul>
      </div>
      <img src={Synch} alt="Synch" />
    </div>
    <div className="horizontal">
      <img src={TaktRueckDet} />
      <img src={TaktRueck} />
    </div>
  </CheatBox>,
  <CheatBox title="Seriell Codierung">
    <div>
      <div className="horizontal">
        <p>
          <h4>AMI</h4>
          <strong>Probleme:</strong> 3 Werten → nicht binär, lange 0-Folge →
          keine Taktrück.
        </p>
        <img src={ami} />
      </div>
      <div className="horizontal">
        <p>
          <h4>PAM3 (10BASE-T1L)</h4>
          4B3T-Codierung: Codiere 4 Bit Werten (0,1) (→ 16 mögliche Symbole i.e.
          HEX) mit 3 ternäre Werten (-,0,+) (→ 27 mögliche Symbole) und Acc. DC
          Offset
          <ul>
            <li>0111: -0+ egal was DCOffset ist, dann DCOffset+=0</li>
            <li>1100: -+- weil DCOffset = 2, dann DCOffset-=1</li>
            <li>1100: +++ weil DCOffset = 1, dann DCOffset+=3</li>
            <li>0011: --0 weil DCOffset = 4, dann DCOffset-=2</li>
          </ul>
        </p>
        <div className="horizontal">
          <img src={pam3Signal} />
          <img src={pam3Table} />
        </div>
      </div>
    </div>
  </CheatBox>,
];
