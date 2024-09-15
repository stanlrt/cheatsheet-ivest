import { CheatBox } from "src/react-cheatsheet/CheatBox";
import Layers from "./Layers.png";
import SchichtKom from "./SchichtKom.png";
import SchichtModel from "./SchichtModel.png";

export const osi = [
  <CheatBox title="OSI">
    <div className="horizontal">
      <img src={SchichtKom} />
      <img src={SchichtModel} />
    </div>
    <div
      className="horizontal"
      style={{
        width: "100%",
      }}
    >
      <img
        src={Layers}
        style={{
          width: "80%",
          height: "auto",
        }}
      />
      <div>
        Schicht N:
        <ul>
          <li>
            kann nur mit Schichten von Niveau N kommunizieren (dank Protokoll)
          </li>
          <li>bietet Schichte N+1 Dienste an (dank Interface)</li>
          <li>verwendet Dienste von Schichte N-1 (dank Interface)</li>
        </ul>
      </div>
    </div>
  </CheatBox>,
];
