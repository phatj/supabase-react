import { Session, SupabaseClient } from "@supabase/supabase-js";
import { createContext } from "react";

export interface SupabaseContext {
  client: SupabaseClient<any, "public", any>;
  session: Session | null;
}

export const SupabaseContext = createContext<SupabaseContext | undefined>(
  {} as SupabaseContext,
);
