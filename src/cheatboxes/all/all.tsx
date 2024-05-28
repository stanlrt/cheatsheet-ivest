import { CheatTitle } from "src/react-cheatsheet/CheatTitle";
import { protocols } from "./protocols";
import { osi } from "./osi";

export const all = [<CheatTitle title="All" />, ...osi, ...protocols];
