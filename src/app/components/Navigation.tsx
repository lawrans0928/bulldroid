import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Bar */}
        <div className="flex items-center justify-between h-16">
          <span className="text-2xl text-green-600 font-bold">
            Bulldroid
          </span>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-700 hover:text-green-600">
              Home
            </Link>

            <Link to="/services" className="text-gray-700 hover:text-green-600">
              Products
            </Link>

            <Link to="/services" className="text-gray-700 hover:text-green-600">
              Technology
            </Link>

            <Link to="/about" className="text-gray-700 hover:text-green-600">
              About Us
            </Link>

            <Link to="/contact" className="text-gray-700 hover:text-green-600">
              Contact
            </Link>

            <Button className="bg-green-600 hover:bg-green-700">
              Request Demo
            </Button>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t flex flex-col gap-4">
            <Link to="/" onClick={()=>setIsMenuOpen(false)}>Home</Link>
            <Link to="/services" onClick={()=>setIsMenuOpen(false)}>Products</Link>
            <Link to="/services" onClick={()=>setIsMenuOpen(false)}>Technology</Link>
            <Link to="/about" onClick={()=>setIsMenuOpen(false)}>About Us</Link>
            <Link to="/contact" onClick={()=>setIsMenuOpen(false)}>Contact</Link>
          </div>
        )}

      </div>
    </nav>
  );
}