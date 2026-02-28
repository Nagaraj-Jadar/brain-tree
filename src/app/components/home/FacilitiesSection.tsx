import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function FacilitiesSection() {
  const facilities = [
    {
      title: "Smart Classrooms",
      description: "Digital learning with projectors and interactive boards",
      image: "https://images.unsplash.com/photo-1758685733530-2c5210b03338?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzbWFydCUyMGNsYXNzcm9vbSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcyMzAyMDMyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Well-Stocked Library",
      description: "Wide collection of books for all age groups",
      image: "https://images.unsplash.com/photo-1767356326735-2da0a10cf1f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBsaWJyYXJ5JTIwYm9va3MlMjBjaGlsZHJlbnxlbnwxfHx8fDE3NzIyMTM1NzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Computer Lab",
      description: "Modern computers with internet and learning software",
      image: "https://images.unsplash.com/photo-1766297247924-6638d54e7c89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMGxhYiUyMHN0dWRlbnRzJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzcyMjY3NjQ0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Playground",
      description: "Safe outdoor space for sports and physical activities",
      image: "https://images.unsplash.com/flagged/photo-1551398766-dd525d7c6175?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBwbGF5Z3JvdW5kJTIwY2hpbGRyZW4lMjBwbGF5aW5nfGVufDF8fHx8MTc3MjE3NDU5MXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Transportation",
      description: "Safe and reliable school bus service with trained drivers",
      image: "https://images.unsplash.com/photo-1599456825458-ebe1463315e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBidXMlMjB0cmFuc3BvcnRhdGlvbnxlbnwxfHx8fDE3NzIzMDIwMzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  return (
    <section className="py-16 bg-[#F3F4F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[#22C55E] font-semibold">Our Infrastructure</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] mt-2">
            World-Class Facilities
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Modern infrastructure and facilities to support comprehensive learning and development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {facilities.slice(0, 3).map((facility, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <ImageWithFallback
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#1E3A8A] mb-2">
                  {facility.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {facility.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {facilities.slice(3).map((facility, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="h-64 overflow-hidden">
                <ImageWithFallback
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#1E3A8A] mb-2">
                  {facility.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {facility.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/facilities"
            className="inline-flex items-center gap-2 bg-[#1E3A8A] text-white px-8 py-3 rounded-full hover:bg-[#1e40af] transition-colors"
          >
            View All Facilities
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
