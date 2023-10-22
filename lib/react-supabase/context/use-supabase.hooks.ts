import { useContext } from "react";
import { SupabaseContext } from "./SupabaseContext";

export const useSupabase = () => {
  const context = useContext(SupabaseContext);

  if (!context) {
    throw new Error("This hook must be called from within a SupabaseProvider");
  }

  return context;
};

export const useSupabaseClient = () => {
  return useSupabase().client;
};

export const useAuthenticated = () => {
  const { session } = useSupabase();
  return !!session?.user;
};

export const useUser = () => {
  const { session } = useSupabase();
  return session?.user;
};
