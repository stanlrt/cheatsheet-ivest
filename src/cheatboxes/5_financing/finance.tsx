import { CheatBox } from "src/react-cheatsheet/CheatBox";
import magic from "./magic.png";
import categories from "./categories.png";
import lifecycle from "./lifecycle.png";
import typesdiag from "./typesdiag.png";
import factoring from "./factoring.png";
import { CheatTitle } from "src/react-cheatsheet/CheatTitle";
import catego from "./catego.png";
import wacc from "./wacc.png";
import capm from "./capm.png";
import beta from "./beta.png";
import betaintr from "./betaintr.png";

export const finanzierung = [
  <CheatTitle title="Finanzierung" />,
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
            <strong>Selbstfinanzierung (Self-Financing):</strong> Beihaltung der
            Gewinne (Retention of profits)
          </li>
          <li>
            <strong>Abschreibungsrückflüssen (Depreciation Cash Flow):</strong>{" "}
            Rückfluss von Vermögen durch Abschreibungen (Cash flow from
            depreciation, i.e. the money that comes back from using assets)
          </li>
        </ul>
      </li>
    </ul>
    <div className="horizontal">
      <img src={typesdiag} alt="typesdiag" />
      <img src={lifecycle} alt="lifecycle" />
    </div>
    <img src={catego} alt="catego" style={{ width: "50%" }} />
  </CheatBox>,
  <CheatBox title="Basics">
    <div>
      <strong>Leverage effekt</strong>Eigenkapitalrentabilität steigt durch
      erhöhten Einsatz von Fremdkapital solange der Fremdkapitalzins tiefer ist
      als die Gesamtkapitalrentabilität
    </div>
    <table
      className="finance-criteria-table"
      style={{ width: "100%", borderCollapse: "collapse", marginTop: "1em" }}
    >
      <thead>
        <tr>
          <th
            style={{
              border: "1px solid #ccc",
              padding: "8px",
              background: "#f5f5f5",
            }}
          >
            Zielkriterien des Unternehmens
            <br />
            <em style={{ fontSize: "0.9em", fontWeight: "normal" }}>
              (Company Objectives)
            </em>
          </th>
          <th
            style={{
              border: "1px solid #ccc",
              padding: "8px",
              background: "#f5f5f5",
            }}
          >
            Stellenwert und Einflussmöglichkeiten im Rahmen der Finanzierung
            <br />
            <em style={{ fontSize: "0.9em", fontWeight: "normal" }}>
              (Importance & Influence in Financing)
            </em>
          </th>
          <th
            style={{
              border: "1px solid #ccc",
              padding: "8px",
              background: "#f5f5f5",
            }}
          >
            Hinweise auf die Ausgestaltung der Kapitalstruktur
            <br />
            <em style={{ fontSize: "0.9em", fontWeight: "normal" }}>
              (Capital Structure Implications)
            </em>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td
            style={{
              border: "1px solid #ccc",
              padding: "8px",
              verticalAlign: "top",
            }}
          >
            <strong>Gewinn, Rentabilität</strong>
            <br />
            <em style={{ fontSize: "0.9em" }}>(Profit, Profitability)</em>
          </td>
          <td
            style={{
              border: "1px solid #ccc",
              padding: "8px",
              verticalAlign: "top",
            }}
          >
            <ul style={{ margin: 0, paddingLeft: "1.2em" }}>
              <li>
                Kostengünstige Kapitalbeschaffung{" "}
                <em>(Cost-effective capital procurement)</em>
              </li>
              <li>
                Minimierung der Gesamtsteuerlast{" "}
                <em>(Minimizing total tax burden)</em>
              </li>
              <li>
                Steigerung der Eigenkapitalrendite{" "}
                <em>(Increasing return on equity)</em>
              </li>
            </ul>
          </td>
          <td
            style={{
              border: "1px solid #ccc",
              padding: "8px",
              verticalAlign: "top",
            }}
          >
            Ausnützen des Financial-Leverage-Effektes
            <br />
            <em style={{ fontSize: "0.9em" }}>
              (Leveraging the financial leverage effect)
            </em>
          </td>
        </tr>
        <tr>
          <td
            style={{
              border: "1px solid #ccc",
              padding: "8px",
              verticalAlign: "top",
            }}
          >
            <strong>Unternehmens- und Anteilswert</strong>
            <br />
            <em style={{ fontSize: "0.9em" }}>(Enterprise & Share Value)</em>
          </td>
          <td
            style={{
              border: "1px solid #ccc",
              padding: "8px",
              verticalAlign: "top",
            }}
          >
            <ul style={{ margin: 0, paddingLeft: "1.2em" }}>
              <li>
                Erhöhung des Firmenwertes <em>(Increasing company value)</em>
              </li>
              <li>
                Aktionärszieleorientierung{" "}
                <em>(Shareholder goal orientation)</em>
              </li>
              <li>
                Shareholder-Value-Maximierung{" "}
                <em>(Shareholder value maximization)</em>
              </li>
            </ul>
          </td>
          <td
            style={{
              border: "1px solid #ccc",
              padding: "8px",
              verticalAlign: "top",
            }}
          >
            Wertsteigerung aus Financial Engineering
            <br />
            <em style={{ fontSize: "0.9em" }}>
              (Value creation through financial engineering)
            </em>
          </td>
        </tr>
        <tr>
          <td
            style={{
              border: "1px solid #ccc",
              padding: "8px",
              verticalAlign: "top",
            }}
          >
            <strong>Wachstum und Unternehmensgröße</strong>
            <br />
            <em style={{ fontSize: "0.9em" }}>(Growth & Company Size)</em>
          </td>
          <td
            style={{
              border: "1px solid #ccc",
              padding: "8px",
              verticalAlign: "top",
            }}
          >
            <ul style={{ margin: 0, paddingLeft: "1.2em" }}>
              <li>
                Expansionsfinanzierung <em>(Expansion financing)</em>
              </li>
              <li>
                Absatz- und Exportfinanzierung{" "}
                <em>(Sales & export financing)</em>
              </li>
              <li>
                Wachstumsmöglichkeiten <em>(Growth opportunities)</em>
              </li>
            </ul>
          </td>
          <td
            style={{
              border: "1px solid #ccc",
              padding: "8px",
              verticalAlign: "top",
            }}
          >
            Abstimmung von Wachstums- und Finanzpolitik
            <br />
            <em style={{ fontSize: "0.9em" }}>
              (Coordination of growth & financial policy)
            </em>
          </td>
        </tr>
        <tr>
          <td
            style={{
              border: "1px solid #ccc",
              padding: "8px",
              verticalAlign: "top",
            }}
          >
            <strong>Liquidität</strong>
            <br />
            <em style={{ fontSize: "0.9em" }}>(Liquidity)</em>
          </td>
          <td
            style={{
              border: "1px solid #ccc",
              padding: "8px",
              verticalAlign: "top",
            }}
          >
            <ul style={{ margin: 0, paddingLeft: "1.2em" }}>
              <li>
                Sicherung der Zahlungsbereitschaft{" "}
                <em>(Ensuring payment readiness)</em>
              </li>
              <li>
                Erhaltung der Bonität <em>(Maintaining creditworthiness)</em>
              </li>
              <li>
                Hüterfunktion der Finanzführung{" "}
                <em>(Guardian function of financial management)</em>
              </li>
            </ul>
          </td>
          <td
            style={{
              border: "1px solid #ccc",
              padding: "8px",
              verticalAlign: "top",
            }}
          >
            Cash-flow-Effekte der Fremd- und Eigenkapitalseite
            <br />
            <em style={{ fontSize: "0.9em" }}>
              (Cash flow effects of debt & equity financing)
            </em>
          </td>
        </tr>
        <tr>
          <td
            style={{
              border: "1px solid #ccc",
              padding: "8px",
              verticalAlign: "top",
            }}
          >
            <strong>Unabhängigkeit</strong>
            <br />
            <em style={{ fontSize: "0.9em" }}>(Independence)</em>
          </td>
          <td
            style={{
              border: "1px solid #ccc",
              padding: "8px",
              verticalAlign: "top",
            }}
          >
            <ul style={{ margin: 0, paddingLeft: "1.2em" }}>
              <li>
                Autonomie gegenüber Dritten{" "}
                <em>(Autonomy from third parties)</em>
              </li>
              <li>
                Schaffung von Liquiditätsreserven{" "}
                <em>(Creating liquidity reserves)</em>
              </li>
              <li>
                Förderung der Innenfinanzierung{" "}
                <em>(Promoting internal financing)</em>
              </li>
            </ul>
          </td>
          <td
            style={{
              border: "1px solid #ccc",
              padding: "8px",
              verticalAlign: "top",
            }}
          >
            Steuerung des Einflusses der Kapitalgeber (Aktionäre, Gläubiger)
            <br />
            <em style={{ fontSize: "0.9em" }}>
              (Controlling the influence of capital providers - shareholders,
              creditors)
            </em>
          </td>
        </tr>
        <tr>
          <td
            style={{
              border: "1px solid #ccc",
              padding: "8px",
              verticalAlign: "top",
            }}
          >
            <strong>Anpassungsfähigkeit</strong>
            <br />
            <em style={{ fontSize: "0.9em" }}>(Adaptability)</em>
          </td>
          <td
            style={{
              border: "1px solid #ccc",
              padding: "8px",
              verticalAlign: "top",
            }}
          >
            <ul style={{ margin: 0, paddingLeft: "1.2em" }}>
              <li>
                Finanzwirtschaftliche Flexibilität{" "}
                <em>(Financial flexibility)</em>
              </li>
              <li>
                Anpassung an interne Veränderungen{" "}
                <em>(Adaptation to internal changes)</em>
              </li>
              <li>
                Reaktion auf Umweltentwicklungen{" "}
                <em>(Response to environmental developments)</em>
              </li>
            </ul>
          </td>
          <td
            style={{
              border: "1px solid #ccc",
              padding: "8px",
              verticalAlign: "top",
            }}
          >
            Flexibilitätsgerechte Wahl der Finanzierungsquellen
            <br />
            <em style={{ fontSize: "0.9em" }}>
              (Flexibility-appropriate choice of financing sources)
            </em>
          </td>
        </tr>
        <tr>
          <td
            style={{
              border: "1px solid #ccc",
              padding: "8px",
              verticalAlign: "top",
            }}
          >
            <strong>Soziale Ziele und Umweltanliegen</strong>
            <br />
            <em style={{ fontSize: "0.9em" }}>
              (Social Goals & Environmental Concerns)
            </em>
          </td>
          <td
            style={{
              border: "1px solid #ccc",
              padding: "8px",
              verticalAlign: "top",
            }}
          >
            <ul style={{ margin: 0, paddingLeft: "1.2em" }}>
              <li>
                Arbeitsplatzsicherung <em>(Job security)</em>
              </li>
              <li>
                Betriebliche Sozialvorsorge <em>(Corporate social welfare)</em>
              </li>
              <li>
                Umweltschutzinstitutionen{" "}
                <em>(Environmental protection institutions)</em>
              </li>
            </ul>
          </td>
          <td
            style={{
              border: "1px solid #ccc",
              padding: "8px",
              verticalAlign: "top",
            }}
          >
            Unternehmenseigner und Eigenkapitaleinsatz
            <br />
            <em style={{ fontSize: "0.9em" }}>
              (Company owners and equity investment)
            </em>
          </td>
        </tr>
        <tr>
          <td
            style={{
              border: "1px solid #ccc",
              padding: "8px",
              verticalAlign: "top",
            }}
          >
            <strong>Image, Prestige</strong>
            <br />
            <em style={{ fontSize: "0.9em" }}>(Image, Prestige)</em>
          </td>
          <td
            style={{
              border: "1px solid #ccc",
              padding: "8px",
              verticalAlign: "top",
            }}
          >
            <ul style={{ margin: 0, paddingLeft: "1.2em" }}>
              <li>
                Image, Ruf des Unternehmens{" "}
                <em>(Company image and reputation)</em>
              </li>
              <li>
                Publizitätspflege, Bilanzoptik{" "}
                <em>(Publicity management, balance sheet optics)</em>
              </li>
              <li>
                Finanzwirtschaftliche Firmenkultur{" "}
                <em>(Financial corporate culture)</em>
              </li>
            </ul>
          </td>
          <td
            style={{
              border: "1px solid #ccc",
              padding: "8px",
              verticalAlign: "top",
            }}
          >
            Publizitätsgerechte Finanzstrukturgestaltung
            <br />
            <em style={{ fontSize: "0.9em" }}>
              (Publicity-appropriate financial structure design)
            </em>
          </td>
        </tr>
        <tr>
          <td
            style={{
              border: "1px solid #ccc",
              padding: "8px",
              verticalAlign: "top",
            }}
          >
            <strong>Persönliche Ziele (der Stakeholder)</strong>
            <br />
            <em style={{ fontSize: "0.9em" }}>
              (Personal Goals of Stakeholders)
            </em>
          </td>
          <td
            style={{
              border: "1px solid #ccc",
              padding: "8px",
              verticalAlign: "top",
            }}
          >
            <ul style={{ margin: 0, paddingLeft: "1.2em" }}>
              <li>
                Finanzielle Eigentümerinteressen{" "}
                <em>(Financial owner interests)</em>
              </li>
              <li>
                Managerinteressen <em>(Manager interests)</em>
              </li>
              <li>
                Fortführung des Unternehmens <em>(Business continuity)</em>
              </li>
            </ul>
          </td>
          <td
            style={{
              border: "1px solid #ccc",
              padding: "8px",
              verticalAlign: "top",
            }}
          >
            Bereitschaft zu Risikoübernahme und persönlicher Beteiligung
            <br />
            <em style={{ fontSize: "0.9em" }}>
              (Willingness to take risks and personal involvement)
            </em>
          </td>
        </tr>
      </tbody>
    </table>
  </CheatBox>,
  <CheatBox title="Innen">
    <h2>
      Aktienkapitalerhöhung
      <br />
      <em style={{ fontSize: "0.9em", fontWeight: "normal" }}>
        (Share Capital Increase)
      </em>
    </h2>
    <ul>
      <li>
        <strong>
          Vorteile <em style={{ fontWeight: "normal" }}>(Advantages)</em>
        </strong>
        <ul>
          <li>
            Keine fixen Zinszahlungen (jedoch Dividenden){" "}
            <em>(No fixed interest payments, but dividends)</em>
          </li>
          <li>
            Kapital steht äusserst langfristig zur Verfügung{" "}
            <em>(Capital available for very long term)</em>
          </li>
          <li>
            Erhöhung des Eigenkapital führt zu Erhöhung der
            Sicherheitskennzahlen{" "}
            <em>(Increase in equity leads to improved safety ratios)</em>
          </li>
          <li>
            Verbesserung der Bonität durch höhere Sicherheit{" "}
            <em>(Improved creditworthiness through higher security)</em>
          </li>
          <li>
            Konditionen des Fremdkapitals werden günstiger{" "}
            <em>(Debt financing conditions become more favorable)</em>
          </li>
        </ul>
      </li>
      <li>
        <strong>
          Nachteile <em style={{ fontWeight: "normal" }}>(Disadvantages)</em>
        </strong>
        <ul>
          <li>
            Rentabilität sinkt <em>(Profitability decreases)</em>
          </li>
          <li>
            Dividendenlast steigt <em>(Dividend burden increases)</em>
          </li>
          <li>
            Zahlung der Dividenden hat keine Auswirkung auf Gewinnsteuer{" "}
            <em>(Dividend payments have no effect on profit tax)</em>
          </li>
        </ul>
      </li>
    </ul>
    ,
    <ul>
      Types:
      <li>
        <strong>Aktienkapitalerhöhung</strong>
        <ul>
          <li>
            Heraufsetzung Nennwert bestehende Aktien (selten){" "}
            <em>(Increase of nominal value of existing shares (rare))</em>
          </li>
          <li>
            Ausgabe neuer Aktien <em>(Issue of new shares)</em>{" "}
          </li>
          <li>
            Ordentliche Kapitalerhöhung: Beschluss durch GV, VR führt durch
            innerhalb 3 Monaten{" "}
            <em>
              (Ordinary capital increase: Decision by GV, VR carries out within
              3 months)
            </em>
          </li>
          <li>
            Bedingte Kapitalerhöhung: Generalversammlung kann Rechte zum Bezug
            von neuen Aktien in Statuten festhalten (Wandel- und Optionsrechte){" "}
            <em>
              (Conditional capital increase: GV can record rights to acquire new
              shares in the articles (conversion and option rights))
            </em>
          </li>
        </ul>
      </li>
    </ul>
    <h2>Going public</h2>
    <ul>
      <li>
        Umwandlung einer privaten AG in eine börsenkotierte AG{" "}
        <em>(Going private im Umkehrfall)</em>
      </li>
      <li>
        Deckt zukünftigen Kapitalbedarf <em>(Covering future capital needs)</em>
      </li>
      <li>
        bisherige Eigentümer können sich zurückziehen{" "}
        <em>(Former owners can withdraw)</em>
      </li>
      <li>
        Teilen des Unternehmerrisikos <em>(Sharing of company risk)</em>
      </li>
      <li>
        einfachere Beteiligung der Mitarbeitenden{" "}
        <em>(Easier involvement of employees)</em>
      </li>
      <li>
        Grundvoraussetzungen für erfolgreiches Going Public:
        <ul>
          <li>
            Qualität und Kontinuität des Managements{" "}
            <em>(Quality and continuity of management)</em>
          </li>
          <li>
            klare Formulierung von Unternehmenszielen und -strategie{" "}
            <em>(Clear formulation of company goals and strategy)</em>
          </li>
          <li>
            gesunde Vermögens- und Kapitalstruktur.{" "}
            <em>(Healthy asset and capital structure)</em>
          </li>
        </ul>
      </li>
    </ul>
    <h2>
      Abschreibungsgegenwerten Kapazitätserweiterungseffekt /
      Lohmann-Ruchti-Effek
    </h2>
    Depreciation is "lost" cash that doesnt actually leave the company. So it
    can be used to refinance better assets, with better yield. Hence increasing
    total capital.
    <h2>Versteckte Selbstfinanzierung</h2>
    Build up secret reserves by: underestimating actives, overestimating
    passives. Controversial practice, bc the goal of Geschäftsergebnis' goal is
    to be transparent.
    <h2>Dividendpolitik</h2>
    <ol>
      <li>Bardividende: Zahlung an Aktionäre</li>
      <li>
        Wertpapierdividende: Gewinn and versteckte Reserven in Aktienkapital
        umzuwandeln
      </li>
      <li>Stockdividende: neue Aktien an Aktionäre ausgeben</li>
      <li>
        Naturaldividende: Produkte an Aktionäre (e.g. jährliche Freikarte Zoo)
      </li>
    </ol>
  </CheatBox>,
  <CheatBox title="Aussen: kurzfristig">
    Beteiligung (multiple) oder Kredit
    <ul>
      Vorteile:
      <li>
        Elastizität des Gesamtkapitals: Aufnahme oder Rückzahlung von
        Fremdkapital kann flexibel an Kapitalbedarf angepasst werden
      </li>
      <li>Fremdkapitalzins führt zu reduzierter Steuerlast</li>
      <li>Schnelle Umsetzung möglich</li>
      <li>
        Positiver Leverage-Effekt (Eigenkapitalrentabilität steigt durch
        erhöhten Einsatz von Fremdkapital solange der Fremdkapitalzins tiefer
        ist als die Gesamtkapitalrentabilität)
      </li>
      <ul></ul>
      Nachteile:
      <li>Sicherheit sinkt zu Gunsten der Rentabilität</li>
      <li>Bonität sinkt </li>
      <li>Künftiges Fremdkapital wird teurer</li>
    </ul>
    <h2>Kreditfinanzierung</h2>
    <div>
      Von Dritten zur Nutzung für eine bestimmte Zeitdauer abgegeben Anspruch
      auf Zins und Rückzahlung auf fixen Termin. Entstehungsgrund,
      Schuldesbretrag, Verzinsung, Rückzahlungszeitpunkt
    </div>
    <h2>Lieferantenkredite, Kundenkredite, Bankkredite</h2>
    <h2>Factoring</h2>
    <img src={factoring} alt="factoring" />
  </CheatBox>,
  <CheatBox title="Aussen: langfristig">
    <h2>Darlehen</h2>
    Privat oder business Quelle. Ohne Vertrag: Rückzahlung innerhalb 6 Wochen.
    <h2>Kassenobligationsd</h2>
    Obligation, 1000 oder 5000 Stückelung. 3-8 Jahren. Zins: durch
    Marktausrichtung und Laufzeit festgelegt. Einfach, anpassbar.
    <h2>Hypothekardarlehen</h2>
    <h2>Wandelanleihen (Mezzanine)</h2>
    <ul>
      <li>Vorteile und Eigenschaften wie eine gewöhnliche Obligation</li>
      <li>
        Zusätzliches Recht, während einer Zeitspanne oder einem Zeitpunkt, in
        vordefiniertem Verhältnis, eine Obligation in Beteiligungspapiere
        umzuwandeln
      </li>
      <li>
        Bei Ausgabe der Anleihe reines Fremdkapital doch nach Umwandlung wird
        aus FK -{">"} EK (Aktionär)
      </li>
      <li>Vorteil: Bei Ausgabe tieferer Zins zahlbar, da Wahlrech</li>
    </ul>
    <h2>Leasing</h2>
    Nutzen einer Sache gegen periodische Zahlung, für bestimmte oder unbestimmte
    Zeit.
    <ul>
      <li>Finanzierungsleasing: langfristig, unkundbar, Ziel ist kaufen</li>
      <li>Operatives Leasing: kurzfristig, kundbar, 1-12 Monate</li>
    </ul>
  </CheatBox>,
  <CheatBox title="WACC & CAPM">
    <div>
      <strong>Cost of Capital (Kapitalkosten):</strong> The Rendite (return)
      that a company must offer to its Kapitalgebern (capital providers, i.e.,
      investors and lenders) to persuade them to provide their capital. <br />
      Useful for: valuation (Unternehmensbewertung), Investtitionsanalyse,
      Wertmanagement, IFRS Impairment Tests
    </div>
    <div>
      <strong>IFRS Impairment Tests:</strong> each year, determine if the book
      value of assets still reflects the market value. If not, add Abscreibungen
      (amort.).
    </div>
    <div>
      <strong>Opportunity Cost:</strong> This required return must be at least
      as high as the return investors could get from alternative investments
      with similar Risikocharkteristiken (risk characteristics)
    </div>
    <div>
      <strong>Risk-Free Rate:</strong> At a bare minimum, investors expect a
      return that is risikofrei (risk-free). In Switzerland, the benchmark for
      this is the return on Bundesobligationen (federal government bonds).
    </div>
    <div>
      <strong>Risk Premium:</strong> For any investment riskier than a
      government bond, investors demand an additional return called a
      Risikoprämie (risk premium). The higher the investment's risk, the higher
      the required return.
    </div>
    <div>
      <strong>
        Diskontsatz k<sub>EK</sub> is the Required Retrun Rate for the investor
        (Eigenkapitalgeber):
      </strong>{" "}
      Minimum profit expected to make the investment worth it. Compensation for
      the risk. "If I give my money to this company, which is a risky venture, I
      need to earn at least 12% per year."
    </div>
    <div>
      <strong>
        Diskontsatz k<sub>EK</sub> is the cost of equity (Eigenkapitalkosten):
      </strong>
      It's a calculatory cost (no actual payment). "In order to attract and keep
      investors, we must generate a performance that provides them with their
      expected 12% return. This 12% is the 'price' we pay for using their
      capital."{" "}
    </div>
  </CheatBox>,
  <CheatBox title="WACC">
    <div>
      Used to find the DCF discount rate (i) (cost of debt) for projects
      financed by the whole company
    </div>
    <div>
      Weighted Average Cost of Capital. The average cost of capital for a
      company, weighted by the proportion of each type of capital in the
      company's capital structure.
    </div>
    <h2>WACC Formel</h2>
    <img src={wacc} alt="wacc" style={{ width: "50%" }} />
    <span style={{ width: "50%" }}>
      Tax-Shield: interests on foreign capital is tax deductible
    </span>
  </CheatBox>,
  <CheatBox title="CAPM">
    <div>Used to find the cost of equity</div>
    <div>
      Compensate investor for the time value and the risk of the onvestment.
    </div>
    <h2>CAPM Formel</h2>
    <div className="horizontal">
      <img src={capm} alt="capm" />
      <ul style={{ width: "50%" }}>
        <li>
          r<sub>M</sub> is the expected return based on past 20 years
        </li>
        <li>
          Beta: systematische Risiko einer Aktie. Zwischen 0.5 und 2 gewöhnlich
        </li>
      </ul>
    </div>
    <div className="horizontal">
      <img src={beta} alt="beta" />
      <img src={betaintr} alt="betaintr" />
    </div>
  </CheatBox>,
];
