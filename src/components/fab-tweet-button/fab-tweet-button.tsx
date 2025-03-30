import { component$, useSignal } from "@builder.io/qwik";
import { TbBrandTwitter } from "@qwikest/icons/tablericons";
import TweetDialog from "~/components/tweet-dialog/tweet-dialog";

export default component$(() => {
  const isShowDialog = useSignal<boolean>(false);

  return (
    <div>
      <button
        type="button"
        class="fixed bottom-16 left-52 border-full w-14 h-14 bg-blue-500 hover:bg-blue-600 transition rounded-full flex items-center justify-center cursor-pointer"
        onClick$={() => {
          isShowDialog.value = !isShowDialog.value;
        }}
      >
        <div class="text-white text-3xl">
          <TbBrandTwitter />
        </div>
      </button>

      {isShowDialog.value ? <TweetDialog isShowDialog={isShowDialog} /> : null}
    </div>
  );
});
