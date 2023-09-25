import { FC } from "react";
import { Outlet } from "react-router-dom";

export const DefaultLayout: FC = () => {
  return (
    <div className="container xl">
      <Outlet />
    </div>
  );
};
