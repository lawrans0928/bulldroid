import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";

export function Hero() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center">

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://static.vecteezy.com/system/resources/thumbnails/042/053/870/small_2x/ai-generated-an-advanced-autonomous-robot-equipped-with-sensors-and-ai-technology-is-operating-in-an-agricultural-field-free-photo.jpg"
          alt="Agriculture robot in field"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Text */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl text-white mb-6">
            Reinventing Farming with Robotics
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Bulldroid builds semi-autonomous agricultural robots designed for Indian farming conditions.
          </p>

          <div className="flex gap-4">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 text-white border-white hover:bg-white/20"
              onClick={() => setShowVideo(true)}
            >
              Watch Demo
            </Button>
          </div>
        </div>
      </div>

      {/* VIDEO POPUP */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">

          <div className="relative w-[90%] md:w-[700px]">

            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-10 right-0 text-white text-2xl"
            >
              ✕
            </button>

            <iframe
              width="100%"
              height="400"
              src="https://www.youtube-nocookie.com/embed/jBtZF8CB4HU?start=120"
              title="Bulldroid Demo"
              allowFullScreen
              className="rounded-lg"
            ></iframe>

          </div>
        </div>
      )}

    </section>
  );
}