export default function ObjectivesCard({ objectives }) {
  return (
    <div className="bg-white border border-gray-200 rounded-sm p-5 h-full">
      <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-neutral-400 mb-4">
        Key Objectives
      </p>
      <ul className="space-y-2.5">
        {objectives.map((obj, i) => (
          <li
            key={i}
            className="flex items-start gap-2 text-sm text-neutral-500 font-normal leading-snug"
          >
            <span className="text-black font-bold text-[13px] mt-0.5 flex-shrink-0">✓</span>
            {obj}
          </li>
        ))}
      </ul>
    </div>
  );
}