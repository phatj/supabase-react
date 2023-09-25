import { FC } from "react";
import styles from "./home.module.css";
import cn from "classnames";

export const Home: FC = () => {
  return (
    <main className={cn(styles.main, "center")}>
      <h1>Hello World!</h1>
    </main>
  );
};
