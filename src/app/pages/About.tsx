import { Award, Target, Eye, Heart } from "lucide-react";

export function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] mb-6">
              About Brain Tree School
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              A trusted institution dedicated to providing quality English medium education for primary classes with a focus on holistic development and strong moral values.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#22C55E] font-semibold">Our Story</span>
              <h2 className="text-3xl font-bold text-[#1E3A8A] mt-2 mb-6">
                Building Foundations Since 2016
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Brain Tree English Medium School was established in 2016 with a vision to provide quality primary education in a nurturing and supportive environment. Over the years, we have grown to become a trusted name in English medium education for Classes 1 to 7.
                </p>
                <p>
                  Our journey began with a simple belief: every child deserves the best start in their educational journey. Today, we serve over 500 students with a team of 25+ dedicated and experienced teachers who are passionate about shaping young minds.
                </p>
                <p>
                  We take pride in our student-centric approach, where each child receives personalized attention and care. Our focus on English language proficiency, combined with strong academic curriculum and value education, prepares students for future success.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-[#1E3A8A] text-white rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold mb-2">10+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
              <div className="bg-[#22C55E] text-white rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-sm">Happy Students</div>
              </div>
              <div className="bg-[#FACC15] text-[#1E3A8A] rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold mb-2">25+</div>
                <div className="text-sm">Qualified Teachers</div>
              </div>
              <div className="bg-[#F3F4F6] text-[#1E3A8A] rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold mb-2">95%</div>
                <div className="text-sm">Parent Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-[#F3F4F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8">
              <div className="w-14 h-14 bg-[#1E3A8A]/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-[#1E3A8A]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1E3A8A] mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To provide quality English medium education that builds strong academic foundations, develops effective communication skills, and nurtures moral values in a safe and supportive environment. We aim to prepare students for lifelong learning and success through innovative teaching methods and personalized attention.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8">
              <div className="w-14 h-14 bg-[#22C55E]/10 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-[#22C55E]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1E3A8A] mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be the most trusted primary school in the region, known for academic excellence, character development, and holistic education. We envision creating confident, articulate, and morally grounded students who are well-prepared for higher education and equipped with values that will guide them throughout their lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A]">
              Our Core Values
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              The principles that guide everything we do at Brain Tree School
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Award,
                title: "Excellence",
                description: "Striving for the highest standards in education and character",
              },
              {
                icon: Heart,
                title: "Compassion",
                description: "Caring for each child with understanding and empathy",
              },
              {
                icon: Target,
                title: "Integrity",
                description: "Maintaining honesty, ethics, and strong moral principles",
              },
              {
                icon: Award,
                title: "Innovation",
                description: "Embracing modern teaching methods and continuous improvement",
              },
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-[#22C55E]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-[#22C55E]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1E3A8A] mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
