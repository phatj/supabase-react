import { useContext } from "react";
import { SupabaseContext } from "./SupabaseContext";

export const useSupabase = () => {
  return useContext(SupabaseContext);
};

export const useSupabaseClient = () => {
  return useSupabase().client;
};
