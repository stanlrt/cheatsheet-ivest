import { CheatBox } from "src/react-cheatsheet/CheatBox";

export const udpTcp = [
  <CheatBox title="UDP&TCP">
    <table>
      <tbody>
        <tr>
          <th>Port-Typ</th>
          <th>Bereich</th>
          <th>Info</th>
        </tr>
        <tr>
          <td>Well-known</td>
          <td>1 - 1'023</td>
          <td>
            Fur UDP & TCP reserviert, können nur für die vorgesehenen
            Anwendungen verwendet werden
          </td>
        </tr>
        <tr>
          <td>Registered</td>
          <td>1'024 - 49'151</td>
          <td>Reservierter Bereich für herstellerspezifische Applikationen</td>
        </tr>
        <tr>
          <td>Dynamic/Private</td>
          <td>49'152 bis 65'536</td>
          <td>können nach Belieben verwendet werden</td>
        </tr>
      </tbody>
    </table>
  </CheatBox>,
];
