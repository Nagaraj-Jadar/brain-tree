import { Link } from "react-router";
import { Phone, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8">
            <div className="inline-block">
              <span className="bg-[#FACC15] text-[#1E3A8A] px-4 py-2 rounded-full text-sm">
                Admissions Open for 2026-27
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E3A8A] leading-tight">
              Building Strong English Foundations
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Quality English medium education for Classes 1 to 7 with experienced teachers, modern facilities, and a nurturing environment for your child's holistic development.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#22C55E] text-white px-8 py-4 rounded-full hover:bg-[#16a34a] transition-colors shadow-lg hover:shadow-xl"
              >
                Enquire Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+911234567890"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#1E3A8A] border-2 border-[#1E3A8A] px-8 py-4 rounded-full hover:bg-[#1E3A8A] hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-[#1E3A8A]">500+</div>
                <div className="text-sm text-gray-600">Happy Students</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#1E3A8A]">25+</div>
                <div className="text-sm text-gray-600">Expert Teachers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#1E3A8A]">10+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-[#22C55E] rounded-[3rem] transform rotate-6"></div>
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1503891093533-726893813d07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHByaW1hcnklMjBzY2hvb2wlMjBzdHVkZW50JTIwaG9sZGluZyUyMGJvb2tzJTIwdW5pZm9ybXxlbnwxfHx8fDE3NzIzMDIwMzF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Happy primary school student"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
