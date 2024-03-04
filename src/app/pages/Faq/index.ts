import Faq from "./Faq.tsx";
import { IPage } from "@app/pages/interfaces.ts";

const faqEntity: IPage = {
  name: "FAQ",
  path: "/faq",
  element: Faq
};

export default faqEntity;
