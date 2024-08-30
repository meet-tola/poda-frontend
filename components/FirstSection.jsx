import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

export default function FirstSection() {
  return (
    <section className="container mx-auto px-4 md:px-12 mt-10 py-16 md:py-24">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-1 lg:gap-16">
        <div className="lg:w-1/2">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-center lg:text-left mb-6">
            Create, Listen, and Share Audio Content Seamlessly.
          </h1>
        </div>
        <div className="lg:w-1/2 max-w-2xl">
          <p className="text-gray-500 text-lg text-center lg:text-left mb-6">
            Join PodA to explore a world of podcasts and audiobooks, infused
            with rich African culture. Connect with creators and content that
            resonates with your experiences and heritage.
          </p>
          <div className="flex flex-row items-center justify-center lg:justify-start gap-4">
            <Link href="/signup" passHref>
              <Button className="w-full sm:w-auto">Listen Now</Button>
            </Link>
            <Link href="/signup" passHref>
              <Button variant="outline" className="w-full sm:w-auto">
                Create a Podcast
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}