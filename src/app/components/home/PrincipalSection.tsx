import { ImageWithFallback } from "../figma/ImageWithFallback";

export function PrincipalSection() {
  return (
    <section className="py-16 bg-[#F3F4F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Principal Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-[#1E3A8A] rounded-3xl transform -rotate-3"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1681070909604-f555aa006564?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBwcmluY2lwYWwlMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzIzMDIwMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="School Principal"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>

          {/* Right - Message */}
          <div className="space-y-6">
            <div>
              <span className="text-[#22C55E] font-semibold">Principal's Message</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] mt-2">
                Welcome to Brain Tree English Medium School
              </h2>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Dear Parents and Guardians,
              </p>
              <p>
                It is my pleasure to welcome you to Brain Tree English Medium School, where we are committed to nurturing young minds and building strong foundations for lifelong learning.
              </p>
              <p>
                Our school offers quality English medium education from Classes 1 to 7, with a focus on academic excellence, moral values, and holistic development. We believe that every child is unique and deserves individual attention to reach their full potential.
              </p>
              <p>
                With our experienced faculty, modern infrastructure, and safe learning environment, we ensure that your child receives the best primary education to prepare them for future success.
              </p>
              <p>
                We look forward to partnering with you in your child's educational journey.
              </p>
            </div>

            <div className="pt-4 border-t border-gray-300">
              <p className="font-semibold text-[#1E3A8A] text-lg">Mr. Karna Kattimani</p>
              <p className="text-gray-600">Principal, Brain Tree English Medium School</p>
              <p className="text-sm text-gray-500 mt-1">M.Ed., B.Ed. | 15+ Years in Education</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
