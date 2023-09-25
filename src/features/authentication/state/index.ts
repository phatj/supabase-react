import { User } from "@supabase/supabase-js";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { supabaseClient } from "~/supabase-client";
import { Credentials } from "../types";

export const userAtom = atomWithStorage("user", {} as User);

export const registerAtom = atom<null, [Credentials], Promise<void>>(
  null,
  async (get, set, creds) => {
    const { data, error } = await supabaseClient.auth.signUp(creds);

    if (error) {
      throw Error;
    }

    if (data.user) {
      set(userAtom, data.user);
    }
  },
);
