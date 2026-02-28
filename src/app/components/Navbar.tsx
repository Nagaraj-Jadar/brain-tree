import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, GraduationCap } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Academics", path: "/academics" },
    { name: "Admissions", path: "/admissions" },
    { name: "Facilities", path: "/facilities" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#1E3A8A] rounded-full flex items-center justify-center">
              <GraduationCap className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#1E3A8A] leading-tight">
                Brain Tree
              </h1>
              <p className="text-xs text-gray-600">English Medium School</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors ${
                  isActive(link.path)
                    ? "text-[#1E3A8A]"
                    : "text-gray-700 hover:text-[#1E3A8A]"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/admissions"
              className="bg-[#22C55E] text-white px-6 py-2.5 rounded-full hover:bg-[#16a34a] transition-colors"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2.5 rounded-lg transition-colors ${
                  isActive(link.path)
                    ? "bg-[#1E3A8A] text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/admissions"
              onClick={() => setIsOpen(false)}
              className="block bg-[#22C55E] text-white px-4 py-2.5 rounded-lg text-center hover:bg-[#16a34a] transition-colors"
            >
              Apply Now
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
