export default function TestimonialCard({ testimonial }) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-3 mb-4">
        <h2 className="font-black text-2xl md:text-3xl tracking-tighter leading-[1.2]">
          Client Feedback
        </h2>
      </div>

      <div className="bg-black text-white rounded-sm p-6 relative overflow-hidden">
        {/* Decorative quote */}
        <span className="absolute top-0 right-4 font-black text-[100px] leading-none opacity-[0.07] select-none pointer-events-none">
          "
        </span>

        <p className="text-white/80 text-base font-normal leading-relaxed mb-5 relative z-10">
          {testimonial.text}
        </p>

        <div className="flex items-center gap-3 relative z-10">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-9 h-9 rounded-full object-cover flex-shrink-0"
          />
          <div>
            <p className="text-white text-[11px] md:text-[13px] font-semibold leading-tight uppercase tracking-[0.2em]">
              {testimonial.name}
            </p>
            <p className="text-white/45 text-[10px] md:text-[11px] mt-0.5 tracking-[0.18em] uppercase">
              {testimonial.role}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}