import Pages from "@app/pages";
import { Route, Routes } from "react-router-dom";

const Router = () => {
  const routes = Pages.map((page: any) => {
    return <Route key={page.name} path={page.path} element={<page.element />} />;
  });

  return (
    <div className=''>
      <Routes>{routes}</Routes>
    </div>
  );
};

export default Router;
