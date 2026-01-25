"use client";
import React, { useState } from "react";
import { HiOutlineTrash, HiDotsVertical } from "react-icons/hi";

const VariationsForm = ({ onNext }) => {
  // Use lazy initialization to keep the component pure during render
  const [variations, setVariations] = useState(() => [
    { id: "v1", name: "", type: "" },
  ]);

  // FIXED: Function to handle state updates for individual variations
  const handleInputChange = (id, field, value) => {
    setVariations(
      variations.map((v) => (v.id === id ? { ...v, [field]: value } : v)),
    );
  };

  const addVariation = () => {
    // Safe to use Date.now() inside an event handler
    setVariations([...variations, { id: Date.now(), name: "", type: "" }]);
  };

  const removeVariation = (id) => {
    setVariations(variations.filter((v) => v.id !== id));
  };

  return (
    <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
      <div className="px-4 py-3 border-b border-gray-200 flex justify-between items-center">
        <h2 className="text-gray-700 font-medium">Variations</h2>
        <div className="flex gap-3 text-gray-400">
          <HiDotsVertical className="cursor-pointer" />
        </div>
      </div>

      <div className="p-4 space-y-4">
        {variations.map((v) => (
          <div key={v.id} className="border border-gray-100 rounded-md">
            <div className="bg-gray-50/50 px-4 py-2 border-b border-gray-100 flex justify-between items-center">
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <span>New Variation</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <HiOutlineTrash
                  className="cursor-pointer hover:text-red-500"
                  onClick={() => removeVariation(v.id)}
                />
              </div>
            </div>

            <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-control">
                <label className="label-text mb-2 text-gray-600 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  value={v.name}
                  onChange={(e) =>
                    handleInputChange(v.id, "name", e.target.value)
                  }
                  className="input input-bordered h-10 w-full focus:outline-teal-500"
                />
              </div>
              <div className="form-control">
                <label className="label-text mb-2 text-gray-600 font-medium">
                  Type
                </label>
                {/* FIXED: Use value on select instead of selected on option */}
                <select
                  value={v.type}
                  onChange={(e) =>
                    handleInputChange(v.id, "type", e.target.value)
                  }
                  className="select select-bordered h-10 min-h-0 w-full focus:outline-teal-500 font-normal"
                >
                  <option value="" disabled>
                    Please Select
                  </option>
                  <option value="Physical">Physical</option>
                  <option value="Digital">Digital</option>
                </select>
              </div>
            </div>
          </div>
        ))}

        <div className="flex justify-between items-center pt-2">
          <button
            onClick={addVariation}
            className="btn btn-sm bg-gray-100 border-none text-gray-700 hover:bg-gray-200 capitalize"
          >
            Add Variation
          </button>
        </div>
        <div className="flex justify-end mt-8 pt-4 border-t border-gray-100">
          <button
            onClick={onNext}
            type="button"
            className="btn bg-primary hover:bg-teal-700 text-white border-none px-8 capitalize"
          >
            Continue to next
          </button>
        </div>
      </div>
    </div>
  );
};

export default VariationsForm;
