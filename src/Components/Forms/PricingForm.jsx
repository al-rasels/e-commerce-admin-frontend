"use client";
import React, { useState } from "react";
import { HiOutlineCalendar, HiOutlineViewGrid } from "react-icons/hi";

const PricingForm = ({ onNext }) => {
  const [pricing, setPricing] = useState({
    price: "",
    specialPrice: "",
    type: "Fixed",
    start: "",
    end: "",
  });

  return (
    <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
      <div className="px-4 py-3 border-b border-gray-200 flex justify-between items-center">
        <h2 className="text-gray-700 font-medium">Pricing</h2>
        <HiOutlineViewGrid className="text-gray-400" />
      </div>

      <div className="p-6 space-y-5">
        {/* Price */}
        <div className="form-control">
          <label className="label-text mb-2 text-gray-600 font-medium">
            Price <span className="text-red-500">*</span>
          </label>
          <div className="flex">
            <span className="inline-flex items-center px-4 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
              $
            </span>
            <input
              type="number"
              className="input input-bordered rounded-l-none w-full h-10 focus:outline-teal-500"
            />
          </div>
        </div>

        {/* Special Price */}
        <div className="form-control">
          <label className="label-text mb-2 text-gray-600 font-medium">
            Special Price
          </label>
          <div className="flex">
            <span className="inline-flex items-center px-4 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
              $
            </span>
            <input
              type="number"
              className="input input-bordered rounded-l-none w-full h-10 focus:outline-teal-500"
            />
          </div>
        </div>

        {/* Special Price Type */}
        <div className="form-control">
          <label className="label-text mb-2 text-gray-600 font-medium">
            Special Price Type
          </label>
          <select className="select select-bordered w-full h-10 min-h-0 font-normal focus:outline-teal-500">
            <option>Fixed</option>
            <option>Percentage</option>
          </select>
        </div>

        {/* Date Ranges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label-text mb-2 text-gray-600 font-medium">
              Special Price Start
            </label>
            <div className="flex">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                <HiOutlineCalendar />
              </span>
              <input
                type="date"
                className="input input-bordered rounded-l-none w-full h-10 focus:outline-teal-500"
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label-text mb-2 text-gray-600 font-medium">
              Special Price End
            </label>
            <div className="flex">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                <HiOutlineCalendar />
              </span>
              <input
                type="date"
                className="input input-bordered rounded-l-none w-full h-10 focus:outline-teal-500"
              />
            </div>
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

export default PricingForm;
