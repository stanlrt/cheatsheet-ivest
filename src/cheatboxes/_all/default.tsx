import { CheatTitle } from "src/react-cheatsheet/CheatTitle";
import { CheatBox } from "src/react-cheatsheet/CheatBox";

export const example = [
  <CheatTitle title="Example" />,
  <CheatBox title="Example">
    <div className="horizontal">
      <table>
        <tr>
          <th>
            Prefix <br /> arg
          </th>
          <th>
            Power of 10 <br /> log<sub>10</sub>(arg)
          </th>
        </tr>
        <tr>
          <td>Tera</td>
          <td>12</td>
        </tr>
        <tr>
          <td>Giga</td>
          <td>9</td>
        </tr>
        <tr>
          <td>Mega</td>
          <td>6</td>
        </tr>
        <tr>
          <td>Kilo</td>
          <td>3</td>
        </tr>
        <tr>
          <td>Deci</td>
          <td>-1</td>
        </tr>
        <tr>
          <td>Centi</td>
          <td>-2</td>
        </tr>
        <tr>
          <td>Milli</td>
          <td>-3</td>
        </tr>
        <tr>
          <td>Micro</td>
          <td>-6</td>
        </tr>
        <tr>
          <td>Nano</td>
          <td>-9</td>
        </tr>
        <tr>
          <td>Pico</td>
          <td>-12</td>
        </tr>
        <tr>
          <td>Femto</td>
          <td>-15</td>
        </tr>
      </table>
      <table>
        <tr>
          <th>
            Power of 2 <br /> log<sub>2</sub>(arg)
          </th>
          <th>
            Result <br /> arg
          </th>
        </tr>
        <tr>
          <td>0</td>
          <td>1</td>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
        </tr>
        <tr>
          <td>2</td>
          <td>4</td>
        </tr>
        <tr>
          <td>3</td>
          <td>8</td>
        </tr>
        <tr>
          <td>4</td>
          <td>16</td>
        </tr>
        <tr>
          <td>5</td>
          <td>32</td>
        </tr>
        <tr>
          <td>6</td>
          <td>64</td>
        </tr>
        <tr>
          <td>7</td>
          <td>128</td>
        </tr>
        <tr>
          <td>8</td>
          <td>256</td>
        </tr>
        <tr>
          <td>9</td>
          <td>512</td>
        </tr>
        <tr>
          <td>10</td>
          <td>1024</td>
        </tr>
      </table>
    </div>
  </CheatBox>,
];
