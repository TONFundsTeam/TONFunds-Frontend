import { FC } from "react";
import { ICards } from "@app/pages/Home";

interface ICardProps {
  data: ICards
}

const Card: FC<ICardProps> = ({data}) => {

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4 my-4">
      <div className="w-full">
        <img src={data.image} alt="Image description" className="w-full h-40 object-cover rounded-t-lg"/>
      </div>
      <div className="flex justify-between mt-4">
        <span className="inline-block bg-red-200 rounded-md px-3 py-1 text-sm font-semibold text-red-700 mr-2">
          {data.inTrand && "IN TREND"}
        </span>
        <span className="inline-block bg-green-200 rounded-md px-3 py-1 text-sm font-semibold text-green-700">
          {data.rewards && "REWARDS"}
        </span>
      </div>
      <div className="flex items-center">
        <div
          className="text-xs font-semibold inline-block py-1 mt-2 uppercase text-blue-600 last:mr-0">
          {data.type}
        </div>
      </div>
      <div className="py-4">
        <div className="font-bold text-xl mb-2">{data.title}</div>
        <p className="text-gray-700 text-base">
          {data.desc}
        </p>
      </div>
      <div className="pt-4 pb-2">
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div className="bg-blue-600 h-2.5 rounded-full" style={{width: `${data.collected/data.total*100}%`}}></div>
        </div>
        <div className="text-right mt-1 text-sm font-semibold">
          {data.collected}/{data.total} {data.currency} ({data.collected/data.total*100}%)
        </div>
      </div>
    </div>
  );
};

export default Card;
