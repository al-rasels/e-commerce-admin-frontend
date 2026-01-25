"use client";
import React, { useState } from "react";
import { HiOutlineCalendar, HiOutlineViewGrid } from "react-icons/hi";

const AdditionalForm = ({ onNext }) => {
  const [additional, setAdditional] = useState({
    shortDescription: "",
    newFrom: "",
    newTo: "",
  });

  const handleChange = (e) => {
    setAdditional({ ...additional, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
      {/* Header */}
      <div className="px-4 py-3 border-b border-gray-200 flex justify-between items-center bg-white">
        <h2 className="text-gray-700 font-medium">Additional</h2>
        <HiOutlineViewGrid className="text-gray-400" />
      </div>

      <div className="p-6 space-y-5">
        {/* Short Description */}
        <div className="form-control">
          <label className="label-text mb-2 text-gray-600 font-medium">
            Short Description
          </label>
          <textarea
            name="shortDescription"
            value={additional.shortDescription}
            onChange={handleChange}
            className="textarea textarea-bordered w-full h-32 focus:outline-teal-500"
          ></textarea>
        </div>

        {/* Date Ranges */}
        <div className="form-control">
          <label className="label-text mb-2 text-gray-600 font-medium">
            New From
          </label>
          <div className="flex">
            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
              <HiOutlineCalendar />
            </span>
            <input
              type="date"
              name="newFrom"
              value={additional.newFrom}
              onChange={handleChange}
              className="input input-bordered rounded-l-none w-full h-10 focus:outline-teal-500"
            />
          </div>
        </div>

        <div className="form-control">
          <label className="label-text mb-2 text-gray-600 font-medium">
            New To
          </label>
          <div className="flex">
            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
              <HiOutlineCalendar />
            </span>
            <input
              type="date"
              name="newTo"
              value={additional.newTo}
              onChange={handleChange}
              className="input input-bordered rounded-l-none w-full h-10 focus:outline-teal-500"
            />
          </div>
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

export default AdditionalForm;
