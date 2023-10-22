import { ReactNode } from "react";

export interface RouteGuardProps {
  children: ReactNode;
  to: string;
}

export interface AuthVisibilityProps {
  children: ReactNode;
}
