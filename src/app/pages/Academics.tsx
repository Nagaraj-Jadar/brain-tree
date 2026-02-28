import { BookOpen, Calculator, Globe, FlaskConical, Palette, Music } from "lucide-react";

export function Academics() {
  const subjects = [
    {
      icon: BookOpen,
      name: "English Language",
      description: "Grammar, vocabulary, reading comprehension, and creative writing",
      color: "#1E3A8A",
    },
    {
      icon: Calculator,
      name: "Mathematics",
      description: "Number concepts, arithmetic operations, geometry, and problem-solving",
      color: "#22C55E",
    },
    {
      icon: Globe,
      name: "Environmental Studies",
      description: "Science, social studies, and environmental awareness",
      color: "#FACC15",
    },
    {
      icon: BookOpen,
      name: "Hindi Language",
      description: "Reading, writing, and comprehension in Hindi",
      color: "#1E3A8A",
    },
    {
      icon: FlaskConical,
      name: "General Science",
      description: "Physics, chemistry, and biology fundamentals (Class 6-7)",
      color: "#22C55E",
    },
    {
      icon: Calculator,
      name: "Computer Science",
      description: "Basic computer skills and digital literacy",
      color: "#FACC15",
    },
  ];

  const coScholastic = [
    {
      icon: Palette,
      name: "Art & Craft",
      description: "Drawing, painting, and creative activities",
    },
    {
      icon: Music,
      name: "Music & Dance",
      description: "Vocal music and rhythmic movements",
    },
    {
      icon: BookOpen,
      name: "Physical Education",
      description: "Sports, yoga, and fitness activities",
    },
    {
      icon: Globe,
      name: "Moral Education",
      description: "Values, ethics, and life skills",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] mb-6">
              Academic Programs
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive curriculum designed to build strong foundations in English medium education for Classes 1 to 7.
            </p>
          </div>
        </div>
      </section>

      {/* Core Subjects */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-[#22C55E] font-semibold">Curriculum</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] mt-2 mb-4">
              Core Academic Subjects
            </h2>
            <p className="text-gray-600 max-w-2xl">
              Our curriculum follows state board guidelines with enhanced focus on English language proficiency and practical learning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject, index) => {
              const Icon = subject.icon;
              return (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-[#22C55E] hover:shadow-lg transition-all"
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${subject.color}20` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: subject.color }} />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1E3A8A] mb-2">
                    {subject.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {subject.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="py-16 bg-[#F3F4F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#22C55E] font-semibold">Our Approach</span>
              <h2 className="text-3xl font-bold text-[#1E3A8A] mt-2 mb-6">
                Activity-Based Learning
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  We believe in making learning enjoyable and engaging through hands-on activities, practical demonstrations, and interactive sessions that help students understand concepts better.
                </p>
                <p>
                  Our teaching methodology includes:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-[#22C55E] mt-1">✓</span>
                    <span>Interactive classroom sessions with multimedia presentations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#22C55E] mt-1">✓</span>
                    <span>Group activities and collaborative learning projects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#22C55E] mt-1">✓</span>
                    <span>Regular assessments to track progress and identify areas for improvement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#22C55E] mt-1">✓</span>
                    <span>English communication focus in all subjects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#22C55E] mt-1">✓</span>
                    <span>Homework designed to reinforce classroom learning</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[#1E3A8A] mb-6">Class Schedule</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-gray-700">Classes 1-2</span>
                  <span className="font-semibold text-[#1E3A8A]">8:00 AM - 12:30 PM</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-gray-700">Classes 3-5</span>
                  <span className="font-semibold text-[#1E3A8A]">8:00 AM - 1:30 PM</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-gray-700">Classes 6-7</span>
                  <span className="font-semibold text-[#1E3A8A]">8:00 AM - 2:00 PM</span>
                </div>
                <div className="bg-[#F3F4F6] rounded-xl p-4 mt-6">
                  <p className="text-sm text-gray-700">
                    <strong>Note:</strong> Saturday classes are from 8:00 AM to 12:00 PM for all classes with extra-curricular activities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Co-Scholastic Activities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-[#22C55E] font-semibold">Beyond Academics</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] mt-2 mb-4">
              Co-Scholastic Activities
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Holistic development through sports, arts, and life skills education
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coScholastic.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <div
                  key={index}
                  className="bg-[#F3F4F6] rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 bg-[#22C55E]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-[#22C55E]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#1E3A8A] mb-2">
                    {activity.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {activity.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Assessment System */}
      <section className="py-16 bg-[#1E3A8A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Continuous Assessment System
            </h2>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              We follow a comprehensive evaluation system that includes periodic tests, unit tests, half-yearly and annual examinations, along with continuous assessment of classroom participation, assignments, and projects.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl font-bold text-[#FACC15]">4</div>
                <div className="text-sm text-blue-200">Unit Tests</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#FACC15]">2</div>
                <div className="text-sm text-blue-200">Term Exams</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#FACC15]">8</div>
                <div className="text-sm text-blue-200">PTM per Year</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#FACC15]">100%</div>
                <div className="text-sm text-blue-200">Progress Tracking</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
