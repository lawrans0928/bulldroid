import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";   //logo 

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Bar */}
        <div className="flex items-center justify-between h-16">

          {/* LOGO + COMPANY NAME */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Bulldroid Logo"
              className="h-10 w-auto"
            />

            <div className="leading-tight">
              <p className="text-lg font-bold text-red  -700">
                BULLDROID
              </p>
              <p className="text-xs text-gray-600">
                AGRI ROBOTICS PVT LTD
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">

            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-red-600 font-semibold" : "hover:text-red-600"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? "text-red-600 font-semibold" : "hover:text-red-600"
              }
            >
              Products
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-red-600 font-semibold" : "hover:text-red-600"
              }
            >
              About Us
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-red-600 font-semibold" : "hover:text-red-600"
              }
            >
              Contact Us
            </NavLink>

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

            <NavLink
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-red-600 font-semibold" : ""
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/products"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-red-600 font-semibold" : ""
              }
            >
              Products
            </NavLink>

            <NavLink
              to="/services"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-red-600 font-semibold" : ""
              }
            >
              Technology
            </NavLink>

            <NavLink
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-red-600 font-semibold" : ""
              }
            >
              About Us
            </NavLink>

            <NavLink
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-red-600 font-semibold" : ""
              }
            >
              Contact
            </NavLink>

          </div>
        )}

      </div>
    </nav>
  );
}