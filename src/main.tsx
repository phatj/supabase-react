import { FC, ReactNode, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes";

type RootProps = {
  children: ReactNode;
};

const Root: FC<RootProps> = ({ children }) => {
  return <StrictMode>{children}</StrictMode>;
};

const root = createRoot(document.getElementById("root")!);

root.render(
  <Root>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Root>
);
