import React from "react";
import { FiPlus, FiChevronDown, FiSearch } from "react-icons/fi";
import sellers from "@/Data/seller.json";

const SellersCard = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] p-4 md:p-10 font-sans text-slate-700">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-[#425466]">Sellers cards</h1>
        <button className="btn bg-[#007b70] hover:bg-[#005f56] text-white border-none normal-case h-10 min-h-0 px-4 rounded shadow-sm flex items-center gap-2">
          <FiPlus className="text-lg" /> Create new
        </button>
      </div>

      {/* Filters Bar */}
      <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm flex flex-col md:flex-row gap-4 mb-8">
        {/* Search Input */}
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search..."
            className="input w-full bg-[#f1f4f9] border-none focus:outline-none focus:ring-1 focus:ring-teal-500 h-10 text-sm pl-4 rounded"
          />
        </div>

        {/* Show Count Filter */}
        <div className="relative w-full md:w-48">
          <select className="select select-sm w-full bg-[#f1f4f9] border-none focus:outline-none h-10 font-normal appearance-none rounded pr-10">
            <option>Show 20</option>
            <option>Show 50</option>
          </select>
          <FiChevronDown className="absolute right-3 top-3 text-slate-400 pointer-events-none" />
        </div>

        {/* Status Filter */}
        <div className="relative w-full md:w-48">
          <select className="select select-sm w-full bg-[#f1f4f9] border-none focus:outline-none h-10 font-normal appearance-none rounded pr-10">
            <option>Status: all</option>
            <option>Status: active</option>
            <option>Status: inactive</option>
          </select>
          <FiChevronDown className="absolute right-3 top-3 text-slate-400 pointer-events-none" />
        </div>
      </div>

      {/* Sellers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {sellers.map((seller, index) => (
          <div
            key={seller.id || index}
            className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden flex flex-col items-center pb-8 transition-transform hover:shadow-md"
          >
            {/* Card Header (Light Teal Background) */}
            <div className="w-full h-24 bg-[#d1e7e5] mb-[-48px]"></div>

            {/* Profile Image */}
            <div className="relative w-24 h-24 rounded-full border-4 border-white overflow-hidden shadow-sm mb-4">
              <img
                src={seller.image || "https://via.placeholder.com/150"}
                alt={seller.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Seller Info */}
            <div className="text-center px-4 space-y-1 mb-6">
              <h3 className="font-bold text-[#425466] text-lg">
                {seller.name}
              </h3>
              <p className="text-xs text-slate-400 font-medium uppercase tracking-tight">
                Seller ID: #{seller.id || "478"}
              </p>
              <p className="text-xs text-slate-400 lowercase italic">
                {seller.email || "seller@example.com"}
              </p>
            </div>

            {/* Action Button */}
            <button className="btn bg-[#007b70] hover:bg-[#005f56] text-white border-none normal-case h-9 min-h-0 px-6 rounded text-xs shadow-sm">
              View details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SellersCard;
