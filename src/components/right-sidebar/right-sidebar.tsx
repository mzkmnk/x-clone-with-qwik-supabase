import { component$ } from "@builder.io/qwik";
import TweetIcon from "~/components/tweet-icon/tweet-icon";
import { TbSearch } from "@qwikest/icons/tablericons";
import {
  getRecommendedUsers,
  getTrends,
} from "~/routes/internal/dashboard/mock-data";

export default component$(() => {
  const trends = getTrends();

  const recommendedUsers = getRecommendedUsers();

  return (
    <div class="flex flex-col gap-4 m-2 items-center overflow-y-auto col-span-2 col-start-6">
      <div class="border border-zinc-600 rounded-full flex gap-2 items-center py-2 px-3 text-white w-96">
        <TweetIcon>
          <TbSearch />
        </TweetIcon>
        <input
          class="focus:outline-none focus:ring-0"
          placeholder="世界を見てみよう"
        />
      </div>

      <div class="border border-zinc-600 rounded-lg flex flex-col gap-4 items-center p-3 text-white w-96">
        {trends.map((trend, idx) => (
          <div key={idx} class="flex flex-col gap-1 w-full">
            <p class="font-semibold">{trend.title}</p>
            <p class="text-sm text-gray-400">{trend.description}</p>
            <p class="text-xs text-gray-400">{trend.tweetCount}件</p>
          </div>
        ))}
      </div>

      <div class="border border-zinc-600 rounded-lg flex flex-col gap-4 items-center p-3  w-96">
        {recommendedUsers.map((recommendedUser, idx) => (
          <div key={idx} class="flex items-center justify-between w-full">
            <div class="flex flex-col">
              <p class="text-white font-semibold">{recommendedUser.name}</p>
              <p class="text-xs text-gray-500 font-semibold">
                {recommendedUser.username}
              </p>
            </div>
            <button class="rounded-full bg-white py-2 px-3 font-semibold text-sm cursor-pointer">
              フォロー
            </button>
          </div>
        ))}
      </div>
    </div>
  );
});
