export default function StatsCard({ stats }) {
  const items = [
    { val: stats.area,             label: "Square Feet"   },
    { val: stats.floors,           label: "Total Floors"  },
    { val: stats.value,            label: "Project Value" },
    { val: `${stats.completion}%`, label: "Completion"    },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-sm p-5 h-full">
      <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-neutral-400 mb-4">
        Project Stats
      </p>
      <div className="grid grid-cols-2 gap-6">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col gap-1.5">
            <p className="font-black text-lg md:text-xl leading-[1.2] tracking-tighter text-neutral-500">
              {item.val}
            </p>
            <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-neutral-300">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}