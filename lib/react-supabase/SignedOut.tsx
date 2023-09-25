import { FC } from "react";
import { Navigate } from "react-router-dom";
import { useAuthenticated } from "./hooks";
import { RouteGuardProps } from "./types";

export const SignedOut: FC<RouteGuardProps> = ({ children, to }) => {
  const authed = useAuthenticated();
  console.log(authed);

  if (authed) {
    return <Navigate to={to} replace />;
  }

  return <>{children}</>;
};
