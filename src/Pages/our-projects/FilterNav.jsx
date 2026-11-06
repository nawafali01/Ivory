const TABS = [
  { label: "All Works", value: "all" },
  { label: "Construction", value: "construction" },
  { label: "Maintenance", value: "maintenance" },
  { label: "Renovation", value: "renovation" },
];

export default function FilterNav({ activeFilter, onFilterChange }) {
  return (
    <nav className="flex flex-wrap sm:flex-nowrap items-center justify-between sm:justify-start gap-y-1 sm:gap-0 px-3 sm:px-8 md:px-16 mt-6 md:mt-10 border-b border-gray-300">
      {TABS.map((tab) => (
        <button
          key={tab.value}
          onClick={() => onFilterChange(tab.value)}
          className={`
            whitespace-nowrap px-1.5 sm:px-6 py-2.5 sm:py-3
            text-[9.5px] sm:text-xs font-bold tracking-normal sm:tracking-widest uppercase
            border-b-2 transition-all duration-200 cursor-pointer text-center
            sm:first:pl-0
            ${
              activeFilter === tab.value
                ? "text-black border-black"
                : "text-gray-500 border-transparent hover:text-black"
            }
          `}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
}
