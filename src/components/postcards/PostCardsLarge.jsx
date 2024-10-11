import React from "react";
import Link from "next/link";
import Image from "next/image";
// --- POST CARDS LARGE FUNCTIONALITIES ---
// 1. 3 cards per row on screens above medium ✔️
// 2. scrollable single row on small screens ✔️
// 3. Outline to align responsively and properly ✔️
// 4. Text and Padding Responsiveness for different screens ✔️
// 5. Responsive image with square aspect ratio✔️
// 6. Dynamic Card background Color ✔️


export const PostCardsLarge = () => {
  const illustrateionLink = "https://cdn.jsdelivr.net/gh/mindoffdev/illustrate-ions@root/"
  const postBaseLink = "/posts/"
  const cardsData = [
    {
      id: 1,
      src: "cartoon-illustration-of-small-pond-with-lillypads-and-lotus-in-the-middle-surrounded-by-stones-and-plants-with-lavender-background.jpeg",
      title: "7 Things to look out for while building Backyard Pond",
      topic: "design",
      bgcolor: "#F0ECFD",
    },
    {
      id: 2,
      src: "cartoon-illustration-of-smartphone-homepage-filled-with-app-icons-surrounded-by-random-icons-with-yellow-background.jpeg",
      title: "How to do Design a snappy and fast paced app",
      topic: "lifestyle",
      bgcolor: "#FEC85B" ,
    },
    {
      id: 3,
      src: "cartoon-illustration-of-burger-filled-with-onion-lettuce-meat-patty-cheese-with-teal-background.jpeg",
      title: "Easy Healthy Burger for Everyday Breakfast",
      topic: "food",
      bgcolor: "#B9E3D5",
    },
    {
      id: 4,
      src: "cartoon-illustration-of-windows-laptop-with-grey-background.jpeg",
      title: "7 Things to look out for while building Backyard Pond",
      topic: "design",
      bgcolor: "#EBEAE5",
    },
    {
      id: 5,
      src: "cartoon-illustration-of-gray-dslr-style-camera-with-mild-orange-background.jpeg",
      title: "How to do Design a snappy and fast paced app",
      topic: "lifestyle",
      bgcolor: "#febba1" ,
    },
    {
      id: 6,
      src: "cardtoon-style-3d-minimalistic-retro-style-app-inside-a-phone-surrounded-by-minimalists-objects-with-green-background.jpeg",
      title: "Easy Healthy Burger for Everyday Breakfast",
      topic: "food",
      bgcolor: "#7cc49e",
    },
    // Add more cards as needed
  ];
  return (
    <div className="flex md:flex-wrap overflow-x-auto scrollable md:overflow-x-hidden border-y-black border-t-2px md:border-t-3px overscroll-none w-full">
      {cardsData.map((card, index) => (
        <Link
          className={`min-w-64 md:min-w-0 md:w-1/3 p-1 md:p-2 border-x-black border-x-1px md:border-x-1.5px border-b-black border-b-2px md:border-b-3px first:border-l-0 last:border-r-0 ${((index + 3) % 3 === 0) ? 'md:border-l-0' : ''} ${((index + 1) % 3 === 0) ? 'md:border-r-0' : ''} transition-all duration-200 ease-in-out hover:brightness-95 active:brightness-95`}
          key={card.id}
          style={{ backgroundColor: card.bgcolor }}
          href={postBaseLink + card.title}
        >
          <div className="w-full aspect-w-1 aspect-h-1 lg:px-10">
            <Image
              src={illustrateionLink + card.src}
              alt={card.title}
              width={500}
              height={500}
              className="w-full h-full "
            />
          </div>
          <div className="mt-4 p-2 md:p-3 lg:p-4">
          <p className="font-sans font-semibold text-xs lg:text-sm uppercase tracking-wide mb-2 opacity-50">{card.topic}</p>
            <h2 className="text-lg md:text-xl lg:text-2xl font-extrabold font-serif ">{card.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PostCardsLarge;
