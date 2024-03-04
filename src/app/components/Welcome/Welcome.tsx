import { FC } from "react";
import { Link } from "react-router-dom";
import dashboardEntity from "@app/pages/Dashboard";

const Welcome: FC = () => {
  return (
    <div className="relative overflow-hidden flex justify-center">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <p className="block">TON Funds for</p>
                <p className="block text-blue-500">your ideas.</p>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Build your ideas or invest with us.
              </p>
              <p className="mt-2 text-sm text-gray-500 sm:mt-4 sm:text-base lg:mx-0">
                TON Funds - First crowdfunding launchpad on TON Blockchain that allows creating
                fundraisings or investing for everyone just in few clicks.<br/>
                And yes, that’s decentralized.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex justify-center">
                <div className="rounded-md shadow">
                  <Link to={dashboardEntity.path}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium
                     rounded-md text-white bg-blue-500 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                    {dashboardEntity.name}
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">

      </div>
    </div>
  );
};

export default Welcome;
