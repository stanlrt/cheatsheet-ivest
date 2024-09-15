import { CheatBox } from "src/react-cheatsheet/CheatBox";
import UDPHeader from "./UDPHeader.png";

export const udp = [
  <CheatBox title="UDP">
    <div
      style={{
        display: "flex",
        width: "100%",
        gap: "0",
      }}
    >
      <img
        src={UDPHeader}
        style={{
          maxWidth: "50%",
          height: "auto",
          width: "auto",
          objectFit: "contain",
        }}
      />
      <ul>
        <li>
          <strong>UDP Source Port (16 Bits, 2 Bytes):</strong> Identifiziert
          sendende Applikation. Client wählt am Anfang zufällige Port aus.
        </li>
        <li>
          <strong>UDP Destination Port (16 Bits, 2 Bytes):</strong>{" "}
          Identifiziert die Applikation des Empfängers
        </li>
        <li>
          <strong>UDP Message Length (16 Bits, 2 Bytes):</strong> Länge des
          Datagramms (inkl. Header) in Bytes. Maximale Länge eines
          UDP-Datagramms: 65'535 Bytes
        </li>
        <li>
          <strong>UDP Checksum (16 Bits):</strong> Prüfsumme über einen
          Pseudo-Header, UDP-Header und Daten. Kann Null sein (keine Prüfsumme).
        </li>
      </ul>
    </div>
  </CheatBox>,
];
