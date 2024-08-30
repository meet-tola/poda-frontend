"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { BellIcon, HomeIcon, LibraryIcon, MenuIcon, MicIcon, SearchIcon, TrendingUpIcon, UsersIcon } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <header className="col-span-full flex items-center justify-between border-b px-4 py-3 lg:px-6">
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="mr-2">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] sm:w-[300px]">
              <div className="flex flex-col gap-4 py-4">
                <h2 className="px-2 text-lg font-semibold tracking-tight">Menu</h2>
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
                <Button className="mt-4">
                  <MicIcon className="mr-2 h-4 w-4" />
                  Create Podcast
                </Button>
                <div className="mt-4">
                  <h3 className="mb-2 px-2 text-lg font-semibold">Live Podcasts</h3>
                  <div className="space-y-2">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <Button key={i} variant="ghost" className="w-full justify-start">
                        <div className="flex items-center gap-2">
                          <div className="relative">
                            <img
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
              </div>
            </SheetContent>
          </Sheet>
          <img src="/assets/header-logo.svg" alt="Poda" className="h-8 object-contain" />

        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsSearchOpen(!isSearchOpen)}>
            <SearchIcon className="h-6 w-6" />
          </Button>
          <form className="hidden lg:block flex-1 mx-4">
            <div className="relative">
              <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                className="w-full bg-gray-100 pl-8 pr-4"
                placeholder="Search podcasts..."
                type="search"
              />
            </div>
          </form>
          <Button className="hidden sm:inline-flex">Create</Button>
          <BellIcon className="h-6 w-6" />
          <img
            alt="Profile"
            className="h-8 w-8 rounded-full"
            height="32"
            src="https://via.placeholder.com/32"
            style={{
              aspectRatio: "32/32",
              objectFit: "cover",
            }}
            width="32"
          />
        </div>
      </header>
      {isSearchOpen && (
        <div className="absolute top-[60px] left-0 right-0 bg-white p-4 shadow-md lg:hidden">
          <Input
            className="w-full bg-gray-100"
            placeholder="Search podcasts..."
            type="search"
          />
        </div>
      )}
    </>
  );
}
