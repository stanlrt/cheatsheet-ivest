import { CheatBox } from "src/react-cheatsheet/CheatBox";
import topo from "./topo.png";
import bsp1 from "./bsp1.png";
import taggedFrame from "./taggedFrame.png";
import prio from "./prio.png";
import lanChar from "./lanChar.png";

export const vlan = [
  <CheatBox title="VLAN">
    <div className="horizontal">
      <div>
        <p>
          Trunk links knnen Frames an alle VLANs weitergeleiten → Frames mssen
          tagged sein.
        </p>
        <p>
          Access links knnen Frames nur an eine VLAN weitergeleiten → Frames
          müssen nicht tagged sein.
        </p>
      </div>
      <img src={topo} />
    </div>
    <div className="horizontal">
      <img src={bsp1} style={{ width: "40%" }} />
      <div>
        Egress Switch 1
        <table>
          <tr>
            <th>VLAN Name</th>
            <th>Port 1</th>
            <th>Port 2</th>
            <th>Port 3</th>
            <th>Port 4</th>
          </tr>
          <tr>
            <td>default</td>
            <td>-</td>
            <td>-</td>
            <td>u</td>
            <td>-</td>
          </tr>
          <tr style={{ color: "blue" }}>
            <td>blue</td>
            <td>-</td>
            <td>u</td>
            <td>t</td>
            <td>-</td>
          </tr>
          <tr style={{ color: "green" }}>
            <td>green</td>
            <td>-</td>
            <td>-</td>
            <td>t</td>
            <td>u</td>
          </tr>
        </table>
        <p>d3 untagged weil admin frames an alle VLAN gesendet werden</p>
        <p>b2 untagged weil Port nur an blue sendet (access link)</p>
        <p>b3 tagged weil Port an anderes Bridge sendet (trunk link)</p>
      </div>
      <div>
        Ingress Switch 1
        <table>
          <tr>
            <th>Port</th>
            <th>VLAN Name</th>
          </tr>
          <tr>
            <td>1</td>
            <td>default</td>
          </tr>
          <tr style={{ color: "blue" }}>
            <td>2</td>
            <td>blue</td>
          </tr>
          <tr>
            <td>3</td>
            <td>default</td>
          </tr>
          <tr style={{ color: "green" }}>
            <td>4</td>
            <td>green</td>
          </tr>
        </table>
        <p>p3 default weil kann an alle VLAN senden (trunk link)</p>
      </div>
    </div>
    <div className="horizontal">
      <img src={taggedFrame} style={{ width: "60%" }} />
      <table>
        <tr>
          <th>Field</th>
          <th>Length in bits</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>Header</td>
          <td>16</td>
          <td>Composed of:</td>
        </tr>
        <tr>
          <td>Type</td>
          <td>16</td>
          <td>0x8100 → Frame is tagged</td>
        </tr>
        <tr>
          <td>VLAN-ID</td>
          <td>12</td>
          <td>Tells the VLAN the frame belongs to</td>
        </tr>
        <tr>
          <td>Priority Code Point (PCP)</td>
          <td>3</td>
          <td>Allows sending frame with priority</td>
        </tr>
        <tr>
          <td>Drop Eligibility Indicator (DEI)</td>
          <td>1</td>
          <td>Tells if frame can be thrown away if bridge is overloaded</td>
        </tr>
      </table>
    </div>
    <div className="horizontal">
      <img src={prio} />
      <p>
        3 bits 000 → 0...7 Prio-Levels (voice{">"}video{">"}best effort{">"}
        background)
      </p>
      <p>
        Each port has up to 8 queues where frames are put depending on their
        prio.
      </p>
      <p>
        <strong>Strict priority startegy:</strong> Frames from queue 0 sent
        first, then queue 1…
      </p>
    </div>
    <img src={lanChar} style={{ width: "40%" }} />
  </CheatBox>,
];
