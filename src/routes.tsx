import { FC } from "react";
import { Routes as BaseRoutes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts";
import { Home } from "./pages/home";

export const Routes: FC = () => {
  return (
    <BaseRoutes>
      {/* dashboard */}
      <Route path="/" element={<DefaultLayout />}>
        {/* default */}
        <Route index element={<Home />} />
      </Route>

      <Route path="*" element={<></>} />
    </BaseRoutes>
  );
};
