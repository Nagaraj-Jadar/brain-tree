import { Monitor, BookOpen, Laptop, Trees, Bus, Shield, Utensils, HeartPulse } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Facilities() {
  const facilities = [
    {
      icon: Monitor,
      title: "Smart Classrooms",
      description: "Modern classrooms equipped with digital projectors, interactive whiteboards, and audio-visual systems for engaging learning experiences.",
      image: "https://images.unsplash.com/photo-1758685733530-2c5210b03338?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzbWFydCUyMGNsYXNzcm9vbSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcyMzAyMDMyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      features: ["Digital projectors", "Interactive boards", "Comfortable seating", "Well-ventilated"],
    },
    {
      icon: BookOpen,
      title: "Library",
      description: "Well-stocked library with thousands of books covering all subjects, reference materials, and age-appropriate reading material for all classes.",
      image: "https://images.unsplash.com/photo-1767356326735-2da0a10cf1f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBsaWJyYXJ5JTIwYm9va3MlMjBjaGlsZHJlbnxlbnwxfHx8fDE3NzIyMTM1NzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      features: ["5000+ books", "Reading area", "Digital catalog", "Library period"],
    },
    {
      icon: Laptop,
      title: "Computer Lab",
      description: "State-of-the-art computer lab with modern systems, internet connectivity, and educational software for hands-on computer learning.",
      image: "https://images.unsplash.com/photo-1766297247924-6638d54e7c89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMGxhYiUyMHN0dWRlbnRzJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzcyMjY3NjQ0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      features: ["30+ computers", "High-speed internet", "Educational software", "Trained instructor"],
    },
    {
      icon: Trees,
      title: "Playground",
      description: "Spacious and safe playground for outdoor activities, sports, and physical education with proper safety measures and equipment.",
      image: "https://images.unsplash.com/flagged/photo-1551398766-dd525d7c6175?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBwbGF5Z3JvdW5kJTIwY2hpbGRyZW4lMjBwbGF5aW5nfGVufDF8fHx8MTc3MjE3NDU5MXww&ixlib=rb-4.1.0&q=80&w=1080",
      features: ["Sports equipment", "Safe surface", "Shaded areas", "Outdoor games"],
    },
    {
      icon: Bus,
      title: "Transportation",
      description: "Safe and reliable school bus service covering various routes with GPS tracking, trained drivers, and attendants for student safety.",
      image: "https://images.unsplash.com/photo-1599456825458-ebe1463315e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBidXMlMjB0cmFuc3BvcnRhdGlvbnxlbnwxfHx8fDE3NzIzMDIwMzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      features: ["GPS tracking", "Trained drivers", "Bus attendant", "Multiple routes"],
    },
  ];

  const additionalFeatures = [
    {
      icon: Shield,
      title: "Security & Safety",
      description: "CCTV surveillance, secure entry points, and trained security personnel",
    },
    {
      icon: Utensils,
      title: "Cafeteria",
      description: "Clean cafeteria providing hygienic and nutritious snacks",
    },
    {
      icon: HeartPulse,
      title: "Medical Room",
      description: "First-aid facility with trained staff for immediate medical assistance",
    },
    {
      icon: Monitor,
      title: "Audio-Visual Room",
      description: "Dedicated AV room for presentations and educational videos",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] mb-6">
              World-Class Facilities
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Modern infrastructure and state-of-the-art facilities designed to support comprehensive learning and development.
            </p>
          </div>
        </div>
      </section>

      {/* Main Facilities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {facilities.map((facility, index) => {
            const Icon = facility.icon;
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  !isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={isEven ? "lg:order-1" : "lg:order-2"}>
                  <div className="w-14 h-14 bg-[#22C55E]/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-[#22C55E]" />
                  </div>
                  <h2 className="text-3xl font-bold text-[#1E3A8A] mb-4">
                    {facility.title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {facility.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {facility.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-sm text-gray-700"
                      >
                        <div className="w-1.5 h-1.5 bg-[#22C55E] rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                <div className={isEven ? "lg:order-2" : "lg:order-1"}>
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <ImageWithFallback
                      src={facility.image}
                      alt={facility.title}
                      className="w-full h-[400px] object-cover"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-16 bg-[#F3F4F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#22C55E] font-semibold">More Features</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] mt-2">
              Additional Facilities
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Everything your child needs for a safe and enriching learning experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-[#1E3A8A]/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#1E3A8A]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#1E3A8A] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Safety Measures */}
      <section className="py-16 bg-[#1E3A8A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Shield className="w-16 h-16 mx-auto mb-6 text-[#FACC15]" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Safety & Security First
            </h2>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              Your child's safety is our top priority. We maintain strict security protocols, CCTV surveillance throughout the campus, secure entry and exit points, and trained staff members to ensure a safe learning environment.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl font-bold text-[#FACC15]">40+</div>
                <div className="text-sm text-blue-200">CCTV Cameras</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#FACC15]">24/7</div>
                <div className="text-sm text-blue-200">Security Guard</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#FACC15]">100%</div>
                <div className="text-sm text-blue-200">Safe Campus</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#FACC15]">GPS</div>
                <div className="text-sm text-blue-200">Bus Tracking</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
