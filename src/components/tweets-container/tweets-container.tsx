import { component$ } from "@builder.io/qwik";
import TweetIcon from "~/components/tweet-icon/tweet-icon";
import {
  TbAnalyze,
  TbDots,
  TbHeart,
  TbMessageCircle,
  TbRepeat,
} from "@qwikest/icons/tablericons";
import { getTweets } from "~/routes/internal/dashboard/mock-data";

export default component$(() => {
  const tweets = getTweets();

  return (
    <div class="flex flex-col w-full overflow-y-scroll h-full border-x-[0.5px] border-zinc-600 gap-2 col-start-3 col-end-6">
      {tweets.map((tweet, idx) => (
        <div
          class="flex flex-col text-white border-b-[0.5px] border-zinc-600 p-2 gap-2"
          key={idx}
        >
          <div class="flex items-center justify-between">
            <p class="flex items-center gap-2 font-semibold">
              {tweet.user.name}
              <span class="text-sm text-gray-400">{tweet.user.username}</span>
            </p>
            <TweetIcon>
              <TbDots />
            </TweetIcon>
          </div>

          <p>{tweet.content}</p>

          <div class="flex gap-2 w-full items-center justify-around">
            <TweetIcon>
              <TbMessageCircle />
            </TweetIcon>

            <TweetIcon>
              <TbRepeat />
            </TweetIcon>

            <TweetIcon>
              <TbHeart />
            </TweetIcon>

            <TweetIcon>
              <TbAnalyze />
            </TweetIcon>
          </div>
        </div>
      ))}
    </div>
  );
});
