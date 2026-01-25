"use client";
import React, { useState } from "react";
import DescriptionEditor from "./DescriptionEditor";

const GeneralForm = ({ onNext }) => {
  const [description, setDescription] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    categories: "",
    tags: "",
    taxClass: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const wordCount = description
    ? description
        .replace(/<[^>]*>/g, "")
        .trim()
        .split(/\s+/)
        .filter(Boolean).length
    : 0;
  return (
    <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="p-6 space-y-4">
        {/* Name Input */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold text-gray-700">
              Name <span className="text-red-500">*</span>
            </span>
          </label>
          <input
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="input input-bordered w-full h-11 focus:outline-teal-500"
          />
        </div>

        {/* Description Editor */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold text-gray-700">
              Description <span className="text-red-500">*</span>
            </span>
          </label>
          <div className="border border-gray-300 rounded-md overflow-hidden">
            <DescriptionEditor value={description} onChange={setDescription} />
            <div className="bg-gray-50 border-t border-gray-200 px-4 py-1.5 flex justify-between items-center text-[11px] text-gray-500 uppercase">
              <span>p »</span>
              <span>
                {wordCount} {wordCount === 1 ? "WORD" : "WORDS"}
              </span>{" "}
            </div>
          </div>
        </div>

        {/* Brand Dropdown */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold text-gray-700">
              Brand
            </span>
          </label>
          <select
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            className="select select-bordered w-full h-11 focus:outline-teal-500 font-normal"
          >
            <option value="">Please Select</option>
            <option value="brand1">Brand One</option>
            <option value="brand2">Brand Two</option>
          </select>
        </div>

        {/* Categories Input */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold text-gray-700">
              Categories
            </span>
          </label>
          <input
            name="categories"
            type="text"
            value={formData.categories}
            onChange={handleChange}
            className="input input-bordered w-full h-11 focus:outline-teal-500"
          />
        </div>

        {/* Tags Input */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold text-gray-700">Tags</span>
          </label>
          <input
            name="tags"
            type="text"
            value={formData.tags}
            onChange={handleChange}
            className="input input-bordered w-full h-11 focus:outline-teal-500"
          />
        </div>

        {/* Tax Class Dropdown */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold text-gray-700">
              Tax Class
            </span>
          </label>
          <select
            name="taxClass"
            value={formData.taxClass}
            onChange={handleChange}
            className="select select-bordered w-full h-11 focus:outline-teal-500 font-normal"
          >
            <option value="">Please Select</option>
            <option value="standard">Standard Tax</option>
            <option value="exempt">Tax Exempt</option>
          </select>
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

export default GeneralForm;
