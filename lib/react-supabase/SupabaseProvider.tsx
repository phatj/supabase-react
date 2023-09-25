import { SupabaseClient } from "@supabase/supabase-js";
import { FC, ReactNode } from "react";
import { SupabaseContext } from "./SupabaseContext";

export interface SupabaseProviderProps {
  client: SupabaseClient<any, "public", any>;
  children: ReactNode;
}

export const SupabaseProvider: FC<SupabaseProviderProps> = ({
  client,
  children,
}) => {
  return (
    <SupabaseContext.Provider value={{ client }}>
      {children}
    </SupabaseContext.Provider>
  );
};
