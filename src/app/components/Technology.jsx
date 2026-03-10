import { Camera, Brain, Battery, Wifi } from "lucide-react";

const techFeatures = [
  {
    icon: Camera,
    title: "Computer Vision",
    description: "Advanced image recognition with multi-spectral cameras for precise crop and weed identification."
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Self-improving AI models that learn from your farm's unique conditions and patterns."
  },
  {
    icon: Battery,
    title: "Long Battery Life",
    description: "Up to 16 hours of continuous operation with smart power management and solar charging."
  },
  {
    icon: Wifi,
    title: "Cloud Connectivity",
    description: "Real-time data sync and remote monitoring through our secure cloud platform."
  }
];

export function Technology() {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Advanced Technology</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Powered by cutting-edge innovations that push the boundaries of what's possible in agriculture.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {techFeatures.map((feature, index) => (
            <div key={index} className="flex gap-6 p-6 bg-gray-800 rounded-lg">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-green-600 rounded-lg flex items-center justify-center">
                  <feature.icon className="h-7 w-7" />
                </div>
              </div>
              <div>
                <h3 className="text-xl mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
