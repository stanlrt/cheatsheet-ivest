import { CheatBox } from "src/react-cheatsheet/CheatBox";
import { CheatTitle } from "src/react-cheatsheet/CheatTitle";
import { MathLatex } from "src/react-cheatsheet/MathLatex";

export const media = [
  <CheatTitle title="Media" />,
  <CheatBox title="idk">
    <ul>
      <li>Datenrate ↑ ↔ Bandbreite ↑ (Dämpfung fix)</li>
      <li>Dämpfung ↑ ↔ Max Distanz ↓ (Datenrate fix)</li>
      <li>Datenrate ↓ ↔ Max Distanz ↑ (Dämpfung fix)</li>
    </ul>
    <MathLatex>{`Dämpfung \\ A = 10 * log(\\frac{P_1}{P_2}) = 20 * log(\\frac{U_1}{U_2})`}</MathLatex>
    ,
  </CheatBox>,
];
