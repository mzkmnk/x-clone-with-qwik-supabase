import { component$ } from "@builder.io/qwik";
import TweetsContainer from "~/components/tweets-container/tweets-container";
import RightSidebar from "~/components/right-sidebar/right-sidebar";
import LeftSidebar from "~/components/left-sidebar/left-sidebar";
import FabTweetButton from "~/components/fab-tweet-button/fab-tweet-button";

export default component$(() => {
  return (
    <div class="grid grid-cols-7 h-full">
      <FabTweetButton />

      {/*left sidebar*/}
      <LeftSidebar />

      {/*main menu*/}
      <TweetsContainer />

      {/*right sidebar*/}
      <RightSidebar />
    </div>
  );
});
