import _ from "lodash";
import Card from "@app/components/Card.tsx";
import { cards, ICards } from "@app/pages/Home";

const Dashboard = () => {

  return (
    <div className="mx-auto container my-24">
      <select>
        <option>All</option>
        <option>...</option>
      </select>
      <div className="grid grid-cols-3 justify-between">
        {_.map(cards, (card: ICards, index: number) => <Card key={index} data={card}/>)}
      </div>
    </div>
  );
};

export default Dashboard;
