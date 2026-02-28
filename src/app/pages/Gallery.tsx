import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Gallery() {
  const categories = [
    { name: "All", count: 15 },
    { name: "Classrooms", count: 5 },
    { name: "Events", count: 4 },
    { name: "Sports", count: 3 },
    { name: "Activities", count: 3 },
  ];

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1758685733530-2c5210b03338?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzbWFydCUyMGNsYXNzcm9vbSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcyMzAyMDMyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Smart Classroom",
      category: "Classrooms",
    },
    {
      src: "https://images.unsplash.com/photo-1767356326735-2da0a10cf1f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBsaWJyYXJ5JTIwYm9va3MlMjBjaGlsZHJlbnxlbnwxfHx8fDE3NzIyMTM1NzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "School Library",
      category: "Classrooms",
    },
    {
      src: "https://images.unsplash.com/photo-1766297247924-6638d54e7c89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMGxhYiUyMHN0dWRlbnRzJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzcyMjY3NjQ0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Computer Lab",
      category: "Classrooms",
    },
    {
      src: "https://images.unsplash.com/flagged/photo-1551398766-dd525d7c6175?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBwbGF5Z3JvdW5kJTIwY2hpbGRyZW4lMjBwbGF5aW5nfGVufDF8fHx8MTc3MjE3NDU5MXww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Outdoor Playground",
      category: "Sports",
    },
    {
      src: "https://images.unsplash.com/photo-1503891093533-726893813d07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHByaW1hcnklMjBzY2hvb2wlMjBzdHVkZW50JTIwaG9sZGluZyUyMGJvb2tzJTIwdW5pZm9ybXxlbnwxfHx8fDE3NzIzMDIwMzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Happy Students",
      category: "Events",
    },
    {
      src: "https://images.unsplash.com/photo-1599456825458-ebe1463315e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBidXMlMjB0cmFuc3BvcnRhdGlvbnxlbnwxfHx8fDE3NzIzMDIwMzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "School Transport",
      category: "Activities",
    },
    {
      src: "https://images.unsplash.com/photo-1758685733530-2c5210b03338?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzbWFydCUyMGNsYXNzcm9vbSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcyMzAyMDMyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Digital Learning",
      category: "Classrooms",
    },
    {
      src: "https://images.unsplash.com/flagged/photo-1551398766-dd525d7c6175?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBwbGF5Z3JvdW5kJTIwY2hpbGRyZW4lMjBwbGF5aW5nfGVufDF8fHx8MTc3MjE3NDU5MXww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Sports Day",
      category: "Events",
    },
    {
      src: "https://images.unsplash.com/photo-1767356326735-2da0a10cf1f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBsaWJyYXJ5JTIwYm9va3MlMjBjaGlsZHJlbnxlbnwxfHx8fDE3NzIyMTM1NzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Reading Time",
      category: "Activities",
    },
    {
      src: "https://images.unsplash.com/photo-1503891093533-726893813d07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHByaW1hcnklMjBzY2hvb2wlMjBzdHVkZW50JTIwaG9sZGluZyUyMGJvb2tzJTIwdW5pZm9ybXxlbnwxfHx8fDE3NzIzMDIwMzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Annual Function",
      category: "Events",
    },
    {
      src: "https://images.unsplash.com/photo-1766297247924-6638d54e7c89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMGxhYiUyMHN0dWRlbnRzJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzcyMjY3NjQ0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Computer Class",
      category: "Activities",
    },
    {
      src: "https://images.unsplash.com/flagged/photo-1551398766-dd525d7c6175?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBwbGF5Z3JvdW5kJTIwY2hpbGRyZW4lMjBwbGF5aW5nfGVufDF8fHx8MTc3MjE3NDU5MXww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Physical Education",
      category: "Sports",
    },
    {
      src: "https://images.unsplash.com/photo-1758685733530-2c5210b03338?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzbWFydCUyMGNsYXNzcm9vbSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcyMzAyMDMyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Interactive Session",
      category: "Classrooms",
    },
    {
      src: "https://images.unsplash.com/photo-1503891093533-726893813d07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHByaW1hcnklMjBzY2hvb2wlMjBzdHVkZW50JTIwaG9sZGluZyUyMGJvb2tzJTIwdW5pZm9ybXxlbnwxfHx8fDE3NzIzMDIwMzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Prize Distribution",
      category: "Events",
    },
    {
      src: "https://images.unsplash.com/flagged/photo-1551398766-dd525d7c6175?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBwbGF5Z3JvdW5kJTIwY2hpbGRyZW4lMjBwbGF5aW5nfGVufDF8fHx8MTc3MjE3NDU5MXww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Morning Assembly",
      category: "Activities",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] mb-6">
              Photo Gallery
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Explore our vibrant campus life, facilities, and the joyful moments of learning and growing together.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2.5 rounded-full transition-colors ${
                  index === 0
                    ? "bg-[#1E3A8A] text-white"
                    : "bg-[#F3F4F6] text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-gray-100 aspect-[4/3] cursor-pointer"
              >
                <ImageWithFallback
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                    <p className="text-sm text-gray-300">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour CTA */}
      <section className="py-16 bg-[#F3F4F6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] mb-6">
            Want to See More?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Schedule a visit to experience our campus in person and meet our team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+911234567890"
              className="inline-flex items-center justify-center bg-[#22C55E] text-white px-8 py-4 rounded-full hover:bg-[#16a34a] transition-colors"
            >
              Call to Schedule Visit
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-[#1E3A8A] border-2 border-[#1E3A8A] px-8 py-4 rounded-full hover:bg-[#1E3A8A] hover:text-white transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
