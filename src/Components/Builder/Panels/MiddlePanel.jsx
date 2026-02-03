"use client";
import { Copy, Download, Layout } from "lucide-react";
import React from "react";

const MiddlePanel = ({
  selectedSection,
  setSelectedSection,
  pageConfig,
  dragOrder,
  handleDragStart,
  handleDragOver,
  handleDrop,
  handleDragEnd,
  draggedItem,
  dragOverIndex,
  getPreviewOrder,
  useHomeSections,
  setShowExport,
}) => {
  const colors = {
    primary: "bg-cyan-600",
    secondary: "bg-cyan-400",
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Layout className="w-6 h-6 text-blue-600" />
              <h1 className="text-xl font-bold text-gray-900">
                Page Builder Preview
              </h1>
            </div>
            <div className="hidden md:flex items-center space-x-2 text-sm text-gray-600">
              <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded">
                Live Preview
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setShowExport(true)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Copy className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Download className="w-5 h-5 text-gray-600" />
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Publish
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Main Preview Area */}
        <div className="flex-1 overflow-auto p-4 md:p-4">
          <div className="flex items-center justify-center min-h-full">
            {/* Preview Container */}
            <div className="relative min-w-full bg-white rounded-xl shadow-2xl border border-gray-200 overflow-auto transition-all duration-300">
              {/* Browser Frame */}
              <div className="sticky top-0 z-10 bg-gray-100 border-b border-gray-600 p-2">
                <div className="flex items-center p-3">
                  <div className="flex space-x-2 mr-4 ">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="flex-1 bg-white rounded-lg px-4 py-2 text-sm text-gray-600">
                    preview.yoursite.com
                  </div>
                </div>

                {/* Page Content */}
                <div className="flex-1 overflow-y-auto bg-gray-50">
                  <div className="max-w-6xl mx-auto  overflow-hidden shadow-lg border border-gray-200 bg-white">
                    {getPreviewOrder().map((sId, idx) => {
                      const sec = useHomeSections[sId];
                      const varId = pageConfig[sId];
                      const variation = sec.variations.find(
                        (v) => v.id === varId,
                      );
                      if (!variation) return null;
                      const Comp = variation.Component;
                      const isDraggable = !sec.fixed;
                      const dragIdx = dragOrder.indexOf(sId);
                      const isSelected = selectedSection === sId;

                      return (
                        <div key={sId}>
                          {/* Drag Drop Indicator */}
                          {dragOverIndex !== null &&
                            dragOverIndex === dragIdx &&
                            draggedItem !== dragIdx && (
                              <div
                                className="h-1.5 bg-gradient-to-r from-teal-400 to-teal-500 rounded my-0.5 transition-opacity duration-150"
                                style={{
                                  background: `linear-gradient(90deg, ${colors.primary}, ${colors.primary}80)`,
                                }}
                              />
                            )}

                          <div
                            className={`relative cursor-pointer transition-all duration-150 outline outline-2 outline-offset-[-2px]
                    ${isSelected ? "outline-teal-400" : "outline-transparent"}`}
                            style={{
                              outlineColor: isSelected
                                ? colors.primary
                                : "transparent",
                            }}
                            onClick={() => setSelectedSection(sId)}
                            draggable={isDraggable}
                            onDragStart={
                              isDraggable
                                ? (e) => handleDragStart(e, dragIdx)
                                : undefined
                            }
                            onDragOver={
                              isDraggable
                                ? (e) => handleDragOver(e, dragIdx)
                                : undefined
                            }
                            onDrop={
                              isDraggable
                                ? (e) => handleDrop(e, dragIdx)
                                : undefined
                            }
                            onDragEnd={handleDragEnd}>
                            {/* Section Label */}
                            <div
                              className={`absolute top-1.5 left-1.5 text-[9px] px-2 py-0.5 rounded uppercase tracking-wider font-semibold z-10 pointer-events-none
                      ${isSelected ? "text-white" : "bg-gray-100/90 text-gray-600"}`}
                              style={{
                                backgroundColor: isSelected
                                  ? colors.primary
                                  : undefined,
                              }}>
                              {sec.label}
                            </div>

                            {/* Drag Handle */}
                            {isDraggable && (
                              <div
                                className="absolute top-1.5 right-1.5 text-gray-600 text-xs px-2 py-0.5 rounded z-10 cursor-grab pointer-events-auto hover:bg-gray-100"
                                style={{ backgroundColor: colors.secondary }}>
                                ⠿ drag
                              </div>
                            )}

                            {/* Component Preview */}
                            <Comp />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddlePanel;
