const TABS = [
  { label: "All Works", value: "all" },
  { label: "Construction", value: "construction" },
  { label: "Maintenance", value: "maintenance" },
  { label: "Renovation", value: "renovation" },
];

export default function FilterNav({ activeFilter, onFilterChange }) {
  return (
    <nav className="flex gap-0 px-16 mt-10 border-b border-gray-800">
      {TABS.map((tab) => (
        <button
          key={tab.value}
          onClick={() => onFilterChange(tab.value)}
          className={`
            px-6 py-3 text-xs font-semibold tracking-widest uppercase
            border-b-2 transition-all duration-200 cursor-pointer
            first:pl-0
            ${
              activeFilter === tab.value
                ? "text-gray-700 border-gray-500"
                : "text-gray-500 border-transparent hover:text-gray-300"
            }
          `}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
}
