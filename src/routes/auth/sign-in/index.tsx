import { component$, useTask$ } from "@builder.io/qwik";
import { LuGithub } from "@qwikest/icons/lucide";
import { routeAction$, useNavigate } from "@builder.io/qwik-city";
import { serverSupabaseFactory } from "~/utils/supabase";

export const useSignInWithGithub = routeAction$(async (_, requestEv) => {
  const serverSupabase = serverSupabaseFactory(requestEv);

  const { data, error } = await serverSupabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: `${requestEv.env.get("ROUTE_BASE_PATH")}/internal/dashboard`,
    },
  });

  if (error) {
    throw new Error(`github sign in error: ${error.message}`);
  }

  return {
    url: data.url,
  };
});

export default component$(() => {
  const signInWithGithub = useSignInWithGithub();

  const navigate = useNavigate();

  useTask$(async ({ track }) => {
    track(() => signInWithGithub.value);

    if (signInWithGithub.value?.url) {
      await navigate(signInWithGithub.value.url);
    }
  });

  return (
    <button
      class="flex gap-2 items-center border border-slate-600 rounded-md p-2 cursor-pointer hover:bg-slate-200 transition"
      type="submit"
      onClick$={() => signInWithGithub.submit()}
    >
      <LuGithub class="text-2xl" />
      <p>Sign in with Github</p>
    </button>
  );
});
