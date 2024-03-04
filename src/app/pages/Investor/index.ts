import Investors from "./Investors.tsx";
import { IPage } from "@app/pages/interfaces.ts";

const investorsEntity: IPage = {
  name: "Investors",
  path: "/investors",
  element: Investors
};

export default investorsEntity;
