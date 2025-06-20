import { CheatBox } from "src/react-cheatsheet/CheatBox";
import { CheatTitle } from "src/react-cheatsheet/CheatTitle";
import kkf from "./kkf.png";
import cstable from "./cstable.png";
import levered from "./levered.png";
import unlevered from "./unlevered.png";
import leveredpeer from "./leveredpeer.png";

export default [
  <CheatTitle title="Rating" />,
  <CheatBox>
    <div>
      <h2>
        Find k<sub>kf for a debt over 10 years</sub>
      </h2>
      <div className="horizontal">
        <img src={kkf} alt="kkf" />
        <ul>
          Where:
          <li>RF: Risk-Free Rate (Risikofreie Rendite)</li>
          <li>CS: credit spread (Kreditspread)</li>
        </ul>
        <ol>
          <li>
            Find the risk-free rate (risk of a Swiss gov bond in past 10 years)
          </li>
          <li>Find the credit spread over 10 years</li>
        </ol>
      </div>
    </div>
    <h2>Find CS</h2>
    Economic boom -{">"} "CS" down
    <div className="horizontal">
      <ol>
        For each debt:
        <li>Find the rating</li>
        <li>Find the delay to repayment (maturity)</li>
        <li>Find the spread in the table</li>
      </ol>
      <img src={cstable} alt="cstable" />
    </div>
  </CheatBox>,
  <CheatBox>
    <h2>Beta</h2>
    <div className="horizontal">
      <div>
        Levered: used for CAPM. Risk of assets+debt.
        <img src={levered} alt="levered" style={{ width: "100%" }} />
      </div>
      <div>
        Unlevered: used for benchmarking/comparison. Risk of assets.
        <img src={unlevered} alt="unlevered" style={{ width: "100%" }} />
      </div>
    </div>
    <div className="horizontal">
      <ol>
        <h3>Find unlevered using peer:</h3>
        <li>
          Find Peers: Identify publicly traded companies ("peer group") whose
          main business is very similar to the project you want to value.
        </li>
        <li>
          De-Lever: Take the publicly available levered Beta of each peer
          company and use the formula to strip out the effect of their specific
          debt, calculating their unlevered Beta.
        </li>
        <li>
          Benchmark: Average the unlevered Betas of the peer group to get a
          reliable measure of the pure business risk for that specific activity.
        </li>
        <li>
          Re-Lever: Take this benchmark unlevered Beta and apply your project's
          or company's specific capital structure (Fremdkapital (Debt) /
          Eigenkapital (Equity) ratio) to it. This gives you the appropriate
          levered Beta for your project.
        </li>
      </ol>
      <img src={leveredpeer} alt="leveredpeer" />
    </div>
  </CheatBox>,
];
