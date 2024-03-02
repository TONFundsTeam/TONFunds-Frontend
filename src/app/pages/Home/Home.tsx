import _ from "lodash";
import { FC } from "react";
import { cards, ICards } from "./";
import { Welcome, Card } from "@app/components";

const Home: FC = () => {
  return (
    <div>
      <Welcome />
      <div className="mx-auto container grid grid-cols-3 justify-between">
        {_.map(cards, (card: ICards, index: number) => <Card key={index} data={card} />)}
      </div>
    </div>
  );
};

export default Home;
