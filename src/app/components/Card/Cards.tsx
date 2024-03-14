import { FC } from "react";
import Card from "./Card.tsx";
import { cards, ICards } from "./CardInterfaces.ts";

const Cards: FC = () => {
  return (
    <div className="px-4 mx-auto container grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {cards.map((card: ICards, index: number) => <Card key={index} data={card}/>)}
    </div>
  );
};

export default Cards;
