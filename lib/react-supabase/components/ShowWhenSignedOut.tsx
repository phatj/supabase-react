import { FC } from "react";
import { useAuthenticated } from "../context/use-supabase.hooks";
import { AuthVisibilityProps } from "./types";

export const ShowWhenSignedOut: FC<AuthVisibilityProps> = ({ children }) => {
  const authed = useAuthenticated();

  if (!authed) {
    return <>{children}</>;
  }

  return null;
};
