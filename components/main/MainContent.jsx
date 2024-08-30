"use client";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export function MainContent() {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      carouselRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <main className="row-start-2 overflow-auto p-4">
      <section className="mb-8 relative">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Recommended Podcasts</h2>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("left")}
            >
              <ChevronLeftIcon className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("right")}
            >
              <ChevronRightIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <ScrollArea>
          <div ref={carouselRef} className="flex space-x-4 pb-4">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="flex-none w-[200px]">
                <Image
                  alt="Podcast cover"
                  className="aspect-square rounded-md object-cover"
                  height="200"
                  src="https://via.placeholder.com/200"
                  width="200"
                />
                <h3 className="mt-2 font-semibold">Podcast Title {i + 1}</h3>
                <p className="text-sm text-gray-500">Host Name</p>
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </section>
      <section>
        <h2 className="mb-4 text-2xl font-bold">Trending Now</h2>
        <div className="grid gap-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex items-center gap-4">
              <Image
                alt="Podcast cover"
                className="h-16 w-16 rounded-md object-cover"
                height="64"
                src="https://via.placeholder.com/64"
                width="64"
              />
              <div className="flex-1">
                <h3 className="font-semibold">Trending Podcast {i + 1}</h3>
                <p className="text-sm text-gray-500">Host Name</p>
              </div>
              <Button variant="outline">Listen</Button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
