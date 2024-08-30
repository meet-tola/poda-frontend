"use client";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";

export function RightSidebar() {
  return (
    <aside className="hidden lg:block row-start-2 border-l">
      <ScrollArea className="h-full p-4">
        <section className="mb-8">
          <h2 className="mb-4 text-lg font-semibold">Top Creators</h2>
          <div className="space-y-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="relative">
                  <Image
                    alt={`Creator ${i + 1}`}
                    className="h-10 w-10 rounded-full object-cover"
                    height="40"
                    src="https://via.placeholder.com/40"
                    width="40"
                  />
                  <div className="absolute right-0 top-0 h-3 w-3 rounded-full bg-green-500 ring-2 ring-white" />
                </div>
                <div>
                  <p className="text-sm font-medium">Creator {i + 1}</p>
                  <p className="text-xs text-gray-500">Podcast Name</p>
                </div>
                <Button variant="outline" className="ml-auto">
                  Follow
                </Button>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-lg font-semibold">Latest Reviews</h2>
          <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="space-y-2">
                <div className="flex items-center gap-2">
                  <Image
                    alt={`User ${i + 1}`}
                    className="h-6 w-6 rounded-full object-cover"
                    height="24"
                    src="https://via.placeholder.com/24"
                    width="24"
                  />
                  <p className="text-sm font-medium">User {i + 1}</p>
                </div>
                <p className="text-sm text-gray-600">
                  orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                </p>
              </div>
            ))}
          </div>
        </section>
      </ScrollArea>
    </aside>
  );
}
