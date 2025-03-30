import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="h-screen w-screen min-w-[1024px] bg-black">
      <Slot />
    </div>
  );
});
