import { FC } from "react";
import { useRegister } from "../hooks/use-register";
import styles from "./registration-form.module.css";

export const RegistrationForm: FC = () => {
  const onSubmit = useRegister();

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <h2>Register</h2>
      <input type="email" name="email" placeholder="Email" />
      <input type="password" name="password" placeholder="Password" />

      <button type="submit">Submit</button>
    </form>
  );
};
