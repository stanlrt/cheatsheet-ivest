import { CheatBox } from "src/react-cheatsheet/CheatBox";

export const senden = [
  <CheatBox title="MAC Medien-Zugriff">
    <div className="grid">
      <div>
        <h3>Master-Slave</h3>
        <p>Master krdiniert Zugriff von Slaves</p>
        <p>+: Keine Konflikte</p>
        <p>-: Single point of failure</p>
      </div>
      <div>
        <h3>Token</h3>
        <p>
          Token wird von Konten zu Knoten weitergegeben. Falls Knoten an Token
          passt, hat er Zugriff auf Medium.
        </p>
        <p>+: Deterministische Pfad</p>
        <p>-: Startup Zeit, Tokenverlust</p>
        <p>Verwendet: Powerline, Multimaster level</p>
      </div>
      <div>
        <h3>Token + Master-Slave</h3>
        <p>
          Frame wird von Master zu Slave weitergegeben. Jeder Knoten fgt einen
          Token hinzu.
        </p>
      </div>
      <div>
        <h3>Takt-basiert</h3>
        <p>Es gitb ein Knotenzugriff-Zeitplan.</p>
        <p>+: Optimisation möglich</p>
        <p>-: Muss plannen</p>
        <p>Genauigkeit ntig</p>
        <p>Ungeplanntes Zugriff → Konflikt</p>
      </div>
    </div>
    <div>
      <h3>Random-Access</h3>
      <ol>
        <li>Alle Knoten können an jeder Zeit zugreifen.</li>
        <li>
          Knoten will zugreifen, and checkt ob Medien locked ist (carrier
          sense).
        </li>
        <li>Falls ja, Knoten versucht erneut nach zufälligem Dauer</li>
      </ol>
      <p>2 Knoten checken am gleichen Zeitpunkt → Kollision</p>
      <ul>
        Strategien:
        <li>
          Detektion: Zugriff abgesagt. Verwendet: im Vergangenheit bei Ethernet
        </li>
        <li>Abitrating; Priorität an einen Knoten</li>
        <li>
          Vermeidung:
          <ol>
            <li>
              Sender sendet "Request-to-Send" mit genaue Daten-Transmission
              Dauer.
            </li>
            <li>
              Empfänger sendet "Clear-to-Send" mit genaue Daten-Transmission
              Dauer.
            </li>
            <li>Sender sendet Daten.</li>
          </ol>
          Verwendet: WLAN
        </li>
      </ul>
    </div>
  </CheatBox>,
  <CheatBox title="Flusssteuerung">
    <p>
      Explizit (Start/Stop):{" "}
      <ol>
        <li>Receiver sends Stop message</li>
        <li>Receiver handles received data</li>
        <li>Receiver sends Start message</li>
      </ol>
    </p>
    <p>
      Implizit (Flow Control):{" "}
      <ol>
        <li>1. Receiver receives data</li>
        <li>2. Quittung is sent back by receiver</li>
        <li>3. Sender receives Quittung</li>
        <li>4. Sender sends data</li>
      </ol>
    </p>
  </CheatBox>,
];
