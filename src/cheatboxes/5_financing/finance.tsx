import { CheatBox } from "src/react-cheatsheet/CheatBox";
import magic from "./magic.png";
import categories from "./categories.png";

export const finanzierung = [
  <CheatBox title="Finanzierung">
    <div className="horizontal">
      <img src={magic} alt="Finanzierung" />
      <img src={categories} alt="Finanzierung" />
    </div>
    <ul>
      <li>
        <strong>Kapitalzuführung (Capital Injection):</strong> Bilanzorientierte
        Betrachtungsweise (Balance sheet-oriented perspective), Auswirkung auf
        Bilanzsumme (Affects balance sheet total)
      </li>
      <li>
        <strong>Vermögensverflüssigung (Asset Liquidation):</strong>{" "}
        Liquiditätsorientierte Betrachtungsweise (Liquidity-oriented
        perspective), keine Auswirkung auf Liquidität (No effect on liquidity)
      </li>
      <li>
        Aussen (External):
        <ul>
          <li>
            <strong>Kreditfinanzierung (Debt Financing):</strong> Fremdkapital
            für befristet Dauer (Borrowed capital for a limited period)
          </li>
          <li>
            <strong>Beteiligungsfinanzierung (Equity Financing):</strong>{" "}
            Eigenkapital durch Eigentümer (Equity from owners)
          </li>
          <li>
            <strong>Vermögensverflüssigung (Asset Liquidation):</strong> Mach
            Vermögen flüssig (Make assets liquid)
          </li>
          <li>
            <strong>Mezzanine Finanzierung (Mezzanine Financing):</strong>{" "}
            hybride Finanzierung (Eigen- und Fremdkapital) (Hybrid financing:
            equity and debt)
          </li>
        </ul>
      </li>
      <li>
        Innen:
        <ul>
          <li>
            <strong>Rückstellungsbildung (Provision Formation):</strong> The
            company puts money aside for possible future costs, like repairs
            under warranty or employee pensions. This means keeping some profits
            in the business instead of paying them out, so the company is ready
            to pay these costs later.
          </li>
          <li>
            <strong>Beteiligungsfinanzierung:</strong> Eigenkapital durch
            Eigentümer
          </li>
          <li>
            <strong>Vermögensverflüssigung:</strong> Mach Vermögen flüssig
          </li>
          <li>
            <strong>Mezzanine Finanzierung:</strong> hybride Finanzierung
            (Eigen- und Fremdkapital)
          </li>
        </ul>
      </li>
    </ul>
  </CheatBox>,
];
