import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="flex flex-col items-center justify-center h-screen">
      <Slot />
    </div>
  );
});
