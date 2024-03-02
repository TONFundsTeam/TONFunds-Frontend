import { FC } from "react";
import { Header, Footer, AppRouter } from "./";

const Layout: FC = () => {
  return (
    <div className="flex flex-col w-full">
      <Header />
      <div className="flex flex-1">
        <main className="flex-1 w-full bg-gray-100 ">
          <AppRouter/>
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Layout;
