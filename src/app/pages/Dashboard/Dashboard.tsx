import { FC } from "react";
import Cards from "@app/components/Card/Cards.tsx";
import SelectDashboard from "@app/pages/Dashboard/SelectDashboard.tsx";

const Dashboard: FC = () => {

  return (
    <div className="mx-auto mt-16">
      <SelectDashboard />
      <Cards />
    </div>
  );
};

export default Dashboard;
