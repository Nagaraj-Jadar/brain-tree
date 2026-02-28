import { BookOpen, Users, Shield, Award } from "lucide-react";

export function HighlightsSection() {
  const highlights = [
    {
      icon: BookOpen,
      title: "English Medium Education",
      description: "Strong foundation in English language with focus on communication skills",
      color: "#1E3A8A",
    },
    {
      icon: Users,
      title: "Qualified & Caring Teachers",
      description: "Experienced educators dedicated to each child's success",
      color: "#22C55E",
    },
    {
      icon: Shield,
      title: "Safe & Secure Campus",
      description: "Well-monitored premises with CCTV surveillance and trained staff",
      color: "#FACC15",
    },
    {
      icon: Award,
      title: "Holistic Development",
      description: "Focus on academics, sports, arts, and character building",
      color: "#1E3A8A",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-[#F3F4F6] rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${item.color}20` }}
                >
                  <Icon className="w-7 h-7" style={{ color: item.color }} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
