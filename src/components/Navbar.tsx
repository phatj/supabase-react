import {
  ShowWhenSignedIn,
  ShowWhenSignedOut,
  useSupabaseClient,
} from "@/react-supabase";
import { FC } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

export const Navbar: FC = () => {
  const client = useSupabaseClient();

  function signOut() {
    client.auth.signOut();
  }

  return (
    <nav className={styles.nav}>
      <div className="logo">
        <NavLink to="/">Home</NavLink>
      </div>
      <div className="links">
        <ShowWhenSignedOut>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/sign-in">Sign In</NavLink>
        </ShowWhenSignedOut>
        <ShowWhenSignedIn>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/" onClick={signOut}>
            Sign Out
          </NavLink>
        </ShowWhenSignedIn>
      </div>
    </nav>
  );
};
