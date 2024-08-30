"use client";
import { LeftSidebar } from "@/components/main/LeftSidebar";
import { MainContent } from "@/components/main/MainContent";
import { Navbar } from "@/components/main/Navbar";
import { RightSidebar } from "@/components/main/RightSidebar";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  FastForwardIcon,
  PauseIcon,
  PlayIcon,
  RepeatIcon,
  VolumeIcon,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="grid h-screen grid-cols-1 grid-rows-[60px_1fr_80px] lg:grid-cols-[240px_1fr] xl:grid-cols-[240px_1fr_300px]">
      {/* Navbar */}
      <Navbar />
      {/* Left Sidebar */}
      <LeftSidebar />

      {/* Main Content */}
      <MainContent />

      {/* Right Sidebar */}
      <RightSidebar />
      
      {/* Sticky Player */}
      <div className="Sticky col-span-full flex items-center justify-between border-t bg-background px-4 py-2">
        <div className="flex items-center gap-4">
          <Image
            alt="Now playing"
            className="h-16 w-16 rounded-md object-cover"
            height="64"
            src="/placeholder.svg"
            width="64"
          />
          <div>
            <h3 className="font-semibold">Now Playing Podcast</h3>
            <p className="text-sm text-gray-500">Host Name</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <FastForwardIcon className="h-6 w-6 rotate-180" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? (
              <PauseIcon className="h-6 w-6" />
            ) : (
              <PlayIcon className="h-6 w-6" />
            )}
          </Button>
          <Button variant="ghost" size="icon">
            <FastForwardIcon className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon">
            <RepeatIcon className="h-6 w-6" />
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <VolumeIcon className="h-6 w-6" />
          <Slider className="w-24" defaultValue={[50]} max={100} step={1} />
        </div>
      </div>
    </div>
  );
}
