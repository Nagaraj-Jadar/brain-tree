import { Link } from "react-router";
import { Calendar, FileText, CheckCircle, Phone, Mail } from "lucide-react";

export function Admissions() {
  const admissionSteps = [
    {
      step: "1",
      title: "Enquiry",
      description: "Contact us via phone, email, or visit the school office",
    },
    {
      step: "2",
      title: "School Visit",
      description: "Schedule a visit to tour our facilities and meet our team",
    },
    {
      step: "3",
      title: "Application",
      description: "Fill out the admission form with required documents",
    },
    {
      step: "4",
      title: "Interaction",
      description: "Informal interaction with the child and parents",
    },
    {
      step: "5",
      title: "Admission",
      description: "Complete fee payment and receive admission confirmation",
    },
  ];

  const documents = [
    "Birth certificate (original and photocopy)",
    "Transfer certificate (for classes 2 and above)",
    "Previous academic records",
    "2 passport size photographs of student",
    "1 passport size photograph of each parent/guardian",
    "Address proof (Aadhaar/Voter ID/Utility bill)",
    "Medical certificate (vaccination records)",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block bg-[#FACC15] text-[#1E3A8A] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Admissions Open for 2026-27
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] mb-6">
              Join Brain Tree School
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Secure your child's future with quality English medium education. Limited seats available for Classes 1 to 7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+911234567890"
                className="inline-flex items-center justify-center gap-2 bg-[#22C55E] text-white px-8 py-4 rounded-full hover:bg-[#16a34a] transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call for Enquiry
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#1E3A8A] border-2 border-[#1E3A8A] px-8 py-4 rounded-full hover:bg-[#1E3A8A] hover:text-white transition-colors"
              >
                Schedule a Visit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#22C55E] font-semibold">Simple Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] mt-2">
              Admission Process
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Follow these easy steps to enroll your child at Brain Tree School
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {admissionSteps.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-[#F3F4F6] rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-[#1E3A8A] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-[#1E3A8A] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                {index < admissionSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/3 -right-3 w-6 h-0.5 bg-[#22C55E]"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-16 bg-[#F3F4F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <span className="text-[#22C55E] font-semibold">Documentation</span>
              <h2 className="text-3xl font-bold text-[#1E3A8A] mt-2 mb-6">
                Required Documents
              </h2>
              <div className="space-y-3">
                {documents.map((doc, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 bg-white rounded-xl p-4"
                  >
                    <CheckCircle className="w-5 h-5 text-[#22C55E] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {/* Eligibility */}
              <div className="bg-white rounded-2xl p-8">
                <div className="w-12 h-12 bg-[#1E3A8A]/10 rounded-xl flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-[#1E3A8A]" />
                </div>
                <h3 className="text-2xl font-bold text-[#1E3A8A] mb-4">
                  Age Eligibility
                </h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex justify-between pb-2 border-b">
                    <span>Class 1</span>
                    <span className="font-semibold">5-6 years</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b">
                    <span>Class 2</span>
                    <span className="font-semibold">6-7 years</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b">
                    <span>Class 3</span>
                    <span className="font-semibold">7-8 years</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b">
                    <span>Class 4</span>
                    <span className="font-semibold">8-9 years</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b">
                    <span>Class 5</span>
                    <span className="font-semibold">9-10 years</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b">
                    <span>Class 6</span>
                    <span className="font-semibold">10-11 years</span>
                  </div>
                  <div className="flex justify-between pb-2">
                    <span>Class 7</span>
                    <span className="font-semibold">11-12 years</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  *Age as on 31st March of the admission year
                </p>
              </div>

              {/* Fee Structure */}
              <div className="bg-[#1E3A8A] text-white rounded-2xl p-8">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Fee Structure</h3>
                <p className="text-blue-100 mb-4">
                  Affordable fee structure with flexible payment options. For detailed fee information, please contact the school office.
                </p>
                <div className="bg-white/10 rounded-xl p-4 space-y-2">
                  <div className="flex justify-between">
                    <span>Admission Fee</span>
                    <span className="font-semibold">One-time</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tuition Fee</span>
                    <span className="font-semibold">Quarterly</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Transport (Optional)</span>
                    <span className="font-semibold">Monthly</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] mb-6">
            Have Questions About Admissions?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our admission team is here to help you through the process
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="tel:+911234567890"
              className="flex items-center justify-center gap-3 bg-[#F3F4F6] rounded-2xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-[#1E3A8A] rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="text-sm text-gray-600">Call Us</div>
                <div className="font-semibold text-[#1E3A8A]">+91 12345 67890</div>
              </div>
            </a>
            <a
              href="mailto:admissions@braintreeschool.com"
              className="flex items-center justify-center gap-3 bg-[#F3F4F6] rounded-2xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-[#22C55E] rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="text-sm text-gray-600">Email Us</div>
                <div className="font-semibold text-[#1E3A8A]">admissions@braintree.com</div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
