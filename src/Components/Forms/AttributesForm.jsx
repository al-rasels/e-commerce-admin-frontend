"use client";
import React, { useState } from "react";
import { HiOutlineTrash, HiDotsVertical } from "react-icons/hi";

const AttributesForm = ({ onNext }) => {
  // 1. FIXED: Ensure name and values are empty strings, not undefined
  const [attributes, setAttributes] = useState(() => [
    { id: "initial-row", name: "", values: "" },
  ]);

  const handleInputChange = (id, field, value) => {
    setAttributes(
      attributes.map((attr) =>
        // Ensure the fallback value is always a string
        attr.id === id ? { ...attr, [field]: value || "" } : attr,
      ),
    );
  };

  const addRow = () => {
    // 2. FIXED: Use empty strings for new rows too
    setAttributes([...attributes, { id: Date.now(), name: "", values: "" }]);
  };

  const removeRow = (id) => {
    setAttributes(attributes.filter((attr) => attr.id !== id));
  };

  return (
    <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
      <div className="px-4 py-3 border-b border-gray-200 flex justify-between items-center">
        <h2 className="text-gray-700 font-medium">Attributes</h2>
        <HiDotsVertical className="text-gray-400 cursor-pointer" />
      </div>

      <div className="p-4">
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-400 text-sm font-normal border-b border-gray-100">
              <th className="pb-3 w-10"></th>
              <th className="pb-3 font-normal">Attribute</th>
              <th className="pb-3 font-normal">Values</th>
              <th className="pb-3 w-10"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {attributes.map((attr) => (
              <tr key={attr.id} className="group">
                <td className="py-3">
                  <div className="flex gap-0.5 text-gray-300">
                    <HiDotsVertical />
                    <HiDotsVertical className="-ml-3" />
                  </div>
                </td>
                <td className="py-3 pr-4">
                  <select
                    className="select select-bordered w-full h-10 min-h-0 font-normal focus:outline-teal-500 bg-white"
                    value={attr.name}
                    onChange={(e) =>
                      handleInputChange(attr.id, "name", e.target.value)
                    }
                  >
                    <option value="" disabled>
                      Please Select
                    </option>
                    <option value="color">Color</option>
                    <option value="size">Size</option>
                  </select>
                </td>
                <td className="py-3">
                  <input
                    type="text"
                    // 3. FIXED: The value is guaranteed to be a string now
                    value={attr.values}
                    onChange={(e) =>
                      handleInputChange(attr.id, "values", e.target.value)
                    }
                    className="input input-bordered w-full h-10 focus:outline-teal-500"
                  />
                </td>
                <td className="py-3 text-right">
                  <button
                    onClick={() => removeRow(attr.id)}
                    className="p-2 text-gray-400 hover:text-red-500"
                  >
                    <HiOutlineTrash size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button
          onClick={addRow}
          className="btn btn-sm mt-4 bg-gray-100 border-none text-gray-700 hover:bg-gray-200"
        >
          Add Attribute
        </button>
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

export default AttributesForm;
