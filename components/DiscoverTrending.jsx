'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { PlayCircle } from "lucide-react"

const podcastTrends = [
  { id: 1, title: "Nigerian Tech Chronicles", category: "Technology", image: "https://placehold.co/128x128", description: "Exploring the latest in Nigerian tech innovations and startups." },
  { id: 2, title: "Naija Education Today", category: "Education", image: "https://placehold.co/128x128", description: "Discussing current trends and challenges in Nigerian education." },
  { id: 3, title: "Nollywood Insider", category: "Shows", image: "https://placehold.co/128x128", description: "Behind-the-scenes look at Nigeria's booming film industry." },
  { id: 4, title: "Lagos Startup Scene", category: "Technology", image: "https://placehold.co/128x128", description: "Interviews with founders shaping Lagos' tech ecosystem." },
  { id: 5, title: "African History Unearthed", category: "Education", image: "https://placehold.co/128x128", description: "Uncovering forgotten stories from Africa's rich past." },
  { id: 6, title: "Afrobeats Unplugged", category: "Shows", image: "https://placehold.co/128x128", description: "Acoustic sessions and interviews with Afrobeats artists." },
]

export default function DiscoverTrending() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredPodcasts = activeCategory === 'All' 
    ? podcastTrends 
    : podcastTrends.filter(podcast => podcast.category === activeCategory)

  return (
    <section id="features" className="bg-[#f7f7fb] py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-12">
        <div className="flex flex-col items-center space-y-8 md:space-y-12">
          <div className="w-full flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <h2 className="font-bold text-3xl md:text-4xl mb-2">Discover Trending Podcasts</h2>
              <p className="text-[#797B80]">Explore some of the most popular podcasts on PodA</p>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {['All', 'Technology', 'Education', 'Shows'].map((category) => (
                <Button 
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
            {filteredPodcasts.map((podcast) => (
              <div key={podcast.id} className="bg-white rounded-lg shadow-md h-32 overflow-hidden flex">
                <img src={podcast.image} alt={podcast.title} className="w-32 h-32 object-cover" />
                <div className="flex-grow p-4">
                  <h3 className="font-semibold text-sm md:text-lg mb-1">{podcast.title}</h3>
                  <p className="text-[12px] md:text-sm text-gray-500 mb-2">{podcast.category}</p>
                  <p className="text-[12px] md:text-sm text-gray-700">{podcast.description}</p>
                </div>
                <div className="flex items-center pr-4">
                  <Link href="/signup">
                    <Button 
                      size="icon"
                      variant="ghost"
                      className="hover:bg-gray-100"
                    >
                      <PlayCircle className="h-8 w-8 text-primary" />
                      <span className="sr-only">Sign up to play {podcast.title}</span>
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}