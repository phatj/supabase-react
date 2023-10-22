import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "~/components/Navbar";

export const DefaultLayout: FC = () => {
  return (
    <>
      <Navbar />
      <div className="container xl">
        <Outlet />
      </div>
    </>
  );
};
