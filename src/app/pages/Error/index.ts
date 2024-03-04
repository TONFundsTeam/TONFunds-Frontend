import ErrorPage from "./ErrorPage.tsx";
import { IPage } from "@app/pages/interfaces.ts";

const errorPageEntity: IPage = {
  name: "Error404",
  path: "*",
  element: ErrorPage
};

export default errorPageEntity;
