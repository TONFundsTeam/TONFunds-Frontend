import _ from "lodash";
import { FC } from "react";
import { Card } from "@app/components";
import { cards, ICards } from "@app/components/Card/CardInterfaces.ts";

const Dashboard: FC = () => {

  return (
    <div className="mx-4 mt-16">
      <select>
        <option>All</option>
        <option>...</option>
      </select>
      <div className="mx-auto container grid sm:grid-cols-1 lg:grid-cols-3 justify-between">
        {_.map(cards, (card: ICards, index: number) => <Card key={index} data={card}/>)}
      </div>
    </div>
  );
};

export default Dashboard;
