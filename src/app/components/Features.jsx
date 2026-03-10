import { Cpu, Leaf, TrendingUp, Zap, Shield, Users } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "AI-Powered Intelligence",
    description: "Advanced machine learning algorithms enable our robots to make real-time decisions.",
    image: "/images/1.png"
  },
  {
    icon: Leaf,
    title: "Sustainable Farming",
    description: "Reduce chemical usage by up to 90% with precision targeting.",
    image: "/images/2.png"
  },
  {
    icon: TrendingUp,
    title: "Increased Yield",
    description: "Achieve up to 30% higher crop yields through data-driven insights.",
    image: "/images/3.png"
  },
  {
    icon: Zap,
    title: "24/7 Operation",
    description: "Our robots work around the clock to maximize productivity.",
    image: "/images/4.png"
  },
  {
    icon: Shield,
    title: "Weather Resistant",
    description: "Built to withstand harsh farming conditions.",
    image: "/images/5.png"
  },
  {
    icon: Users,
    title: "Easy Integration",
    description: "Control everything easily from your smartphone.",
    image: "/images/1.png"
  }
];

export function Features() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">
            Farmers Survey
          </h2>
          <p className="text-xl text-gray-600">
            Our team surveyed more than 50 farmers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">

              {/* Image with correct 5:4 ratio */}
              <div className="aspect-[5/4]">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-green-600" />
                </div>

                <h3 className="text-xl mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}