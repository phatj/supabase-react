import { FC } from "react";
import { Navigate } from "react-router-dom";
import { useAuthenticated } from "../context/use-supabase.hooks";
import { RouteGuardProps } from "./route-guard.types";

export const SignedOut: FC<RouteGuardProps> = ({ children, to }) => {
  const authed = useAuthenticated();

  if (authed) {
    return <Navigate to={to} replace />;
  }

  return <>{children}</>;
};
