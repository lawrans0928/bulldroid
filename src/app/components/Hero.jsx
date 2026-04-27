import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
export function Hero() {
  const navigate = useNavigate();
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/website-bgro.png"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Text */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="max-w-3xl">
         <div>
           <h1 className="text-5xl md:text-7xl font-extrabold text-white whitespace-nowrap">
            Reinventing Farming
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-white mt-2">
              We make the hardest farm work effortless
              </h2>
              </div>
              <br />
              <p className="text-sm md:text-base text-white leading-relaxed">
                We are building an affordable, multipurpose robot that helps farmers automate the toughest jobs.
                <br />
                We aim to make smart agricultural automation accessible to every farmer in India.
              </p>
              <br />
              <div className="flex gap-4">
  <Button
    size="lg"
    style={{ padding: "14px 24px" }}
    className="bg-red-600 hover:bg-red-700 text-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg flex items-center"
    onClick={() => navigate("/services")}
  >
    This Isn’t A Machine. Tap To See Why
    <ArrowRight className="ml-2 h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" />
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
