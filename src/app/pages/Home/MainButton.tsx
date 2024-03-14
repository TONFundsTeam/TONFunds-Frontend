import { Link } from "react-router-dom";
import dashboardEntity from "@app/pages/Dashboard";

const MainButton = () => {

  return (
    <div className="mt-5 sm:mt-8 sm:flex justify-center">
      <div className="rounded-md shadow">
        <Link
          to={dashboardEntity.path}
          className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium
                     rounded-md text-white bg-blue-500 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
          {dashboardEntity.name}
        </Link>
      </div>
    </div>
  );
};

export default MainButton;
