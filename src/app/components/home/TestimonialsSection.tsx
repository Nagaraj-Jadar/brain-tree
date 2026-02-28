import { Quote } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Mrs. Anita Verma",
      role: "Parent of Class 5 Student",
      image: "https://images.unsplash.com/photo-1711934049680-d4450a75a8c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJlbnQlMjBzbWlsaW5nJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcyMzAyMDM0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      text: "Brain Tree School has been a wonderful choice for my daughter. The teachers are caring and dedicated, and I've seen remarkable improvement in her English communication skills. The school's emphasis on values and discipline is commendable.",
    },
    {
      name: "Mr. Rajesh Kumar",
      role: "Parent of Class 3 Student",
      image: "https://images.unsplash.com/photo-1711934049680-d4450a75a8c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJlbnQlMjBzbWlsaW5nJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcyMzAyMDM0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      text: "The individual attention each child receives here is outstanding. My son loves going to school every day. The activity-based learning approach has made him curious and eager to learn. Highly recommended for primary education!",
    },
    {
      name: "Mrs. Deepa Sharma",
      role: "Parent of Class 6 Student",
      image: "https://images.unsplash.com/photo-1711934049680-d4450a75a8c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJlbnQlMjBzbWlsaW5nJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcyMzAyMDM0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      text: "As a parent, safety is my top priority. Brain Tree provides a secure environment with excellent supervision. The regular parent-teacher meetings keep us informed about our child's progress. Very happy with the overall experience.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[#22C55E] font-semibold">Parent Reviews</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] mt-2">
            What Parents Say About Us
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Real feedback from parents who trust us with their children's education.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#F3F4F6] rounded-2xl p-8 relative"
            >
              <Quote className="w-10 h-10 text-[#22C55E] mb-4" />
              <p className="text-gray-700 leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-300">
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
