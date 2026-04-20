import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // ✅ get current path

  const navItem =
    "relative px-4 py-2 rounded-md border border-transparent overflow-hidden transition-all duration-300 hover:border-red-600 hover:text-red-600 hover:text-lg before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-red-500/30 before:to-transparent before:-translate-x-full before:transition-transform before:duration-500 hover:before:translate-x-full";

  // ✅ function to apply active style
  const getNavClass = (path) =>
    `${navItem} ${
      location.pathname === path ? "text-red-600 border-red-600" : ""
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar */}
        <div className="flex items-center justify-between h-16">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Bulldroid Logo" className="h-13 w-auto" />

            <div className="leading-tight">
              <p className="text-lg font-bold text-red-500 hover:text-green-700">
                BULLDROID
              </p>
              <p className="text-xs text-gray-600">AGRI ROBOTICS PVT LTD</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/" className={getNavClass("/")}>
              Home
            </Link>

            <Link to="/services" className={getNavClass("/services")}>
              Products
            </Link>

            <Link to="/about" className={getNavClass("/about")}>
              About Us
            </Link>

            <Link to="/contact" className={getNavClass("/contact")}>
              Contact
            </Link>

            <Link to="/contact">
              {/* <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-all duration-300">
                Request Demo
              </button> */}
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            className={`md:hidden p-2 rounded-md transition ${
              isMenuOpen ? "bg-red-600 text-white" : "bg-transparent"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t flex flex-col gap-4">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className={getNavClass("/")}>
              Home
            </Link>

            <Link to="/services" onClick={() => setIsMenuOpen(false)} className={getNavClass("/services")}>
              Products
            </Link>

            <Link to="/about" onClick={() => setIsMenuOpen(false)} className={getNavClass("/about")}>
              About Us
            </Link>

            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className={getNavClass("/contact")}>
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}