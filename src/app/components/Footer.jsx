import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-10 mb-10 items-start">
          
          {/* Brand */}
          <div>
            <p className="text-4xl leading-relaxed max-w-md text-gray-400">
              Reinventing Farming
            </p>
          </div>

          {/* Right Side - Location & Email */}
          <div className="flex flex-col gap-4 md:items-end text-sm">

            {/* Location (Clickable with hover + map redirect) */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Alagappa+Incubation+Forum+Karaikudi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-red-500 transition-all duration-300"
            >
              <MapPin className="h-4 w-4" />
              <span>Alagappa Incubation Forum, Karaikudi</span>
            </a>

            {/* Email (redirect to Contact page) */}
            <Link 
              to="/contact"
              className="flex items-center gap-2 hover:text-red-500 transition-all duration-300"
            >
              <Mail className="h-4 w-4" />
              <span>ceo@bulldroid.in</span>
            </Link>

          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-center gap-4 relative">
          
          {/* Centered Copyright Line */}
          <p className="text-sm text-gray-500 text-center">
            ©2026 Bulldroid Agri Robotics Pvt Ltd. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 md:absolute md:right-0">
            <a href="#" className="p-2 rounded-full hover:bg-gray-800 hover:text-red-500 transition-all duration-300">
              <Twitter className="h-5 w-5" />
            </a>

            <a
              href="https://www.linkedin.com/company/bulldroid-agri-robotics"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-800 hover:text-red-500 transition-all duration-300"
            >
              <Linkedin className="h-5 w-5" />
            </a>

            <a 
              href="https://www.instagram.com/bulldroid_agri_robotics?igsh=c2R5azZ6ZTlyamE2" 
              className="p-2 rounded-full hover:bg-gray-800 hover:text-red-500 transition-all duration-300"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}