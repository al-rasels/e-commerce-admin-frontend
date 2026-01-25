"use client";
import React, { useState } from "react";
import { HiOutlineViewGrid } from "react-icons/hi";

const InventoryForm = ({ onNext }) => {
  const [inventory, setInventory] = useState({
    sku: "",
    management: "Don't Track Inventory",
    stock: "In Stock",
  });

  const handleChange = (e) => {
    setInventory({ ...inventory, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
      <div className="px-4 py-3 border-b border-gray-200 flex justify-between items-center bg-white">
        <h2 className="text-gray-700 font-medium">Inventory</h2>
        <HiOutlineViewGrid className="text-gray-400" />
      </div>

      <div className="p-6 space-y-3">
        <div className="form-control">
          <label className="label-text mb-2 text-gray-600 font-medium">
            SKU
          </label>
          <input
            type="text"
            name="sku"
            value={inventory.sku}
            onChange={handleChange}
            className="input input-bordered w-full h-10 focus:outline-teal-500"
          />
        </div>

        <div className="form-control">
          <label className="label-text mb-2 text-gray-600 font-medium">
            Inventory Management
          </label>
          <select
            name="management"
            value={inventory.management}
            onChange={handleChange}
            className="select select-bordered w-full h-10 min-h-0 font-normal focus:outline-teal-500"
          >
            <option>Do not Track Inventory</option>
            <option>Track Inventory</option>
          </select>
        </div>

        <div className="form-control">
          <label className="label-text mb-2 text-gray-600 font-medium">
            Stock Availability
          </label>
          <select
            name="stock"
            value={inventory.stock}
            onChange={handleChange}
            className="select select-bordered w-full h-10 min-h-0 font-normal focus:outline-teal-500"
          >
            <option>In Stock</option>
            <option>Out of Stock</option>
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

export default InventoryForm;
