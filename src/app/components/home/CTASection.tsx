import { Link } from "react-router";
import { ArrowRight, Calendar } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-r from-[#1E3A8A] to-[#1e40af]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#FACC15] text-[#1E3A8A] px-4 py-2 rounded-full">
            <Calendar className="w-4 h-4" />
            <span className="font-semibold text-sm">Limited Seats Available</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Secure Your Child's Future Today
          </h2>
          
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Join Brain Tree English Medium School for quality education in Classes 1 to 7. Admissions are now open for the 2026-27 academic year.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              to="/admissions"
              className="inline-flex items-center justify-center gap-2 bg-[#22C55E] text-white px-8 py-4 rounded-full hover:bg-[#16a34a] transition-colors shadow-lg"
            >
              Apply Now
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#1E3A8A] px-8 py-4 rounded-full hover:bg-gray-100 transition-colors"
            >
              Schedule a Visit
            </Link>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row gap-8 justify-center text-white">
            <div>
              <div className="text-2xl font-bold">+91 12345 67890</div>
              <div className="text-sm text-blue-200">Call for Admission Enquiry</div>
            </div>
            <div className="hidden sm:block w-px bg-white/30"></div>
            <div>
              <div className="text-2xl font-bold">8:00 AM - 5:00 PM</div>
              <div className="text-sm text-blue-200">Monday to Saturday</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
