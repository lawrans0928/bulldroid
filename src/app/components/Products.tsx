import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const products = [
  {
    name: "AgriBot Harvester",
    image: "https://images.unsplash.com/photo-1683628759584-2990629fa49e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbm9tb3VzJTIwZmFybWluZyUyMHRyYWN0b3J8ZW58MXx8fHwxNzcxODUzNjc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Autonomous harvesting robot with precision picking technology. Handles delicate fruits and vegetables with care.",
    specs: ["5-10 acres/day", "99.5% accuracy", "Solar powered"]
  },
  {
    name: "AgriBot Weeder",
    image: "https://images.unsplash.com/photo-1761839257144-297ce252742e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhZ3JpY3VsdHVyZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcxODMzNTY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Smart weeding solution that identifies and removes weeds without damaging crops. Reduces herbicide use by 95%.",
    specs: ["8-12 acres/day", "AI weed detection", "Zero chemicals"]
  },
  {
    name: "AgriBot Scout",
    image: "https://images.unsplash.com/photo-1708251614787-eaf36f10e6e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVjaXNpb24lMjBmYXJtaW5nJTIwZHJvbmV8ZW58MXx8fHwxNzcxODUzNjc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Aerial monitoring drone with multispectral imaging. Provides real-time crop health analysis and early disease detection.",
    specs: ["50 acres/hour", "4K imaging", "Real-time data"]
  }
];

export function Products() {
  return (
    <section className="py-24 bg-white"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Our Product Line</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A complete ecosystem of agricultural robots designed to work together seamlessly.
          </p>
        </div>
        
        <div className="space-y-16">
          {products.map((product, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
            >
              <div className="lg:w-1/2">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="rounded-lg shadow-lg w-full h-[400px] object-cover"
                />
              </div>
              <div className="lg:w-1/2">
                <h3 className="text-3xl mb-4">{product.name}</h3>
                <p className="text-lg text-gray-600 mb-6">{product.description}</p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {product.specs.map((spec, i) => (
                    <span key={i} className="px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm">
                      {spec}
                    </span>
                  ))}
                </div>
                <Button className="bg-green-600 hover:bg-green-700">
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
