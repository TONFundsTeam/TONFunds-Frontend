import Dashboard from "./Dashboard.tsx";
import { IPage } from "@app/pages/interfaces.ts";

const dashboardEntity: IPage = {
  name: "Dashboard",
  path: "/dashboard",
  element: Dashboard
};

export default dashboardEntity;
