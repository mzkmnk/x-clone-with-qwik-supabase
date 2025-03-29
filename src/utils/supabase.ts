import type { RequestEventAction } from "@builder.io/qwik-city";
import { createServerClient } from "supabase-auth-helpers-qwik";

export const serverSupabaseFactory = (requestEv: RequestEventAction) => {
  return createServerClient(
    requestEv.env.get("PUBLIC_SUPABASE_URL")!,
    requestEv.env.get("PUBLIC_SUPABASE_ANON_KEY")!,
    requestEv,
  );
};
