import { SignedIn, SignedOut } from "@/react-supabase";
import { FC } from "react";
import { Routes as BaseRoutes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts";
import { Dashboard } from "./pages/dashboard";
import { Home } from "./pages/home/home";
import { NotFound } from "./pages/not-found";
import { Register } from "./pages/register";
import { SignIn } from "./pages/sign-in";

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

        <Route
          path="sign-in"
          element={
            <SignedOut to="/dashboard">
              <SignIn />
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
