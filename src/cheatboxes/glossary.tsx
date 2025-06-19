import { CheatBox } from "src/react-cheatsheet/CheatBox";
import { CheatTitle } from "src/react-cheatsheet/CheatTitle";
import flussig from "./flussig.png";
/**
 * Type definition for glossary entries
 */
type GlossaryEntry = {
  wort: string;
  en: string;
  definition: string;
  beispiele?: string;
};

/**
 * Glossary entries data - add new entries here and they will be automatically sorted
 */
const glossaryEntries: GlossaryEntry[] = [
  {
    wort: "Wertberichtigungen",
    en: "Value Adjustments",
    definition:
      "Reductions in the carrying value of assets to reflect their current market value or recoverable amount",
  },
  {
    wort: "Beteiligungen",
    en: "Investments",
    definition:
      "Equity stakes in other companies that provide significant influence or control over their operations",
  },
  {
    wort: "L+L",
    en: "L+L",
    definition: "Goods and Services",
  },
  {
    wort: "Forderung",
    en: "Receivable",
    definition:
      "A legal right to receive payment from customers or other parties for goods or services provided",
  },
  {
    wort: "Verbindlichkeit",
    en: "Liability",
    definition:
      "A company's legal financial debts or obligations that arise during business operations",
  },
  {
    wort: "Darlehen",
    en: "Loan",
    definition:
      "A financial arrangement where one party provides funds to another with the expectation of repayment with interest",
  },
  {
    wort: "Schuldverschreibung",
    en: "Bond",
    definition:
      "A debt security issued by corporations or governments that pays fixed interest and returns principal at maturity",
  },
  {
    wort: "ARA (Aktive Rechnungsabgrenzung)",
    en: "Prepaid Expenses",
    definition:
      "Expenses that have been paid in advance but relate to future periods, recorded as assets until the benefit is received",
  },
  {
    wort: "Ertrag",
    en: "Revenue",
    definition:
      "Income earned from business activities, such as sales of goods or services",
    beispiele: "Sales revenue, service fees, rental income",
  },
  {
    wort: "Aufwand",
    en: "Expense",
    definition:
      "Costs incurred in the process of generating revenue or maintaining business operations",
    beispiele: "Salaries, rent, utilities, materials",
  },
  {
    wort: "Gewinn",
    en: "Profit",
    definition:
      "The financial gain when revenue exceeds expenses over a specific period",
    beispiele: "Net profit, operating profit, gross profit",
  },
  {
    wort: "Verlust",
    en: "Loss",
    definition:
      "The financial deficit when expenses exceed revenue over a specific period",
    beispiele: "Operating loss, net loss",
  },
  {
    wort: "Abschreibung",
    en: "Depreciation",
    definition:
      "The systematic allocation of the cost of a tangible asset over its useful life",
    beispiele: "Building depreciation, equipment depreciation",
  },
  {
    wort: "Amortisation",
    en: "Amortization",
    definition:
      "The systematic allocation of the cost of an INtangible asset over its useful life",
    beispiele: "Patent amortization, goodwill amortization",
  },
  {
    wort: "Rückstellung",
    en: "Provision",
    definition:
      "A liability of uncertain timing or amount, set aside for future obligations",
    beispiele: "Warranty provisions, restructuring provisions",
  },
  {
    wort: "Reserve",
    en: "Reserve",
    definition:
      "Funds set aside from profits for specific future purposes or contingencies",
    beispiele: "Legal reserves, voluntary reserves",
  },
  {
    wort: "Kapital",
    en: "Capital",
    definition:
      "Financial resources used to fund business operations and growth",
    beispiele: "Equity capital, debt capital, working capital",
  },
  {
    wort: "Bilanz",
    en: "Balance Sheet",
    definition:
      "A financial statement showing a company's assets, liabilities, and equity at a specific point in time",
    beispiele: "Annual balance sheet, quarterly balance sheet",
  },
  {
    wort: "GuV",
    en: "Income Statement",
    definition:
      "A financial statement showing a company's revenues, expenses, and profits over a period",
    beispiele: "Annual income statement, quarterly income statement",
  },
  {
    wort: "Cashflow",
    en: "Cash Flow",
    definition:
      "The movement of money in and out of a business over a specific period",
    beispiele: "Operating cash flow, investing cash flow, financing cash flow",
  },
  {
    wort: "Liquidität",
    en: "Liquidity",
    definition:
      "The ability of a company to meet its short-term financial obligations",
    beispiele: "Current ratio, quick ratio, cash ratio",
  },
  {
    wort: "Rentabilität",
    en: "Profitability",
    definition:
      "The ability of a company to generate profit relative to its resources",
    beispiele: "Return on equity (ROE), return on assets (ROA)",
  },
  {
    wort: "Stille Reserven",
    en: "Hidden Reserves",
    definition:
      "Undisclosed reserves created by undervaluing assets or overvaluing liabilities",
    beispiele: "Undervalued real estate, undervalued inventory",
  },
  {
    wort: "Stille Lasten",
    en: "Hidden Liabilities",
    definition:
      "Undisclosed obligations or potential future expenses not shown in the balance sheet",
    beispiele: "Environmental liabilities, pending lawsuits",
  },
  {
    wort: "Fremdkapital",
    en: "Debt Capital",
    definition:
      "Capital raised through borrowing that must be repaid with interest",
    beispiele: "Bank loans, bonds, trade payables",
  },
  {
    wort: "Eigenkapital",
    en: "Equity Capital",
    definition:
      "Capital contributed by owners or generated through business operations",
    beispiele: "Share capital, retained earnings, capital reserves",
  },
  {
    wort: "Anlagevermögen",
    en: "Fixed Assets",
    definition:
      "Long-term assets used in business operations that are not intended for resale",
    beispiele: "Buildings, machinery, vehicles",
  },
  {
    wort: "Umlaufvermögen",
    en: "Current Assets",
    definition:
      "Short-term assets that are expected to be converted to cash within one year",
    beispiele: "Cash, accounts receivable, inventory",
  },
  {
    wort: "Kurzfristige Verbindlichkeiten",
    en: "Current Liabilities",
    definition: "Debts and obligations due within one year",
    beispiele: "Accounts payable, short-term loans, accrued expenses",
  },
  {
    wort: "Langfristige Verbindlichkeiten",
    en: "Long-term Liabilities",
    definition: "Debts and obligations due after one year",
    beispiele: "Long-term loans, bonds, pension obligations",
  },
  {
    wort: "Wertschriften",
    en: "Securities",
    definition: "Financial instruments that represent ownership or debt",
    beispiele: "Stocks, bonds, mutual funds",
  },
  {
    wort: "Deckungsbeitrag",
    en: "Contribution Margin",
    definition:
      "The amount remaining from sales revenue after deducting variable costs",
    beispiele: "Product contribution margin, service contribution margin",
  },
  {
    wort: "Fixkosten",
    en: "Fixed Costs",
    definition: "Costs that remain constant regardless of production volume",
    beispiele: "Rent, salaries, insurance",
  },
  {
    wort: "Variable Kosten",
    en: "Variable Costs",
    definition: "Costs that change in proportion to production volume",
    beispiele: "Raw materials, direct labor, packaging",
  },
  {
    wort: "Gewinnmarge",
    en: "Profit Margin",
    definition:
      "The percentage of revenue that remains as profit after expenses",
    beispiele: "Gross margin, operating margin, net margin",
  },
  {
    wort: "Umsatz",
    en: "Revenue",
    definition:
      "Total income from business activities before deducting expenses",
    beispiele: "Sales revenue, service revenue",
  },
  {
    wort: "Kosten",
    en: "Costs",
    definition:
      "Expenses incurred in the production and sale of goods or services",
    beispiele: "Production costs, marketing costs, administrative costs",
  },
  {
    wort: "Buchwert",
    en: "Book Value",
    definition: "The value of an asset as shown in the company's books",
    beispiele: "Book value of equipment, book value of investments",
  },
  {
    wort: "Marktwert",
    en: "Market Value",
    definition: "The current value of an asset in the market",
    beispiele: "Market value of shares, market value of real estate",
  },
  {
    wort: "Anschaffungskosten",
    en: "Acquisition Costs",
    definition:
      "The total cost of acquiring an asset, including all related expenses",
    beispiele: "Purchase price, transportation costs, installation costs",
  },
  {
    wort: "Herstellungskosten",
    en: "Production Costs",
    definition: "The total cost of manufacturing a product",
    beispiele: "Direct materials, direct labor, manufacturing overhead",
  },
  {
    wort: "Rücklagen",
    en: "Reserves",
    definition: "Funds set aside for specific purposes or contingencies",
    beispiele: "Legal reserves, voluntary reserves, special reserves",
  },
  {
    wort: "Rückstellungen",
    en: "Provisions",
    definition: "Liabilities of uncertain timing or amount",
    beispiele:
      "Warranty provisions, restructuring provisions, pension provisions",
  },
  {
    wort: "Bilanzgewinn",
    en: "Retained Earnings",
    definition: "The portion of net income not distributed as dividends",
    beispiele: "Accumulated profits, undistributed profits",
  },
  {
    wort: "Bilanzverlust",
    en: "Accumulated Loss",
    definition: "The portion of net loss not covered by reserves",
    beispiele: "Uncovered losses, accumulated deficits",
  },
  {
    wort: "Liegenschaft",
    en: "Property",
    definition: "Real estate owned by a company",
    beispiele: "Buildings, land, equipment",
  },
  {
    wort: "Giralgeld",
    en: "Book Money",
    definition:
      "Electronic money that exists only as accounting entries in bank records",
    beispiele: "Bank deposits, electronic transfers, digital payments",
  },
  {
    wort: "Sichtguthaben",
    en: "Demand Deposit",
    definition:
      "Bank account balances that can be accessed on demand without any advance notice",
    beispiele: "Checking accounts, current accounts",
  },
  {
    wort: "Geldmarkt",
    en: "Money Market",
    definition:
      "A segment of the financial market where short-term debt instruments are traded",
    beispiele: "Treasury bills, commercial paper, certificates of deposit",
  },
  {
    wort: "Kapitalmarkt",
    en: "Capital Market",
    definition:
      "A segment of the financial market where long-term debt and equity securities are traded",
    beispiele: "Stocks, bonds, debentures",
  },
  {
    wort: "Objektfinanzierung",
    en: "Asset Financing",
    definition:
      "A type of financing where a company uses its assets as collateral to secure a loan",
    beispiele: "Equipment financing, vehicle financing, real estate financing",
  },
  {
    wort: "Unternehmensfinanzierung",
    en: "Corporate Financing",
    definition:
      "The process of raising capital for a company through various financial instruments",
    beispiele: "Equity financing, debt financing, hybrid financing",
  },
  {
    wort: "Bestandgrösse",
    en: "Inventory Size",
    definition:
      "The total value of a company's inventory, including raw materials, work-in-progress, and finished goods",
    beispiele: "Inventory value, inventory turnover",
  },
  {
    wort: "Vorgang",
    en: "Process",
    definition:
      "A series of steps or actions that are performed to achieve a specific goal",
    beispiele: "Production process, sales process, marketing process",
  },
  {
    wort: "Bonität",
    en: "Creditworthiness",
    definition:
      "The ability of a company to repay its debts and meet its financial obligations",
    beispiele: "Credit rating, credit score, credit history",
  },
  {
    wort: "Delkredere",
    en: "Del Credere",
    definition:
      "A guarantee given by a factor or agent to a principal that the debtor will pay the debt, with the factor assuming the risk of non-payment",
    beispiele: "Factoring with del credere, trade credit insurance",
  },
  {
    wort: "Einlage",
    en: "Deposit",
    definition:
      "The transfer of money (bare deposit) or goods (goods deposit) from the private assets of a business owner to their sole proprietorship",
    beispiele: "Bare deposit, goods deposit",
  },
  {
    wort: "Rendite",
    en: "Yield",
    definition:
      "The return on an investment, expressed as a percentage of the initial investment",
    beispiele: "Yield on investment, yield on equity, yield on assets",
  },
  {
    wort: "Leverage",
    en: "Leverage",
    definition:
      "The use of debt to increase the potential return on an investment",
    beispiele: "Leverage ratio, debt-to-equity ratio, financial leverage",
  },
];

