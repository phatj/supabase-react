import { FC } from "react";
import { useLogin } from "../hooks/use-login";
import styles from "./auth-form.module.css";

export const LoginForm: FC = () => {
  const onSubmit = useLogin();

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <h2>Sign In</h2>
      <input type="email" name="email" placeholder="Email" />
      <input type="password" name="password" placeholder="Password" />

      <button type="submit">Sign In</button>
    </form>
  );
};
