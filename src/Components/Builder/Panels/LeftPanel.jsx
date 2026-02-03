"use client";
import React from "react";

const LeftPanel = ({
  selectedSection,
  setSelectedSection,
  activeSections,
  toggleSection,
  useHomeSections,
  HomeOrder,
}) => {
  return (
    <div className="w-full bg-white border-r border-gray-100 flex flex-col shrink-0 shadow-sm">
      <div className="p-4 border-b border-gray-100">
        <p className="text-gray-800 text-sm font-semibold uppercase tracking-wide">
          Sections
        </p>
        <p className="text-gray-500 text-xs mt-1">Toggle & select sections</p>
      </div>
      <div className="flex-1 overflow-y-auto p-3">
        {HomeOrder.map((sId) => {
          const sec = useHomeSections[sId];
          const isSelected = selectedSection === sId;
          const isActive = activeSections.includes(sId);

          return (
            <div
              key={sId}
              className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer mb-2 transition-all duration-200
                ${
                  isSelected
                    ? "bg-gradient-to-r from-blue-50 to-blue-25 border border-blue-200 shadow-sm"
                    : "bg-transparent border border-transparent hover:bg-gray-50"
                }`}
              onClick={() => setSelectedSection(sId)}>
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-lg text-base transition-all duration-200
                ${isSelected ? "bg-cyan-500 text-white shadow-sm" : "bg-gray-100 text-gray-600"}`}>
                {sec.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div
                  className={`text-sm font-medium transition-colors duration-200
                    ${isSelected ? "text-cyan-600" : "text-gray-500"}`}>
                  {sec.label}
                </div>
                {sec.fixed && (
                  <span className="text-gray-500 text-xs bg-gray-100 rounded-full px-2 py-0.5 uppercase tracking-wider">
                    fixed
                  </span>
                )}
              </div>
              {sec.fixed ? (
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              ) : (
                <div
                  className={`w-11 h-6 rounded-full relative cursor-pointer transition-all duration-300
                    ${isActive ? "bg-green-500" : "bg-gray-300"}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleSection(sId);
                  }}>
                  <div
                    className={`w-5 h-5 rounded-full bg-white absolute top-0.5 transition-all duration-300 shadow-sm
                    ${isActive ? "left-5.5" : "left-0.5"}`}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LeftPanel;
