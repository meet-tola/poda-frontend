"use client";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { HomeIcon, LibraryIcon, MicIcon, TrendingUpIcon, UsersIcon } from "lucide-react";
import Image from "next/image";

export function LeftSidebar() {
  return (
    <aside className="hidden lg:block row-start-2 border-r">
      <ScrollArea className="h-full">
        <div className="flex flex-col gap-2 p-4">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Menu</h2>
          <Button className="justify-start" variant="ghost">
            <HomeIcon className="mr-2 h-4 w-4" />
            Home
          </Button>
          <Button className="justify-start" variant="ghost">
            <LibraryIcon className="mr-2 h-4 w-4" />
            Library
          </Button>
          <Button className="justify-start" variant="ghost">
            <UsersIcon className="mr-2 h-4 w-4" />
            Following
          </Button>
          <Button className="justify-start" variant="ghost">
            <TrendingUpIcon className="mr-2 h-4 w-4" />
            Trending
          </Button>
        </div>
        <div className="p-4">
          <Button className="w-full">
            <MicIcon className="mr-2 h-4 w-4" />
            Create Podcast
          </Button>
        </div>
        <div className="p-4">
          <h3 className="mb-2 px-2 text-lg font-semibold">Live Podcasts</h3>
          <div className="space-y-2">
            {Array.from({ length: 3 }).map((_, i) => (
              <Button key={i} variant="ghost" className="w-full justify-start">
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Image
                      alt="Podcast cover"
                      className="h-8 w-8 rounded-full object-cover"
                      height="32"
                      src="https://via.placeholder.com/32"
                      width="32"
                    />
                    <div className="absolute right-0 top-0 h-3 w-3 rounded-full bg-red-500 ring-2 ring-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-medium">Live Podcast {i + 1}</p>
                    <p className="text-xs text-gray-500">Host Name</p>
                  </div>
                </div>
              </Button>
            ))}
          </div>
        </div>
      </ScrollArea>
    </aside>
  );
}
