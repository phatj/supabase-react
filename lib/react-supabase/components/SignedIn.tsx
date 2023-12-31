import { FC } from "react";
import { Navigate } from "react-router-dom";
import { useAuthenticated } from "../context/use-supabase.hooks";
import { RouteGuardProps } from "./types";

export const SignedIn: FC<RouteGuardProps> = ({ children, to }) => {
  const authed = useAuthenticated();

  if (!authed) {
    return <Navigate to={to} replace />;
  }

  return <>{children}</>;
};
