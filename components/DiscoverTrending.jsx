import { Button } from "./ui/button";

const DiscoverTrending = () => {
  return (
    <>
      <div id="features" className="pt-20 flex flex-col items-center min-h-[100vh] py-5 bg-[#f7f7fb] w-full px-4 md:px-16">
        <div className="min-h-[90vh] flex flex-col items-center w-full">
          <div className="flex items-center justify-between w-full max-lg:flex-col ">
            <div className="flex md:block items-center flex-col justify-center text-center max-lg:mb-3">
              <div className="font-bold text-3xl md:text-4xl mb-2">
                Discover Trending Podcasts
              </div>
              <div className=" text-[#797B80]">
                Explore some of the most popular podcasts on PodA
              </div>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Button>All</Button>
              <Button variant="outline">Technology</Button>
              <Button variant="outline">Education</Button>
              <Button variant="outline">Shows</Button>
            </div>
          </div>
          <div className="w-full grid grid-cols-2 gap-4 max-lg:grid-cols-1 mt-3">
            {/* <Trends /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscoverTrending;
