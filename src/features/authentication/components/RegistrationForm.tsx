import { formToObject } from "@/form-to-object";
import { useSupabaseClient } from "@/react-supabase";
import { FC, FormEventHandler } from "react";
import { Credentials } from "../types";
import styles from "./registration-form.module.css";

export const RegistrationForm: FC = () => {
  const client = useSupabaseClient();

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const creds = formToObject<Credentials>(e.target as HTMLFormElement);
    await client.auth.signUp(creds);
  };

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <h2>Register</h2>
      <input type="email" name="email" placeholder="Email" />
      <input type="password" name="password" placeholder="Password" />

      <button type="submit">Submit</button>
    </form>
  );
};
