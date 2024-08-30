import { Sparkles } from "lucide-react"

const WhyCards = () => {
  const whyData = [
    {
      title: "Locally Based Podcast",
      text: "Focused on the Nigerian podcast industry, with local language",
    },
    {
      title: "AI Efficiency",
      text: "AI-Powered tools to enhance audio quality and automate fine-tuning",
    },
    {
      title: "Easy Distribution",
      text: "Share your content across various podcast streaming platforms effortlessly.",
    },
    {
      title: "Unified Account",
      text: "One account for all your needs whether you're a listener or a creator",
    },
    {
      title: "Invite Creators",
      text: "Invite your favourite personalities to join PodA and share their content.",
    },
    {
      title: "Live Podcasts",
      text: "Stream live content anytime, anywhere, like a mini radio FM",
    },
    {
      title: "Scheduling",
      text: "Schedule podcasts or live streams to be published at your convenience",
    },
    {
      title: "In-App Microphone",
      text: "Record high-quality with just a tap, no expensive setups required",
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {whyData.map((el, i) => (
        <div key={i} className="bg-gray-800 rounded-lg p-6 shadow-lg transition-transform hover:scale-105">
          <div className="mb-4 text-3xl text-white">
            <Sparkles fill="white" strokeWidth={0} />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-white">{el.title}</h3>
          <p className="text-sm text-gray-300">{el.text}</p>
        </div>
      ))}
    </div>
  )
}

export default function Why() {
  return (
    <section id="about_us" className="py-16 px-4 sm:px-6 lg:px-12 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-4">Why Choose PodA?</h2>
        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12">
          At PodA, we strive to provide a seamless and enriching audio content experience tailored to the Nigerian audience.
        </p>
        <WhyCards />
      </div>
    </section>
  )
}