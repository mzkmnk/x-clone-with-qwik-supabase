import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="flex gap-2 cursor-pointer items-center text-lg text-gray-400">
      <Slot />
    </div>
  );
});
