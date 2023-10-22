import { useUser } from "@/react-supabase";
import { FC } from "react";

export const Dashboard: FC = () => {
  const user = useUser();

  return (
    <main>
      <h2>Hello, {user?.email} </h2>
    </main>
  );
};
