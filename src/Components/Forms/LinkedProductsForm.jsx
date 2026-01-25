"use client";
import React, { useState } from "react";
import { HiOutlineViewGrid } from "react-icons/hi";

const LinkedProductsForm = () => {
  const [links, setLinks] = useState({
    upSells: "",
    crossSells: "",
    related: "",
  });

  const handleChange = (e) => {
    setLinks({ ...links, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
      <div className="px-4 py-3 border-b border-gray-200 flex justify-between items-center bg-white">
        <h2 className="text-gray-700 font-medium">Linked Products</h2>
        <HiOutlineViewGrid className="text-gray-400" />
      </div>

      <div className="p-6 space-y-5">
        <div className="form-control">
          <label className="label-text mb-2 text-gray-600 font-medium">
            Up-Sells
          </label>
          <input
            type="text"
            name="upSells"
            value={links.upSells}
            onChange={handleChange}
            className="input input-bordered w-full h-10 focus:outline-teal-500"
          />
        </div>

        <div className="form-control">
          <label className="label-text mb-2 text-gray-600 font-medium">
            Cross-Sells
          </label>
          <input
            type="text"
            name="crossSells"
            value={links.crossSells}
            onChange={handleChange}
            className="input input-bordered w-full h-10 focus:outline-teal-500"
          />
        </div>

        <div className="form-control">
          <label className="label-text mb-2 text-gray-600 font-medium">
            Related Products
          </label>
          <input
            type="text"
            name="related"
            value={links.related}
            onChange={handleChange}
            className="input input-bordered w-full h-10 focus:outline-teal-500"
          />
        </div>
      </div>
    </div>
  );
};

export default LinkedProductsForm;
