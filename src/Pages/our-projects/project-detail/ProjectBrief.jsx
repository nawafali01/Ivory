export default function ProjectBrief({ body }) {
  return (
    <div className="mb-6">
      <h2 className="font-black text-2xl md:text-3xl tracking-tighter leading-[1.2] mb-3">
        Project Brief
      </h2>
      <p className="text-neutral-500 text-base font-normal leading-relaxed">
        {body}
      </p>
    </div>
  );
}