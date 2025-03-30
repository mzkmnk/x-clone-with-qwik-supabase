import { component$ } from "@builder.io/qwik";
import { LuGithub } from "@qwikest/icons/lucide";
import { Form, routeAction$, zod$ } from "@builder.io/qwik-city";
import { serverSupabaseFactory } from "~/utils/supabase";

export const useSignInWithGithub = routeAction$(async (_, requestEv) => {
  const serverSupabase = serverSupabaseFactory(requestEv);

  const { data, error } = await serverSupabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: `${requestEv.url.origin}/internal/dashboard`,
    },
  });

  if (error) {
    return {
      url: null,
      error: error.message,
    };
  }

  throw requestEv.redirect(303, data.url);
}, zod$({}));

export default component$(() => {
  const signInWithGithub = useSignInWithGithub();

  return (
    <Form class="inline-flex flex-col items-center" action={signInWithGithub}>
      <button
        class="flex gap-2 items-center border border-slate-600 rounded-md p-2 cursor-pointer hover:bg-slate-200 transition"
        type="submit"
      >
        <LuGithub class="text-2xl" />
        <p>Sign in with Github</p>
      </button>
      {signInWithGithub.value && signInWithGithub.value.error ? (
        <p class="text-red-500 mt-2">{signInWithGithub.value.error}</p>
      ) : null}
    </Form>
  );
});
