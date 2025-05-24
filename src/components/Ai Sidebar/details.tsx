import { useState } from "react";
import { FiUser, FiUsers, FiLink, FiPlus, FiChevronDown, FiChevronUp, FiClipboard, FiArrowUpRight } from "react-icons/fi";

export const Details = () => {
  // State for expandable sections
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});

  const sections = [
    "USER DATA",
    "CONVERSATION ATTRIBUTES",
    "COMPANY DETAILS",
    "SALESFORCE",
    "STRIPE",
  ];

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="w-full h-full flex flex-col text-sm select-none">
      {/* Assignee and Team */}
      <div className="flex flex-col gap-2 px-4 pt-4 pb-2">
        <div className="flex items-center gap-2">
          <span className="text-gray-400">Assignee</span>
          <span className="flex items-center gap-1 font-medium">
            <FiUser className="text-blue-500" /> Brian Byrne
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-400">Team</span>
          <span className="flex items-center gap-1 font-medium">
            <FiUsers className="text-gray-500" /> Unassigned
          </span>
        </div>
      </div>

      {/* Links */}
      <div className="px-4 pt-4 pb-2">
        <div className="font-semibold text-xs text-gray-700 mb-2">LINKS</div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <FiLink className="text-gray-700" /> Tracker ticket
            </span>
            <button className="bg-gray-100 rounded-full p-1 hover:bg-gray-200">
              <FiPlus />
            </button>
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <FiClipboard className="text-gray-700" /> Back-office tickets
            </span>
            <button className="bg-gray-100 rounded-full p-1 hover:bg-gray-200">
              <FiPlus />
            </button>
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <FiArrowUpRight className="text-gray-700" /> Side conversations
            </span>
            <button className="bg-gray-100 rounded-full p-1 hover:bg-gray-200">
              <FiPlus />
            </button>
          </div>
        </div>
      </div>

      {/* Expandable Sections */}
      <div className="flex-1 flex flex-col">
        {sections.map((section) => (
          <div key={section} className="border-t px-4 py-3 cursor-pointer flex items-center justify-between hover:bg-gray-50">
            <span className="font-semibold text-xs text-gray-700">{section}</span>
            <button onClick={() => toggleSection(section)}>
              {openSections[section] ? <FiChevronUp /> : <FiChevronDown />}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}