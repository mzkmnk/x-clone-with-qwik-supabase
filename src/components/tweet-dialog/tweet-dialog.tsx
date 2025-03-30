import type { Signal } from "@builder.io/qwik";
import { component$, useSignal } from "@builder.io/qwik";
import { LuX } from "@qwikest/icons/lucide";
import { TbChevronDown } from "@qwikest/icons/tablericons";
import { cn } from "~/utils/cn";

type Props = {
  isShowDialog: Signal<boolean>;
};

export default component$(({ isShowDialog }: Props) => {
  const isShowPubRange = useSignal<boolean>(false);

  const tweetContent = useSignal<string>("");

  return (
    <div class="fixed bottom-0 inset-x-0 top-0 bg-[#2f3336]/80 justify-center transition">
      <div class="relative">
        <div class="absolute top-16 flex justify-center w-full">
          <div class="flex flex-col gap-2 w-[40rem] bg-black rounded-lg p-3">
            {/*header*/}
            <div class="flex justify-between items-center">
              <button
                class="text-white text-xl cursor-pointer"
                onClick$={() => {
                  isShowDialog.value = !isShowDialog.value;
                }}
              >
                <LuX></LuX>
              </button>
            </div>

            {/*body*/}
            <div class="flex flex-col text-white gap-2">
              <div
                class="relative border border-zinc-600 rounded-xl py-1 px-3 flex items-center justify-between w-20 cursor-pointer"
                onClick$={() => {
                  isShowPubRange.value = !isShowPubRange.value;
                }}
              >
                <p class="text-blue-500 text-sm font-semibold">全員</p>
                <div class="text-blue-500 text-xl">
                  <TbChevronDown />
                </div>
              </div>

              <textarea
                class="border-0 focus:outline-none focus:ring-0 resize-none"
                placeholder="いまなにしてる？"
                bind:value={tweetContent}
              ></textarea>
            </div>

            <div class="border-t-zinc-600 border"></div>

            {/*footer*/}
            <div class="flex items-center justify-between">
              <p class="text-zinc-400 text-sm">
                {tweetContent.value.length}
                <span class="mx-1">/</span>100
              </p>
              <button
                class={cn(
                  "bg-white rounded-full self-end px-3 py-1 text-sm font-semibold transition",
                  {
                    "bg-gray-400/60": !tweetContent.value,
                    "cursor-pointer ": !!tweetContent.value,
                  },
                )}
              >
                ポストする
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
