import { CheatBox } from "src/react-cheatsheet/CheatBox";
import TCPStartExample from "./tcpSetup.png";
import TCPStartFSM from "./tcpSetupFSM.png";

import TCPExchangeExample from "./tcpExchange.png";
import TCPEndExample from "./tcpEnd.png";
import TCPEndFSM from "./tcpEndFSM.png";
import TCPSummaryFSM from "./tcpSummaryFSM.png";
import TCPEndDiagram from "./tcpEndDiag.png";
import TCPSetupDiagram from "./tcpSetupDiag.png";
import { MathLatex } from "src/react-cheatsheet/MathLatex";
import TCPSlidingWindow from "./tcpSlidingWindow.png";
import TCPSlidingWindowSequ from "./TCPSlidingWindowSequ.png";
import TCPCongestionWindow from "./TCPCongestionWindow.png";
import TCPHeader from "./TCPHeader.png";

export const tcp = [
  <CheatBox title="TCP Establishment (3-Way Handshake)">
    <span>ACK: Acknowledgement flag </span>
    <span>SYN: Synchronize flag </span>
    <span>FIN: Finish flag </span>
    <span>Seq: Sequence number </span>
    <span>Ack: Acknowledgement number</span>
    {/* <ol style={{ paddingTop: "2px" }}>
      <li>
        <strong>Client sends SYN</strong> Segment with SYN set and a random
        initial Seq <em>a</em>.
        <br />
        <code>SYN=1, Seq=a</code>
      </li>
      <li>
        <strong>Server responds with SYN-ACK:</strong> Segment that aknowledges
        the client's Seq <em>a</em> by sending Ack <em>a+1</em>, and includes
        another initial Seq <em>b</em>.
        <br />
        <code>SYN=1, ACK=1, Ack=a+1, Seq=b</code>
      </li>
      <li>
        <strong>Client sends ACK:</strong> Segment that aknowledges server's
        sequence number <em>b</em> by sending <em>b+1</em>. The ACK flag is set,
        and the connection is established.
        <br />
        <code>ACK=1, Ack=b+1, Seq=a+1</code>
      </li>
    </ol> */}

    <img src={TCPStartExample} />
    <img src={TCPSetupDiagram} style={{ width: "70%" }} />
    <img src={TCPStartFSM} style={{ width: "70%" }} />
  </CheatBox>,
  <CheatBox title="TCP Data transfer">
    <p>
      <ol>
        <li>
          <em>Note: this is the second row in the diagram</em> <br />
          <strong>Client sends data:</strong> Segment with{" "}
          <em>
            L<sub>i</sub>
          </em>{" "}
          bytes of data, sequence number{" "}
          <em>
            seq<sub>i</sub>
          </em>
          , and ACK set.
          <br />
          <code>
            Seq=seq<sub>i</sub> &emsp; Ack=ack<sub>i</sub> &emsp;&emsp;&emsp;
            Data=[L
            <sub>i</sub> bytes] &emsp; ACK=1
          </code>
        </li>
        <li>
          <strong>Server acknowledges:</strong> Segment acknowledging receipt up
          to byte{" "}
          <em>
            L<sub>i</sub>
          </em>{" "}
          by sending Ack{" "}
          <em>
            seq<sub>i</sub>+L<sub>i</sub>+1
          </em>
          , Seq{" "}
          <em>
            ack<sub>i</sub>
          </em>
          , and optionally{" "}
          <em>
            L<sub>i+1</sub>
          </em>{" "}
          bytes of data.
          <br />
          <code>
            Seq=ack<sub>i</sub> &emsp; Ack=seq<sub>i</sub>+L<sub>i</sub>+1
            &emsp;&emsp;&emsp; Data=[L
            <sub>i+1</sub> bytes] &emsp; ACK=1
          </code>
        </li>
        <li>
          <strong>Client sends data:</strong> Segment with{" "}
          <em>
            L<sub>i+2</sub>
          </em>{" "}
          bytes of data, sequence number{" "}
          <em>
            seq<sub>i+1</sub>
          </em>
          , and ACK set.
          <br />
          <code>
            Seq=ack<sub>i+1</sub> &emsp; Ack=seq<sub>i+1</sub>+L<sub>i+1</sub>+1
            &emsp;&emsp;&emsp; Data=[L
            <sub>i+2</sub> bytes] &emsp; ACK=1
          </code>
        </li>
      </ol>
    </p>

    <img src={TCPExchangeExample} />
  </CheatBox>,
  <CheatBox title="TCP Termination (4-Way Handshake)">
    <ul>
      <li>
        <strong>Either side can initiate termination:</strong> Both the client
        and the server can initiate the connection termination by sending a
        segment with the FIN flag set.
      </li>
      <li>
        <strong>Half-Closed State:</strong> If one side closes the connection
        (FIN, ACK), the other side can still send data. This state is called
        half-closed.
      </li>
    </ul>
    <img src={TCPEndExample} />
    <img src={TCPEndDiagram} style={{ width: "70%" }} />
    <img src={TCPEndFSM} style={{ width: "70%" }} />
  </CheatBox>,

  <CheatBox title="TCP Summary">
    <div className="horizontal">
      <div>
        <p>
          <strong>Connection Establishment:</strong>
        </p>
        <ol>
          <li>
            Client: <code>SYN</code>
          </li>
          <li>
            Server: <code>SYN-ACK</code>
          </li>
          <li>
            Client: <code>ACK</code>
          </li>
        </ol>
        <p>
          <strong>Data Transfer:</strong> Data segments are exchanged with
          sequence and acknowledgment numbers.
        </p>
        <p>
          <strong>Connection Termination:</strong>
        </p>
        <ol>
          <li>
            Client: <code>FIN</code>
          </li>
          <li>
            Server: <code>ACK</code>
          </li>
          <li>
            Server: <code>FIN</code>
          </li>
          <li>
            Client: <code>ACK</code>
          </li>
        </ol>
      </div>
      <img src={TCPSummaryFSM} style={{ width: "70%" }} />
    </div>
    <table>
      <tr>
        <th>Problem</th>
        <th>Lösungen</th>
      </tr>
      <tr>
        <td>
          Eine Verbindung soll zuverlässig auf- und abgebaut werden können
        </td>
        <td>
          <ul>
            <li>Verbindungsaufbau</li>
            <li>Verbindungsabbau</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>Verlust/Verfäschung/Duplikation/Vertauscung der Reihenfolge</td>
        <td>
          <ul>
            <li>Sequenznummern</li>
            <li>Adaptiver Timeout (RTO)</li>
            <li>Sliding Window Protokoll</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>Überschwemmung des Empfängers</td>
        <td>
          <ul>
            <li>Flow Control mit Advertized Window Size</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>Überlastung des Netzes</td>
        <td>
          <ul>
            <li>Congestion Control mit Slow Start Algorithmus</li>
          </ul>
        </td>
      </tr>
    </table>
  </CheatBox>,

  <CheatBox title="TCP Adaptive Timeout">
    <p>
      Messe die Zeit bis ACK zurückkommt. Falls RTO überscheitert, sende letzte
      Nachricht erneut.
      <br />
      <ul>
        <li>RRT = Zeit bis ACK züruckommt</li>
        <li>
          <MathLatex>{`SRTT_{neu} = (1-\\alpha) \\cdot SRTT_{alt} + \\alpha \\cdot RRT`}</MathLatex>{" "}
          (alpha = 0.125)
        </li>
        <li>
          <MathLatex>{`RTTVAR_{neu} = (1-\\beta) \\cdot RTTVAR_{alt} + \\beta \\cdot |RRT - SRTT|`}</MathLatex>{" "}
          (beta = 0.25)
        </li>
        <li>
          <MathLatex>{`RTO = SRTT + 4 \\cdot RTTVAR`}</MathLatex>
        </li>
      </ul>
    </p>

    <p>
      Adaptive Timeout: Der RTO wird adaptiv gesetzt, um die RTT zu
      bercksichtigen. (RTT wird langsam länger → RTO wird langsam höher)
    </p>
  </CheatBox>,

  <CheatBox title="TCP Flow Control (advertised)">
    <div className="horizontal">
      <ol>
        <li>
          Sender initiert Verbindung und teilt Advertised Window Size in bytes
        </li>
        <li>Empfänger bestätigt Verbindung und teilt Puffergrösse als AWS</li>
        <li>
          Sender und Empfänger teilen Puffer Grösse mit jedem ACK. AWS wird
          angepasst. Wenn es 0 ist, wird das Senden gestoppt.
        </li>
        <li>Sobald Puffer gefreit wird, ist ACK mit neue AWS gesendet</li>
      </ol>
      <img src={TCPSlidingWindow} />
    </div>
    <div className="horizontal">
      <img src={TCPSlidingWindowSequ} />
      <div>
        <p>
          Empfänger Puffer: 2500 bytes, zu Senden (1 <code>send()</code>{" "}
          Aufruf): 5000 bytes
        </p>
        <MathLatex>{`\\mathit{RWND} = \\frac{\\mathit{RTT} \\ \\cdot \\ \\mathit{BB}}{8}`}</MathLatex>
        <ul>
          wo:
          <li>RTT: Round Trip Time in sec</li>
          <li>BB: Bandbreite in bit/sec</li>
          <li>RWND: Ideal Receiver Window Size in bytes</li>
        </ul>
      </div>
    </div>
  </CheatBox>,

  <CheatBox title="TCP Congestion Control">
    Das Congestion Window (<code>cwnd</code>) ist ein zusätzliches Fenster, das
    vom Sender verwaltet wird. Der Sender bercksichtigt das kleinste Fenster
    (Advertised Window oder Congestion Window).
    <div className="horizontal">
      <ol>
        <li>
          <strong>Start:</strong> <code>cwnd</code>: 1 MSS (Maximum Segment Size
          in kb). <br />
          <code>threshold</code>: 32kb
        </li>
        <li>
          <strong>Slow Start:</strong> For each ACK received, <code>cwnd</code>{" "}
          is increased by 1 MSS, leading to exponential growth (because cwnd=N
          allows sending N segments, receiving N ACKs and increasing cwnd by N)
          <br />
          <code>cwnd = cwnd + 1 MSS</code>
        </li>
        <li>
          <strong>Threshold Reached:</strong> When the congestion window size
          reaches a threshold (Schwelle), TCP transitions to congestion
          avoidance.
        </li>
        <li>
          <strong>Congestion Avoidance:</strong> In this phase,{" "}
          <code>cwnd</code> increases linearly.
        </li>
        <li>
          <strong>Congestion Detection:</strong> If timeout is detected, TCP
          assumes congestion has occurred.
        </li>
        <li>
          <strong>Fast Retransmit:</strong>
          <ul>
            <li>Resend the lost packet without waiting for a timeout.</li>
            <li>Reset cwnd</li>
            <li>Set threshold to half of achieved cwnd</li>
          </ul>
        </li>
        <li>Congestion Avoidance starts again</li>
      </ol>

      <img src={TCPCongestionWindow} />
    </div>
    <strong>Probleme:</strong>
    <ul>
      <li>
        Die "Sägezahnkurven" verschiedener TCP-Sessions tendieren dazu, sich zu
        synchronisieren
      </li>
      <li>
        Bei Wireless-Netzen ist kommen Timeouts oft von Paketverlust, anstatt
        Überlastung.
      </li>
      <li>
        Slow-Start bei kurzen Transfers immer langsam (bsp: web tansfers).
      </li>
      <li>Abhängig von Round Trip Time</li>
    </ul>
  </CheatBox>,

  <CheatBox title="TCP Header">
    <div className="horizontal">
      <img src={TCPHeader} />
      <ul>
        <li>Länge: 20 bis 60 bytes</li>
        <li>Vorwärts: Sequenznummer</li>
        <li>Rückwärts: Ack, Window...</li>
      </ul>
    </div>
    <table>
      <tr>
        <th>Field</th>
        <th>Grösse in Bits</th>
        <th>Beschreibung</th>
      </tr>
      <tr>
        <td>TCP Source/Destination Port</td>
        <td>je 16</td>
        <td>
          Verbindungsaufbau: Destination Port bezeichnen den gewünschten Dienst
          auf der Serverseite
        </td>
      </tr>
      <tr>
        <td>Sequence Number</td>
        <td>32</td>
        <td>
          Sequenznummer des ersten Bytes der Daten in der TCP-Nachricht
          innerhalb des gesamten Datenstroms
        </td>
      </tr>
      <tr>
        <td>Acknowledgement Number</td>
        <td>32</td>
        <td>
          <ul>
            <li>
              Bezeichnet die Sequenznummer des nächsten Bytes, welches der
              Empfänger erwartet
            </li>
            <li>
              Ist die Acknowledgement Nummer n+1, so sind alle Bytes bis und mit
              n beim Empfänger korrekt und vollständig angekommen
            </li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>Header Length</td>
        <td>4</td>
        <td>Grösse des TCP-Headers in 32-Bit-Schnitten</td>
      </tr>
      <tr>
        <td>ECN flags</td>
        <td>2</td>
        <td>
          <ul>
            <li>1st Bit (8): CWR, Congestion Window Reduced</li>
            <li>2nd Bit (4): ECE, ECN Echo</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>Control Bits</td>
        <td>6</td>
        <td>
          <ul>
            <li>1st Bit (10): URG, Urgent Pointer enthält gültige Wert</li>
            <li>2nd Bit (11): ACK, Acknowledgement</li>
            <li>
              3rd Bit (12): PSH, Push: Empfänger sollte Daten im Paket sofort an
              App weiterleiten, ohne sie im Buffer zu speichern
            </li>
            <li>
              4th Bit (13): RST, Reset: Reset des Verbindungsaufbaus, oder
              geschlossenen Port
            </li>
            <li>5th Bit (14): SYN, Synchronize: Aufbau</li>
            <li>5th Bit (15): FIN, Finish: Abbau</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>Window Size</td>
        <td>16</td>
        <td>Grösse des Empfänger-Puffers in Bytes</td>
      </tr>
      <tr>
        <td>Checksum</td>
        <td>16</td>
        <td>Prüfsumme der Pseudo-Header, TCP-Header und Daten</td>
      </tr>
      <tr>
        <td>Urgent Pointer</td>
        <td>16</td>
        <td>
          Wenn URG gesetzt, gibt Position (Byte Offset) von "Urgent Data" in den
          Daten an (z.B. für Interrupt Zeichen wie Ctlr-C)
        </td>
      </tr>
      <tr>
        <td>Options</td>
        <td>0 bis 2048 (40 bytes)</td>
        <td>Häufigste Verwendung: MSS (Maximum Segment Size)</td>
      </tr>
    </table>
  </CheatBox>,

  <CheatBox title="Data Link vs Transport">
    <table>
      <thead>
        <tr>
          <th>Problem</th>
          <th>Schicht 2</th>
          <th>Schicht 4</th>
          <th>Massnahmen bei TCP</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Nachrichtenverlust</td>
          <td>
            p<sub>Verlust</sub> = FER
          </td>
          <td>
            p<sub>Verlust</sub> &gt;&gt; FER
          </td>
          <td>Positives ACK</td>
        </tr>
        <tr>
          <td>Telegramm-Reihenfolge</td>
          <td>fix</td>
          <td>kann variieren</td>
          <td>Sequenznummern</td>
        </tr>
        <tr>
          <td>Round Trip Time</td>
          <td>
            konstant, µs .. ms
            <br />
            hardware &gt; deterministisch
          </td>
          <td>
            variabel, ms .. s<br />
            software
          </td>
          <td>Adaptiver Retransmission Timeout</td>
        </tr>
        <tr>
          <td>Überlast des Empfängers</td>
          <td>kommt vor</td>
          <td>kommt vor</td>
          <td>Sliding Window mit dynamischer Fenstergösse</td>
        </tr>
        <tr>
          <td>Überlast des Netzwerks</td>
          <td>
            direkt beobachtbar
            <br />
            (Medium)
          </td>
          <td>nur indirekt beobachtbar</td>
          <td>Slow Start (Congestion Window)</td>
        </tr>
        <tr>
          <td>Neustart von Hosts</td>
          <td>direkt beobachtbar</td>
          <td>nur indirekt beobachtbar</td>
          <td>3 Weg Handshake, Initialisierung Sequenznr.</td>
        </tr>
      </tbody>
    </table>
  </CheatBox>,
];
