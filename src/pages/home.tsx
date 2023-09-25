import cn from "classnames";
import { FC } from "react";
import styles from "./home.module.css";

export const Home: FC = () => {
  return (
    <main className={cn(styles.main, "center")}>
      <div>
        <h1>Hello World!</h1>
      </div>
    </main>
  );
};
