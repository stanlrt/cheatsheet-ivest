import { CheatTitle } from "src/react-cheatsheet/CheatTitle";
import { tcp } from "./tcp";
import { udp } from "./udp";
import { udpTcp } from "./udpTcp";

export const transport = [
  <CheatTitle title="Transport" />,
  ...udpTcp,
  ...udp,
  ...tcp,
];
