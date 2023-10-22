import { formToObject } from "@/form-to-object";
import { useSupabaseClient } from "@/react-supabase";
import { FormEventHandler } from "react";
import { Credentials } from "../types";

export function useLogin() {
  const client = useSupabaseClient();

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const creds = formToObject<Credentials>(e.target as HTMLFormElement);
    await client.auth.signInWithPassword(creds);
  };

  return onSubmit;
}
