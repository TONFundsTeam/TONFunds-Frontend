import { FC } from "react";
import Pages from "@app/pages";
import { IPage } from "@app/pages/interfaces.ts";
import { Route, Routes } from "react-router-dom";

const Router: FC = () => {
  const routes: JSX.Element[] = Pages.map((page: IPage) => {
    return <Route key={page.name} path={page.path} element={<page.element />} />;
  });

  return (
    <div className=''>
      <Routes>{routes}</Routes>
    </div>
  );
};

export default Router;
