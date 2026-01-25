"use client";
import React, { useState } from "react";
import { HiOutlinePhotograph } from "react-icons/hi";

const MediaForm = ({ onNext }) => {
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Create a local URL to preview the image immediately
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
      {/* Header */}
      <div className="px-4 py-3 border-b border-gray-200 flex justify-between items-center">
        <h2 className="text-gray-700 font-medium">Media</h2>
      </div>

      <div className="p-6">
        <div className="flex flex-wrap gap-4">
          {/* Upload Box */}
          <label className="w-40 h-40 border-2 border-dashed border-gray-200 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors relative overflow-hidden">
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleImageChange}
            />

            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Preview"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="text-gray-300 flex flex-col items-center">
                <HiOutlinePhotograph size={64} strokeWidth={1} />
                {/* <span className="text-4xl -mt-8 ml-0 text-gray-300">+</span> */}
              </div>
            )}
          </label>
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

export default MediaForm;
