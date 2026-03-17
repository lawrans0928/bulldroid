import { Cpu, Leaf, TrendingUp, Zap, Shield, Users } from "lucide-react";

export function AboutUs() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl mb-4">
            About Bulldroid
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are building intelligent agricultural robots to transform traditional farming 
            into a smart, sustainable, and efficient system using AI and automation.
          </p>
        </div>

        {/* MISSION + IMAGE */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-20">

          <div className="space-y-6 animate-slideUp">
            <h3 className="text-3xl font-semibold">Our Mission</h3>
            <p className="text-gray-600">
              Our mission is to empower farmers with cutting-edge robotics and AI solutions 
              that reduce labor, increase productivity, and promote eco-friendly farming practices.
            </p>

            <div className="flex items-center gap-3">
              <Leaf className="text-green-600" />
              <span>Sustainable Agriculture</span>
            </div>

            <div className="flex items-center gap-3">
              <Cpu className="text-blue-600" />
              <span>AI & Automation Driven</span>
            </div>

            <div className="flex items-center gap-3">
              <TrendingUp className="text-purple-600" />
              <span>Increased Productivity</span>
            </div>
          </div>

          <div className="animate-fadeIn">
            <img
              src="/images/1.png"
              alt="robot"
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </div>

        </div>

        {/* WHAT WE DO */}
        <div className="mb-20 text-center animate-fadeIn">
          <h3 className="text-3xl font-semibold mb-6">What We Do</h3>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Bulldroid develops smart agricultural robots capable of weed detection, 
            precision spraying, soil monitoring, and autonomous navigation to help 
            farmers achieve better results with less effort.
          </p>
        </div>

        {/* CORE FEATURES */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition-all duration-500 hover:scale-[1.03]">
            <Zap className="text-yellow-500 mb-4" />
            <h4 className="text-xl mb-2">Automation</h4>
            <p className="text-gray-600">
              Robots operate autonomously, reducing manual labor and increasing efficiency.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition-all duration-500 hover:scale-[1.03]">
            <Shield className="text-red-500 mb-4" />
            <h4 className="text-xl mb-2">Reliability</h4>
            <p className="text-gray-600">
              Built to withstand harsh agricultural environments and operate continuously.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition-all duration-500 hover:scale-[1.03]">
            <Users className="text-blue-500 mb-4" />
            <h4 className="text-xl mb-2">Farmer Friendly</h4>
            <p className="text-gray-600">
              Easy-to-use interface designed for farmers with minimal technical knowledge.
            </p>
          </div>

        </div>

        {/* FOOTER TEXT */}
        <div className="text-center mt-20 animate-fadeIn">
          <p className="text-gray-500">
            🚀 Innovating Agriculture with Technology — Bulldroid
          </p>
        </div>

      </div>
    </section>
  );
}