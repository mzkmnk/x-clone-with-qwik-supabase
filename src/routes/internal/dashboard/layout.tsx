import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="min-h-screen w-screen min-w-[1024px] bg-stone-900">
      <Slot />
    </div>
  );
});
