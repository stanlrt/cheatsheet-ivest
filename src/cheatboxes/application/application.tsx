import { CheatTitle } from "src/react-cheatsheet/CheatTitle";
import { dns } from "./dns";
import { dhcp } from "./dhcp";
import { nat } from "./nat";
import { http } from "./http";

export const application = [
  <CheatTitle title="Application" />,
  ...dns,
  ...dhcp,
  ...nat,
  ...http,
];
