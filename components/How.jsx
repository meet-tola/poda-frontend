import React from "react";
import Props from "@/utils/props";
import { BadgePlus, LogIn, Podcast, Search, Share2 } from "lucide-react";
const How = () => {
  return (
    <>
      <div
        id="how_it_works"
        className="w-full max-md:w-full flex flex-col items-center justify-center px-4 md:px-16 "
      >
        <div className="flex items-center flex-col justify-center text-center mt-8">
          <div className="font-bold text-3xl md:text-4xl mb-2 ">
            How It Works
          </div>
          <div className=" text-[#797B80]">
            Getting started with PodA - A step by step Guide
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row items-end justify-center gap-4">
          <img alt="Listen" src="/assets/listen.png" className="w-[600px] object-cover" />
          <div className="flex flex-col w-full items-start gap-4">
            <Props
              big="Sign Up"
              small="Create your free account on PodA"
              icons={<LogIn size={20} />}
            />
            <Props
              big="Explore"
              small="Browse and listen to a wide range of podcasts and audiobooks."
              icons={<Search size={20} />}
            />
            <Props
              big="Create"
              small="Use our AI-powered tools to create easily to fine-tune your own audio content."
              icons={<BadgePlus size={15} />}
            />
            <Props
              big="Share"
              small="Distribute your content easily to reach a larger audience."
              icons={<Share2 size={15} />}
            />
            <Props
              big="Engage"
              small="Interact with creators and listeners through comments and reviews."
              icons={<Podcast size={15} />}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default How;
