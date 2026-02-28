import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export function Contact() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Get in touch with us for admissions, enquiries, or to schedule a campus visit. We're here to help!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-[#1E3A8A] mb-6">
                  Get In Touch
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  We'd love to hear from you. Visit us, call us, or send us a message.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <div className="bg-[#F3F4F6] rounded-2xl p-6">
                  <div className="w-12 h-12 bg-[#1E3A8A] rounded-xl flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-[#1E3A8A] mb-2">Visit Us</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    123 Education Street, Model Town, City - 123456
                  </p>
                </div>

                <div className="bg-[#F3F4F6] rounded-2xl p-6">
                  <div className="w-12 h-12 bg-[#22C55E] rounded-xl flex items-center justify-center mb-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-[#1E3A8A] mb-2">Call Us</h3>
                  <a
                    href="tel:+919632310841"
                    className="text-gray-600 text-sm hover:text-[#22C55E] transition-colors"
                  >
                    +91 9632310841
                  </a>
                  <br />
                  <a
                    href="tel:+919632310841"
                    className="text-gray-600 text-sm hover:text-[#22C55E] transition-colors"
                  >
                    +91 9632310841
                  </a>
                </div>

                <div className="bg-[#F3F4F6] rounded-2xl p-6">
                  <div className="w-12 h-12 bg-[#FACC15] rounded-xl flex items-center justify-center mb-4">
                    <Mail className="w-6 h-6 text-[#1E3A8A]" />
                  </div>
                  <h3 className="font-semibold text-[#1E3A8A] mb-2">Email Us</h3>
                  <a
                    href="mailto:info@braintreeschool.com"
                    className="text-gray-600 text-sm hover:text-[#FACC15] transition-colors block"
                  >
                    info@braintreeschool.com
                  </a>
                  <a
                    href="mailto:admissions@braintreeschool.com"
                    className="text-gray-600 text-sm hover:text-[#FACC15] transition-colors block"
                  >
                    admissions@braintreeschool.com
                  </a>
                </div>

                <div className="bg-[#F3F4F6] rounded-2xl p-6">
                  <div className="w-12 h-12 bg-[#1E3A8A] rounded-xl flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-[#1E3A8A] mb-2">Office Hours</h3>
                  <p className="text-gray-600 text-sm">
                    Monday - Friday: 8:00 AM - 5:00 PM
                  </p>
                  <p className="text-gray-600 text-sm">
                    Saturday: 8:00 AM - 2:00 PM
                  </p>
                  <p className="text-gray-600 text-sm">Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-[#F3F4F6] rounded-2xl p-8 md:p-10">
                <h2 className="text-2xl font-bold text-[#1E3A8A] mb-6">
                  Send Us a Message
                </h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Parent/Guardian Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#1E3A8A] focus:ring-2 focus:ring-[#1E3A8A]/20 outline-none transition-all"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#1E3A8A] focus:ring-2 focus:ring-[#1E3A8A]/20 outline-none transition-all"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#1E3A8A] focus:ring-2 focus:ring-[#1E3A8A]/20 outline-none transition-all"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Class Interested In
                      </label>
                      <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#1E3A8A] focus:ring-2 focus:ring-[#1E3A8A]/20 outline-none transition-all">
                        <option value="">Select class</option>
                        <option value="1">Class 1</option>
                        <option value="2">Class 2</option>
                        <option value="3">Class 3</option>
                        <option value="4">Class 4</option>
                        <option value="5">Class 5</option>
                        <option value="6">Class 6</option>
                        <option value="7">Class 7</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#1E3A8A] focus:ring-2 focus:ring-[#1E3A8A]/20 outline-none transition-all"
                      placeholder="e.g., Admission Enquiry"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#1E3A8A] focus:ring-2 focus:ring-[#1E3A8A]/20 outline-none transition-all resize-none"
                      placeholder="Tell us about your enquiry..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-[#22C55E] text-white px-8 py-4 rounded-full hover:bg-[#16a34a] transition-colors"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>

                  <p className="text-sm text-gray-600">
                    * Required fields. We'll respond to your enquiry within 24 hours.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-[#F3F4F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#1E3A8A] mb-4">
              Find Us on Map
            </h2>
            <p className="text-gray-600">
              Located in the heart of Model Town with easy accessibility
            </p>
          </div>
          <div className="bg-gray-300 rounded-2xl overflow-hidden h-[400px] flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <p className="text-gray-600 font-medium">Google Maps Integration</p>
              <p className="text-sm text-gray-500">
                123 Education Street, Model Town, City - 123456
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-16 bg-[#1E3A8A] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Visit Our Campus?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Schedule a campus tour to see our facilities and meet our team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+911234567890"
              className="inline-flex items-center justify-center gap-2 bg-[#22C55E] text-white px-8 py-4 rounded-full hover:bg-[#16a34a] transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call +91 12345 67890
            </a>
            <a
              href="https://wa.me/911234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full hover:bg-[#20ba5a] transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
