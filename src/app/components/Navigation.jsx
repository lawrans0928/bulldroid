import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const navItem =
  //   "relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full hover:text-green-700";
  const navItem =
  "relative px-4 py-2 rounded-md border border-transparent overflow-hidden transition-all duration-300 hover:border-red-600 hover:text-red-600 hover:text-lg before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-red-500/30 before:to-transparent before:-translate-x-full before:transition-transform before:duration-500 hover:before:translate-x-full";
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar */}
        <div className="flex items-center justify-between h-16">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Bulldroid Logo" className="h-10 w-auto" />

            <div className="leading-tight">
              <p className="text-lg font-bold text-red-500 hover:text-green-700">
                BULLDROID
              </p>
              <p className="text-xs text-gray-600">AGRI ROBOTICS PVT LTD</p>
            </div>
          </Link>
          {/* Desktop Menu */}
          {/* <div className="hidden md:flex items-center gap-8 gr  duration-300 rounded-md">

            <Link to="/" className={navItem}>
              Home
            </Link>

            <Link to="/services" className={navItem}>
              Products
            </Link>

            {/* <Link to="/services" className={navItem}>
              Technology
            </Link> */}
          {/* <Link to="/about" className={navItem}>
              About Us
            </Link>

            <Link to="/contact" className={navItem}>
              Contact
            </Link>

            <Link to="/contact">
              {/* <Button className="bg-red-600 hover:bg-green-700">
                Request Demo
              </Button> */}
          {/* </Link>

          </div> */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/" className={navItem}>
              Home
            </Link>

            <Link to="/services" className={navItem}>
              Products
            </Link>

            <Link to="/about" className={navItem}>
              About Us
            </Link>

            <Link to="/contact" className={navItem}>
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
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>

            <Link to="/services" onClick={() => setIsMenuOpen(false)}>
              Products
            </Link>

            {/* <Link to="/services" onClick={() => setIsMenuOpen(false)}>
              Technology
            </Link> */}

            <Link to="/about" onClick={() => setIsMenuOpen(false)}>
              About Us
            </Link>

            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
