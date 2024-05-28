import { CheatTitle } from "src/react-cheatsheet/CheatTitle";
import { udp } from "./udp";
import { udpTcp } from "./udpTcp";
import { tcp } from "./tcp";

export const transport = [
  <CheatTitle title="Transport" />,
  ...udpTcp,
  ...udp,
  ...tcp,
];
