import { useNavigate } from "react-router-dom";

export default function ProjectSidebar({ status, highlights }) {
  const navigate = useNavigate();

  const metaRows = [
    { key: "Client",        val: status.client     },
    { key: "Architect",     val: status.architect  },
    { key: "Structural",    val: status.structural },
    { key: "Start Date",    val: status.startDate  },
    { key: "Estimated End", val: status.endDate    },
  ];

  return (
    <div className="space-y-4">
      {/* Status Card */}
      <div className="bg-white border border-gray-200 rounded-sm p-5">
        <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-neutral-400 mb-4">
          Project Status
        </p>

        <div className="flex items-center justify-between mb-2 text-sm font-semibold">
          <span>{status.phase}</span>
          <span>{status.progress}%</span>
        </div>
        <div className="w-full h-1 bg-neutral-200 rounded-full mb-5">
          <div
            className="h-1 bg-black rounded-full transition-all duration-700"
            style={{ width: `${status.progress}%` }}
          />
        </div>

        {metaRows.map((row, i) => (
          <div
            key={i}
            className="flex justify-between items-center py-2.5 border-t border-gray-200 text-[13px]"
          >
            <span className="text-neutral-400 font-medium tracking-wide">{row.key}</span>
            <span className="font-semibold text-right ml-2">{row.val}</span>
          </div>
        ))}

        <button
          onClick={() => navigate("/contact#contact-form")}
          className="flex items-center justify-center gap-2 w-full py-2.5 bg-black text-white text-[11px] font-bold tracking-[0.1em] uppercase rounded-sm mt-4 hover:bg-neutral-800 transition-colors"
        >
          💬 Contact Project Manager
        </button>
      </div>

      {/* Highlights Card */}
      <div className="bg-white border border-gray-200 rounded-sm p-5">
        <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-neutral-400 mb-4">
          Highlights
        </p>
        <div className="space-y-1">
          {highlights.map((h, i) => (
            <div
              key={i}
              className={`flex items-start gap-3 py-3 ${
                i < highlights.length - 1 ? "border-b border-gray-200" : ""
              }`}
            >
              <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-sm flex-shrink-0">
                {h.icon}
              </div>
              <div>
                <p className="text-sm font-semibold">{h.title}</p>
                <p className="text-xs text-neutral-400 mt-0.5">{h.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}