import { CheatBox } from "src/react-cheatsheet/CheatBox";
import FullPath from "./FullPath.png";

export const protocols = [
  <CheatBox>
    <img src={FullPath} />
    <table>
      <tbody>
        <tr>
          <th>
            <strong>Protocol</strong>
          </th>
          <th>Verbindungstyp</th>
          <th>Zuverlässigkeit</th>
          <th>Verkehrsbeziehung</th>
        </tr>
        <tr>
          <td>
            <strong>Ethernet</strong>
          </td>
          <td>Verbindungsorientiert</td>
          <td>Zuverlässig</td>
          <td>Vollduplex</td>
        </tr>
        <tr>
          <td>
            <strong>TCP</strong>
          </td>
          <td>Verbindungsorientiert</td>
          <td>Zuverlässig</td>
          <td>Vollduplex</td>
        </tr>
        <tr>
          <td>
            <strong>UDP</strong>
          </td>
          <td>Verbindungslos</td>
          <td>Unzuverlässig</td>
          <td>Halbduplex</td>
        </tr>
        <tr>
          <td>
            <strong>IP</strong>
          </td>
          <td>Verbindungslos</td>
          <td>Unzuverlässig</td>
          <td>Halbduplex</td>
        </tr>
      </tbody>
    </table>
    <div>
      <strong>Multiplexing</strong>: Gathering data from multiple application
      processes of the sender, enveloping that data with a header, and sending
      them as a whole to the intended receiver
      <br />
      <strong>Demultiplexing</strong>: Receiving the data and extracting the
      data from the header to identify the application process
    </div>
  </CheatBox>,
];
