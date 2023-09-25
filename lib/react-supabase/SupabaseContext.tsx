import { SupabaseClient } from "@supabase/supabase-js";
import { createContext } from "react";

export interface SupabaseContext {
  client: SupabaseClient<any, "public", any>;
}

export const SupabaseContext = createContext<SupabaseContext>(
  {} as SupabaseContext,
);
