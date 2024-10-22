import React, { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import GetTopics from "@/api/GetTopics";
import TopicsList from "./TopicsList";
import TopicsListSkeleton from "./TopicsListSkeleton";

const HeaderBar = async () => {
  const topicsListApiResponse = await GetTopics();
  const topicsList = topicsListApiResponse.status == "pass" ? topicsListApiResponse.data : [];
  if (topicsList.length === 0) {
    throw new Error("Error: TopicsList or PostsList API ran out of Juice");
  }
  return (
    <>
      <header>
        <div role="banner">
          <Link
            href="/"
            className="fixed bottom-0 left-1/2 transform -translate-x-1/2 md:translate-x-0 md:left-14 bg-yellow border-black border-opacity-5 border-t-2px border-x-2px md:border-t-3px md:border-x-3px rounded-t-full p-3 md:p-4 z-40 hover:pb-5 md:hover:pb-8 transition-all duration-400"
            aria-label="Go to Home Page"
          >
            <figure className="flex items-center">
              <Image src="/images/MindOff_Logo_Icon.png" alt="MindOff Logo" width={48} height={48} className="w-7 h-7 md:w-8 md:h-8 object-cover" />
              <figcaption className="sr-only">MindOff Logo</figcaption>
            </figure>
          </Link>
        </div>
        <Suspense fallback={<TopicsListSkeleton />}>
          <TopicsList topicsList={topicsList} />
        </Suspense>
      </header>
    </>
  );
};

export default HeaderBar;