/**
 * Sorts glossary entries alphabetically by the "wort" field
 */
function sortGlossaryEntries(entries: GlossaryEntry[]): GlossaryEntry[] {
  return [...entries].sort((a, b) => a.wort.localeCompare(b.wort));
}

/**
 * Chunks an array into smaller arrays of specified size
 */
function chunkArray<T>(array: T[], chunkSize: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
}

/**
 * Renders a single glossary table chunk
 */
function renderGlossaryTableChunk(entries: GlossaryEntry[]) {
  return (
    <table>
      <thead>
        <tr>
          <th>Wort</th>
          <th>EN</th>
          <th>Definition</th>
          <th>Beispiele</th>
        </tr>
      </thead>
      <tbody>
        {entries.map((entry, index) => (
          <tr key={`${entry.wort}-${index}`}>
            <td>{entry.wort}</td>
            <td>{entry.en}</td>
            <td>{entry.definition}</td>
            <td>{entry.beispiele}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/**
 * Creates multiple CheatBox components with glossary table chunks
 */
function createGlossaryCheatBoxes(entries: GlossaryEntry[]) {
  const sortedEntries = sortGlossaryEntries(entries);
  const chunks = chunkArray(sortedEntries, 10);

  const cheatBoxes = chunks.map((chunk, chunkIndex) => (
    <CheatBox key={`glossary-chunk-${chunkIndex}`} style={{ padding: "0px" }}>
      {renderGlossaryTableChunk(chunk)}
    </CheatBox>
  ));

  return [
    <CheatTitle title="Glossar" />,
    <img src={flussig} alt="Glossar" />,
    ...cheatBoxes,
  ];
}

export const glossary = createGlossaryCheatBoxes(glossaryEntries);
