import { formToObject } from "@/form-to-object";
import { useSupabaseClient } from "@/react-supabase";
import { FormEventHandler } from "react";
import { Credentials } from "../types";

export function useRegister() {
  const client = useSupabaseClient();

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const creds = formToObject<Credentials>(e.target as HTMLFormElement);
    await client.auth.signUp({
      ...creds,
      options: {
        emailRedirectTo: new URL(import.meta.url).origin,
      },
    });
  };

  return onSubmit;
}
