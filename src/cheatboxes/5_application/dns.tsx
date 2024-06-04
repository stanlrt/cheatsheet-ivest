import { CheatBox } from "src/react-cheatsheet/CheatBox";
import DNS from "./dns.png";
import DNSRecordTypes from "./dnsRecordTypes.png";

export const dns = [
  <CheatBox>
    <div className="horizontal">
      <img src={DNS} />
      <div>
        <p>DNS Record Types</p>
        <img style={{ width: "100%" }} src={DNSRecordTypes} />
      </div>
    </div>
    <ol style={{ paddingTop: "10px", columnCount: 2, columnGap: "10px" }}>
      <li>
        <strong>Client-Anfrage:</strong> Benutzer gibt im Browser den Hostnamen
        ein (z.B. "bob.sw.eng").
      </li>
      <li>
        <strong>Resolver-Anfrage:</strong> Client-Resolver sendet eine Anfrage
        an den bekannten Nameserver (z.B. des Providers oder der ZHAW).
      </li>
      <li>
        <strong>Rekursive Anfrage:</strong> Der Nameserver fragt beim
        Root-Server nach dem DNS-Server für die Top-Level-Domain (TLD) "eng".
      </li>
      <li>
        <strong>Root-Server-Antwort:</strong> Der Root-Server gibt den
        DNS-Server der TLD "eng" zurück.
      </li>
      <li>
        <strong>Domain-Server-Anfrage:</strong> Der Nameserver fragt den
        DNS-Server der Domain "eng" nach dem DNS-Server für die Subdomain
        "sw.eng".
      </li>
      <li>
        <strong>Subdomain-Server-Antwort:</strong> Der DNS-Server von "eng" gibt
        den DNS-Server der Subdomain "sw.eng" zurück.
      </li>
      <li>
        <strong>Subdomain-Server-Anfrage:</strong> Der Nameserver fragt den
        DNS-Server der Subdomain "sw.eng" nach der IP-Adresse für "bob.sw.eng".
      </li>
      <li>
        <strong>IP-Adresse Antwort:</strong> Der DNS-Server der Subdomain
        "sw.eng" gibt die IP-Adresse von "bob.sw.eng" zurück.
      </li>
      <li>
        <strong>Client-Kommunikation:</strong> Der Client verwendet die
        IP-Adresse, um mit dem Zielserver zu kommunizieren.
      </li>
    </ol>
  </CheatBox>,
];
