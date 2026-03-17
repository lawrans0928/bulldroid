import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-8 items-start">

          {/* Brand */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-3 tracking-wide">
              Bulldroid
            </h3>
            <p className="text-sm leading-relaxed max-w-md">
              Leading the agricultural revolution with intelligent autonomous robots.
            </p>
          </div>

          {/* Support */}
          <div className="md:ml-auto">
            <h4 className="text-white mb-3 font-medium">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Training
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Partners
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-sm text-gray-500 text-center md:text-left">
            ©2026 Bulldroid Agri Robotics Pvt Ltd. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors duration-200">
              <Facebook className="h-5 w-5" />
            </a>

            <a href="#" className="hover:text-white transition-colors duration-200">
              <Twitter className="h-5 w-5" />
            </a>

            <a
              href="https://www.linkedin.com/company/bulldroid-agri-robotics"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-white transition-colors duration-200">
              <Instagram className="h-5 w-5" />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}