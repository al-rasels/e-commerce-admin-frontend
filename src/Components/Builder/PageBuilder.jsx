"use client";
import { useState } from "react";
import { useHomeSections, HomeOrder } from "./Hooks/useHomeSections";

import LeftPanel from "./Panels/LeftPanel";
import MiddlePanel from "./Panels/MiddlePanel";
import RightPanel from "./Panels/RightPanel";
import ExportModal from "./Panels/ExportModal";

export default function PageBuilder() {
  // State management
  const [selectedSection, setSelectedSection] = useState("navbar");
  const [pageConfig, setPageConfig] = useState({
    navbar: "navbar-minimal",
    hero: "hero-centered",
    features: "features-grid",
    testimonials: "testimonials-cards",
    cta: "cta-banner",
    footer: "footer-simple",
  });
  const [activeSections, setActiveSections] = useState([
    "navbar",
    "hero",
    "features",
    "cta",
    "footer",
  ]);
  const [dragOrder, setDragOrder] = useState(["hero", "features", "cta"]);
  const [draggedItem, setDraggedItem] = useState(null);
  const [dragOverIndex, setDragOverIndex] = useState(null);
  const [showExport, setShowExport] = useState(false);

  // Event handlers
  const handleVariationSelect = (sectionId, variationId) => {
    setPageConfig((prev) => ({ ...prev, [sectionId]: variationId }));
  };

  const toggleSection = (sectionId) => {
    const section = useHomeSections[sectionId];
    if (section.fixed) return;

    setActiveSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((s) => s !== sectionId)
        : [...prev, sectionId],
    );

    setDragOrder((prev) =>
      prev.includes(sectionId)
        ? prev.filter((s) => s !== sectionId)
        : [...prev, sectionId],
    );
  };

  // Drag & Drop handlers
  const handleDragStart = (e, index) => {
    setDraggedItem(index);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    setDragOverIndex(index);
  };

  const handleDrop = (e, index) => {
    e.preventDefault();
    if (draggedItem === null || draggedItem === index) return;
    const updated = [...dragOrder];
    const [moved] = updated.splice(draggedItem, 1);
    updated.splice(index, 0, moved);
    setDragOrder(updated);
    setDraggedItem(null);
    setDragOverIndex(null);
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
    setDragOverIndex(null);
  };

  // Helper functions
  const getPreviewOrder = () => {
    const result = [];
    if (activeSections.includes("navbar")) result.push("navbar");
    dragOrder.forEach((s) => {
      if (activeSections.includes(s)) result.push(s);
    });
    if (activeSections.includes("footer")) result.push("footer");
    return result;
  };

  const getExportJSON = () => ({
    version: "1.0",
    generatedAt: new Date().toISOString(),
    pages: [
      {
        id: "main-page",
        sections: getPreviewOrder().map((sId) => ({
          id: sId,
          variationId: pageConfig[sId],
          fixed: useHomeSections[sId].fixed || false,
          fixedPosition: useHomeSections[sId].fixedPosition || null,
        })),
      },
    ],
  });

  return (
    <div className="h-screen font-sans bg-gray-950 text-gray-300 overflow-hidden grid  grid-cols-[260px_1fr_350px]">
      <LeftPanel
        selectedSection={selectedSection}
        setSelectedSection={setSelectedSection}
        activeSections={activeSections}
        toggleSection={toggleSection}
        useHomeSections={useHomeSections}
        HomeOrder={HomeOrder}
      />

      <MiddlePanel
        selectedSection={selectedSection}
        setSelectedSection={setSelectedSection}
        pageConfig={pageConfig}
        activeSections={activeSections}
        dragOrder={dragOrder}
        setDraggedItem={setDraggedItem}
        setDragOverIndex={setDragOverIndex}
        handleDragStart={handleDragStart}
        handleDragOver={handleDragOver}
        handleDrop={handleDrop}
        handleDragEnd={handleDragEnd}
        draggedItem={draggedItem}
        dragOverIndex={dragOverIndex}
        getPreviewOrder={getPreviewOrder}
        useHomeSections={useHomeSections}
        setShowExport={setShowExport}
      />

      <RightPanel
        selectedSection={selectedSection}
        pageConfig={pageConfig}
        handleVariationSelect={handleVariationSelect}
        useHomeSections={useHomeSections}
      />

      <ExportModal
        showExport={showExport}
        setShowExport={setShowExport}
        getExportJSON={getExportJSON}
      />
    </div>
  );
}
