import { Users2, Target, Heart, MessageSquare, ClipboardCheck, Smile } from "lucide-react";

export function WhyChooseUsSection() {
  const features = [
    {
      icon: Users2,
      title: "Small Class Size",
      description: "Maximum 30 students per class for personalized attention",
    },
    {
      icon: Target,
      title: "Activity-Based Learning",
      description: "Hands-on learning approach to make education engaging",
    },
    {
      icon: Heart,
      title: "Moral & Value Education",
      description: "Character building and ethical values integrated in curriculum",
    },
    {
      icon: MessageSquare,
      title: "Strong Communication Skills",
      description: "Focus on English speaking, reading, and writing abilities",
    },
    {
      icon: ClipboardCheck,
      title: "Regular Assessments",
      description: "Continuous evaluation to track and improve performance",
    },
    {
      icon: Smile,
      title: "Supportive Environment",
      description: "Caring teachers who understand each child's needs",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[#22C55E] font-semibold">Our Strengths</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] mt-2">
            Why Choose Brain Tree School?
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We provide a nurturing environment where children develop academically, socially, and emotionally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-[#22C55E] transition-all"
              >
                <div className="w-12 h-12 bg-[#22C55E]/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#22C55E]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
