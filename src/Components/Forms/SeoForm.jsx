"use client";
import React, { useState } from "react";
import { HiOutlineViewGrid } from "react-icons/hi";

const SeoForm = ({ onNext }) => {
  const [seoData, setSeoData] = useState({
    url: "",
    metaTitle: "",
    metaDescription: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSeoData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
      <div className="px-4 py-3 border-b border-gray-200 flex justify-between items-center bg-white">
        <h2 className="text-gray-700 font-medium">SEO</h2>
        <HiOutlineViewGrid className="text-gray-400" />
      </div>

      <div className="p-6 space-y-5">
        <div className="form-control">
          <label className="label-text mb-2 text-gray-600 font-medium">
            URL
          </label>
          <input
            type="text"
            name="url"
            value={seoData.url}
            onChange={handleChange}
            className="input input-bordered w-full h-10 focus:outline-teal-500"
          />
        </div>

        <div className="form-control">
          <label className="label-text mb-2 text-gray-600 font-medium">
            Meta Title
          </label>
          <input
            type="text"
            name="metaTitle"
            value={seoData.metaTitle}
            onChange={handleChange}
            className="input input-bordered w-full h-10 focus:outline-teal-500"
          />
        </div>

        <div className="form-control">
          <label className="label-text mb-2 text-gray-600 font-medium">
            Meta Description
          </label>
          <textarea
            name="metaDescription"
            value={seoData.metaDescription}
            onChange={handleChange}
            className="textarea textarea-bordered w-full h-32 focus:outline-teal-500"
          ></textarea>
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

export default SeoForm;
