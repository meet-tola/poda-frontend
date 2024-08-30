import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";
const FirstSection = () => {
  return (
    <>
      <div className="flex mt-[6rem] justify-between max-lg:items-center max-lg:flex-col w-full mb-5 px-4 md:px-16">
        <div className="text-[55px] md:w-[700px] w-96 max-lg:text-center max-lg:text-[30px] max-lg:leading-[40px] leading-[60px] max-lg:mb-2 font-bold max-lg:tracking-[0px] mr-32 max-lg:mr-0">
          Create, Listen, and Share Audio Content Seamlessly.
        </div>
        <div className="w-[450px] mr-36 max-lg:mr-0 max-lg:w-[95%] max-lg:text-center ">
          <div className="text-gray-500 max-lg:mt-2">
            Join PodA to explore a world of podcasts and audiobooks, infused
            with rich African culture. Connect with creators and content that
            resonates with your experiences and heritage.
          </div>
          <div className="flex items-center gap-2 my-4 max-lg:w-full max-lg:justify-center max-lg:mt-5">
             <Link href="/signup"> 
             <Button>Listen Now </Button>
             </Link> 
            <Link href="/signup">
              <Button variant="outline">
                Create a Podcast
                <div className="ml-2 relative">
                  <ArrowUpRight />
                </div>
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="my-3" />
    </>
  );
};

export default FirstSection;
