import { CheatBox } from "src/react-cheatsheet/CheatBox";
import TCPStart from "./tcpSetup.png";
import TCPExchange from "./tcpExchange.png";
import TCPEnd from "./tcpEnd.png";

export const tcp = [
  <CheatBox title="TCP">
    <div>
      <h2>Establishment (3-Way Handshake)</h2>
      <ol>
        <li>
          <strong>Client sends SYN:</strong> TCP segment with SYN flag set and a
          random initial sequence number <em>a</em>.
          <br />
          <code>SYN=1, Seq=a</code>
        </li>
        <li>
          <strong>Server responds with SYN-ACK:</strong> segment that
          acknowledges the client's sequence number <em>a</em> (by sending{" "}
          <em>a+1</em>) and includes another initial sequence number <em>b</em>.
          The server sets both the SYN and ACK flags.
          <br />
          <code>SYN=1, ACK=1, Seq=b, Ack=a+1</code>
        </li>
        <li>
          <strong>Client sends ACK:</strong> segment that confirms the server's
          sequence number <em>b</em> by sending <em>b+1</em>. The ACK flag is
          set, and the connection is established.
          <br />
          <code>ACK=1, Seq=a+1, Ack=b+1</code>
        </li>
      </ol>

      <h2>Data Transfer</h2>

      <p>
        <ul>
          <li>
            <b>Sequenznummer:</b> Position des ersten Bytes der Daten im
            gesamten TCP-Datenstrom
          </li>
          <li>
            <b>Acknowledgement Nummer:</b> Sequenznummer des nächsten erwarteten
            Bytes
          </li>
          <li>
            <b>ACK Flag:</b> immer gesetzt
          </li>
        </ul>
      </p>

      <h2>Termination (4-Way Handshake)</h2>

      <ol>
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
        <li>
          <strong>Client sends FIN:</strong> The client initiates the connection
          termination by sending a segment with the FIN flag set.
          <br />
          <code>FIN=1, Seq=16633, Ack=43036</code>
        </li>
        <li>
          <strong>Server responds with ACK:</strong> The server acknowledges the
          client's FIN segment by sending an ACK.
          <br />
          <code>ACK=1, Seq=43036, Ack=16634</code>
        </li>
        <li>
          <strong>Server sends FIN:</strong> The server sends its own FIN
          segment to indicate it is ready to terminate the connection. This step
          can be combined with the previous ACK if the server also wants to
          close the connection.
          <br />
          <code>FIN=1, Seq=43036, Ack=16634</code>
        </li>
        <li>
          <strong>Client responds with ACK:</strong> The client sends a final
          acknowledgment back to the server, confirming the server's FIN.
          <br />
          <code>ACK=1, Seq=16634, Ack=43037</code>
        </li>
      </ol>

      <div>
        <h2>Summary</h2>
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
      <div className="horizontal">
        <img src={TCPStart} style={{ width: "30%", objectFit: "contain" }} />
        <img src={TCPExchange} style={{ width: "30%", objectFit: "contain" }} />
        <img src={TCPEnd} style={{ width: "30%", objectFit: "contain" }} />
      </div>
    </div>
    {/* <ul>
        <li>
          Verbindungsorientierte Übertragung: Zuerst wird seine Verbindung über
          Client- und Serveranwendung aufgebaut
        </li>
        <li>
          Graceful Termination (Verbindungsabbau): TCP gewährt die Zustellung
          aller Daten auch beim Verbindungsabbau
        </li>
        <li>
          Stream-Schnittstelle: Die Anwendung sendet/empfängt eine
          unstrukturierte Byte-Folge
        </li>
        <li>
          Punkt-zu-Punkt Kommunikation: Zwei Applikationen tauschen Daten aus.
          Konzepte wie Multicast oder Broadcast existieren nicht.
        </li>
      </ul> */}
  </CheatBox>,
];
