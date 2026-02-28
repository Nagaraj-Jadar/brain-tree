import { Link } from "react-router";
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, GraduationCap } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1E3A8A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-[#1E3A8A]" />
              </div>
              <div>
                <h3 className="font-bold">Brain Tree</h3>
                <p className="text-xs text-gray-300">English Medium School</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Building strong English foundations for primary education with qualified teachers and modern facilities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/academics" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Academics
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Admissions
                </Link>
              </li>
              <li>
                <Link to="/facilities" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Facilities
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-300">
                  123 Education Street, Model Town, City - 123456
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+911234567890" className="text-sm text-gray-300 hover:text-white">
                  +91 12345 67890
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:info@braintreeschool.com" className="text-sm text-gray-300 hover:text-white">
                  info@braintreeschool.com
                </a>
              </li>
            </ul>
          </div>

          {/* School Hours */}
          <div>
            <h3 className="font-semibold mb-4">School Hours</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Monday - Friday</li>
              <li>8:00 AM - 2:00 PM</li>
              <li className="pt-2">Saturday</li>
              <li>8:00 AM - 12:00 PM</li>
              <li className="pt-2 text-gray-400">Sunday: Closed</li>
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-300">
            © 2026 Brain Tree English Medium School. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
