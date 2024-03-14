import { FC } from "react";
import Welcome from "./Welcome.tsx";
import Cards from "@app/components/Card/Cards.tsx";

const Home: FC = () => {
  return (
    <div>
      <Welcome />
      <Cards />
    </div>
  );
};

export default Home;
