import { Phone, MessageCircle } from "lucide-react";

export function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918152948407"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-white" fill="currentColor" />
      </a>

      {/* Call Button */}
      <a
        href="tel:+918152948407"
        className="w-14 h-14 bg-[#1E3A8A] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Call Now"
      >
        <Phone className="w-6 h-6 text-white" />
      </a>
    </div>
  );
}
