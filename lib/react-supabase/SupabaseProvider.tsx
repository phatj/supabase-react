import { Session, SupabaseClient } from "@supabase/supabase-js";
import { FC, ReactNode, useEffect, useState } from "react";
import { SupabaseContext } from "./SupabaseContext";

export interface SupabaseProviderProps {
  client: SupabaseClient<any, "public", any>;
  children: ReactNode;
}

export const SupabaseProvider: FC<SupabaseProviderProps> = ({
  client,
  children,
}) => {
  const [session, setSession] = useState<Session | null>();

  useEffect(() => {
    const {
      data: { subscription },
    } = client.auth.onAuthStateChange((event, session) => {
      console.debug("[react-supabase] Auth event %s", event);
      setSession(session ?? null);
    });

    return subscription.unsubscribe;
  }, []);

  if (session === undefined || !client) {
    return null;
  }

  return (
    <SupabaseContext.Provider value={{ client, session }}>
      {children}
    </SupabaseContext.Provider>
  );
};
