import { CheatBox } from "src/react-cheatsheet/CheatBox";
import HTTPSequence from "./httpSequence.png";

export const http = [
  <CheatBox title="HTTP Grundlagen">
    <p>
      HTTP (Hypertext Transfer Protocol) ermöglicht den Zugriff auf verteilte
      Hypermedia-Informationssysteme. Es basiert auf TCP und verwendet
      normalerweise Port 80. HTTP ist zustandslos (stateless), was bedeutet,
      dass zwischen zwei aufeinanderfolgenden Transaktionen kein direkter Bezug
      besteht.
    </p>
    <div className="horizontal">
      {/* <img src={HTTPOverviewDiagram} alt="HTTP Overview Diagram" />
      <img src={HTTPTransactionExample} alt="HTTP Transaction Example" /> */}
    </div>
  </CheatBox>,
  <CheatBox title="HTTP Methoden">
    <ul>
      <li>
        <strong>GET:</strong> Fordert Daten von einer bestimmten URL an.
      </li>
      <li>
        <strong>POST:</strong> Sendet Input-Daten an den Server, z.B. aus
        Eingabemasken im Browser.
      </li>
      <li>
        <strong>HEAD:</strong> Wie GET, aber der Server schickt nur den Header
        der Antwort ohne Daten zurück.
      </li>
      <li>
        <strong>DELETE:</strong> Löscht eine Ressource.
      </li>
      <li>
        <strong>PUT:</strong> Lädt eine Ressource hoch.
      </li>
      <li>
        <strong>PATCH:</strong> Aktualisiert teilweise eine Ressource.
      </li>
      <li>
        <strong>OPTIONS:</strong> Liefert Informationen über die verfügbaren
        Optionen des Servers.
      </li>
    </ul>
  </CheatBox>,
  <CheatBox title="HTTP Anfragen und Antworten">
    <img src={HTTPSequence} style={{ width: "70%" }} />
    <div className="horizontal">
      <div>
        <p>
          <strong>GET Beispiel:</strong>
        </p>
        <pre>
          GET /pfad/zu/meinem/dokument.html HTTP/1.1{"\n"}
          Accept: image/gif, image/x-xbitmap, image/jpeg, */*{"\n"}
          Accept-Language: de, en{"\n"}
          User-Agent: Mozilla/9.0{"\n"}
          Host: www.ktlabor.ch:80{"\n"}
          {"\n"}
        </pre>
      </div>
      <div>
        <p>
          <strong>HTTP Antwort Beispiel:</strong>
        </p>
        <pre>
          HTTP/1.1 200 OK{"\n"}
          Date: Wed, 04 Feb 2099 15:52:12 GMT{"\n"}
          Server: Apache/9.6.3 (Unix){"\n"}
          Content-Type: text/html{"\n"}
          Content-Length: 1264{"\n"}
          {"\n"}
          &lt;!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 3.2 Final//EN"&gt;{"\n"}
          &lt;HTML&gt;...&lt;/HTML&gt;{"\n"}
        </pre>
      </div>
    </div>
  </CheatBox>,
  <CheatBox title="HTTP Versionen">
    <p>
      <strong>HTTP/0.9:</strong> 1991 veröffentlicht. Nur GET Methode, keine
      Header.
    </p>
    <p>
      <strong>HTTP/1.0:</strong> 1996 veröffentlicht. Unterstützung für Header,
      mehrere Methoden (GET, POST, HEAD).
    </p>
    <p>
      <strong>HTTP/1.1:</strong> 1999 veröffentlicht. Verbesserungen wie
      Caching, persistente Verbindungen, chunked transfer encoding.
    </p>
    <p>
      <strong>HTTP/2:</strong> 2015 verffentlicht.
      <div style={{ marginLeft: "20px" }}>
        <ul>
          <li>Parallelisierung der Transaktionen, Vermeidung von Totzeiten</li>
          <li>Streams priorisieren (z.B. Text vor Bild)</li>
          <li>Datenkompression, auch der Header</li>
          <li>Binär-codierte Übertragung</li>
          <li>Push-Verfahren: Durch Server initiierte Datenübertragungen</li>
        </ul>
      </div>
    </p>
  </CheatBox>,
  //   <CheatBox title="HTTP Header Felder">
  //     <table>
  //       <tr>
  //         <th>Feld</th>
  //         <th>Beschreibung</th>
  //       </tr>
  //       <tr>
  //         <td>Accept</td>
  //         <td>Welche MIME-Typen der Client akzeptiert</td>
  //       </tr>
  //       <tr>
  //         <td>Accept-Language</td>
  //         <td>Bevorzugte Sprachen des Benutzers</td>
  //       </tr>
  //       <tr>
  //         <td>User-Agent</td>
  //         <td>Identifiziert den Webbrowser</td>
  //       </tr>
  //       <tr>
  //         <td>Host</td>
  //         <td>Hostname, wie er ursprünglich im Browser angegeben wurde</td>
  //       </tr>
  //       <tr>
  //         <td>Content-Type</td>
  //         <td>MIME-Typ der folgenden Nachricht</td>
  //       </tr>
  //       <tr>
  //         <td>Content-Length</td>
  //         <td>Länge der folgenden Nachricht</td>
  //       </tr>
  //       <tr>
  //         <td>Cookie</td>
  //         <td>Informationen, die der Server beim Client gespeichert hat</td>
  //       </tr>
  //     </table>
  //   </CheatBox>,
  <CheatBox title="HTTP Status Codes">
    <ul>
      <li>
        <strong>1xx:</strong> Information: Request erhalten, Weiterverarbeitung
      </li>
      <li>
        <strong>2xx:</strong> Erfolg: Die Anfrage war erfolgreich
      </li>
      <li>
        <strong>3xx:</strong> Umleitung: Weitere Aktionen notwendig
      </li>
      <li>
        <strong>4xx:</strong> Client-Fehler: Die Anfrage enthält Fehler
      </li>
      <li>
        <strong>5xx:</strong> Server-Fehler: Der Server konnte die Anfrage nicht
        ausführen
      </li>
    </ul>
  </CheatBox>,
];
