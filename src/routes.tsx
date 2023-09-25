import { FC } from "react";
import { Routes as BaseRoutes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts";
import { Home } from "./pages/home/home";
import { Register } from "./pages/register/register";
import { SignedIn, SignedOut } from "@/react-supabase";
import { Dashboard } from "./pages/dashboard";
import { NotFound } from "./pages/not-found";

export const Routes: FC = () => {
  return (
    <BaseRoutes>
      <Route path="/" element={<DefaultLayout />}>
        {/* default */}
        <Route index element={<Home />} />
        <Route
          path="register"
          element={
            <SignedOut to="/dashboard">
              <Register />
            </SignedOut>
          }
        />
      </Route>

      {/* protected */}
      <Route
        path="/"
        element={
          <SignedIn to="/login">
            <DefaultLayout />
          </SignedIn>
        }
      >
        {/* default */}
        <Route path="dashboard" element={<Dashboard />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </BaseRoutes>
  );
};
