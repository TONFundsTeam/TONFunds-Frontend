import { FC } from "react";

const coinLayout: string[][] = [
  ["w-[110px] h-[110px] ml-16 scale-x-[-1] slide-br ", "w-[70px] h-[70px] mr-24 slide-bl"], // First row
  ["w-[60px] h-[60px] ml-24 slide-right ", "w-[50px] h-[50px] mr-24 slide-left"], // Second row
  ["w-[120px] h-[120px] ml-24 slide-tr", "w-[150px] h-[150px] mr-24 slide-tl"] // Third row
];

const Coins: FC = () => {

  return (
    <div className="hidden md:absolute w-full h-full top-0 left-0 md:flex flex-wrap justify-center">
      {coinLayout.map((row: string[], rowIndex: number) => (
        <div key={rowIndex} className="flex flex-col justify-between container md:flex-row p-8 w-full vibrate-1">
          {row.map((sizeClass: string, colIndex: number) => (
            <img
              key={`${rowIndex}-${colIndex}`}
              src="/coin.png"
              alt={`coin-${rowIndex}-${colIndex}`}
              className={sizeClass}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Coins;
