import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
export function Hero() {
  const navigate=useNavigate();
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center">

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="../../../src/assets/herosectionbackground.jpg"
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
          Bulldroid is building affordable robots that help farmers automate repetitive farming tasks such as seed broadcasting, fertilizer spreading, and pesticide spraying.
          </p>

          <div className="flex gap-4">
            <Button size="lg" className="bg-red-600 hover:bg-red -700" onClick={() => navigate("/products")}>
              Products
              <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          </div>
        </div>
      </div>

      {/* VIDEO POPUP */}
      {/* {showVideo && (
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
        </div> */}
      {/* )} */}

    </section>
  );
}