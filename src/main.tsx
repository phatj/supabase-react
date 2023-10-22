import "./styles/main.css";

import { SupabaseProvider } from "@/react-supabase";
import { FC, ReactNode, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes";
import { supabaseClient } from "./supabase-client";

type RootProps = {
  children: ReactNode;
};

const Root: FC<RootProps> = ({ children }) => {
  return (
    <SupabaseProvider client={supabaseClient}>
      <StrictMode>{children}</StrictMode>
    </SupabaseProvider>
  );
};

const root = createRoot(document.getElementById("root")!);

root.render(
  <Root>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Root>,
);
