import React from "react";
import { FiChevronDown } from "react-icons/fi";
import { HiOutlinePhotograph } from "react-icons/hi";

const CreateProductPage = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] p-4 md:p-8 font-sans text-[#425466]">
      {/* Top Header Row */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-[#425466]">Add New Product</h1>
        <div className="flex gap-2">
          <button className="btn btn-sm h-10 bg-white border-gray-300 text-slate-500 normal-case hover:bg-gray-50 font-normal px-4">
            Save to draft
          </button>
          <button className="btn btn-sm h-10 bg-[#007b70] hover:bg-[#005f56] text-white border-none normal-case px-6 font-normal">
            Publish
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column (Main Form) */}
        <div className="lg:col-span-2 space-y-6">
          {/* Basic Info Section */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
            <div className="bg-[#f9fafb] px-6 py-3 border-b border-gray-200">
              <h2 className="text-base font-semibold">Basic</h2>
            </div>
            <div className="p-6 space-y-5">
              <div className="form-control">
                <label className="label py-1">
                  <span className="label-text text-xs font-semibold">
                    Product title
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-sm w-full h-10 bg-[#f1f4f9] border-none focus:ring-0 rounded"
                />
              </div>
              <div className="form-control">
                <label className="label py-1">
                  <span className="label-text text-xs font-semibold">
                    Full description
                  </span>
                </label>
                <textarea
                  placeholder="Type here"
                  className="textarea w-full bg-[#f1f4f9] border-none focus:ring-0 h-32 rounded leading-relaxed"
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="form-control">
                  <label className="label py-1">
                    <span className="label-text text-xs font-semibold">
                      Regular price
                    </span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-2.5 text-xs text-slate-400">
                      $
                    </span>
                    <input
                      type="text"
                      className="input input-sm h-10 w-full bg-[#f1f4f9] border-none pl-7 rounded"
                    />
                  </div>
                </div>
                <div className="form-control">
                  <label className="label py-1">
                    <span className="label-text text-xs font-semibold">
                      Promotional price
                    </span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-2.5 text-xs text-slate-400">
                      $
                    </span>
                    <input
                      type="text"
                      className="input input-sm h-10 w-full bg-[#f1f4f9] border-none pl-7 rounded"
                    />
                  </div>
                </div>
                <div className="form-control">
                  <label className="label py-1">
                    <span className="label-text text-xs font-semibold">
                      Currency
                    </span>
                  </label>
                  <div className="relative">
                    <select className="select select-sm h-10 w-full bg-[#f1f4f9] border-none font-normal appearance-none rounded">
                      <option>USD</option>
                    </select>
                    <FiChevronDown className="absolute right-3 top-3 text-slate-400" />
                  </div>
                </div>
              </div>

              <div className="form-control w-full md:w-full">
                <label className="label py-1">
                  <span className="label-text text-xs font-semibold">
                    Tax rate
                  </span>
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-xs text-slate-400">
                    %
                  </span>
                  <input
                    type="text"
                    className="input input-sm h-10 w-full bg-[#f1f4f9] border-none pl-7 rounded"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <input
                  type="checkbox"
                  className="checkbox checkbox-xs rounded border-gray-300"
                />
                <span className="text-xs text-slate-500">Make a template</span>
              </div>
            </div>
          </div>

          {/* Shipping Section */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
            <div className="bg-[#f9fafb] px-6 py-3 border-b border-gray-200">
              <h2 className="text-base font-semibold">Shipping</h2>
            </div>
            <div className="p-6 space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label py-1">
                    <span className="label-text text-xs font-semibold mr-2">
                      Width
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="inch"
                    className="input input-sm h-10 bg-[#f1f4f9] border-none rounded px-4 text-xs"
                  />
                </div>
                <div className="form-control">
                  <label className="label py-1">
                    <span className="label-text text-xs font-semibold mr-2">
                      Height
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="inch"
                    className="input input-sm h-10 bg-[#f1f4f9] border-none rounded px-4 text-xs"
                  />
                </div>
              </div>
              <div className="form-control">
                <label className="label py-1">
                  <span className="label-text text-xs font-semibold mr-2">
                    Weight
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="gram"
                  className="input input-sm h-10 bg-[#f1f4f9] border-none rounded px-4 text-xs"
                />
              </div>
              <div className="form-control">
                <label className="label py-1">
                  <span className="label-text text-xs font-semibold">
                    Shipping fees
                  </span>
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-xs text-slate-400">
                    $
                  </span>
                  <input
                    type="text"
                    className="input input-sm h-10 w-full bg-[#f1f4f9] border-none pl-7 rounded px-4 text-xs"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (Sidebar) */}
        <div className="space-y-6">
          {/* Media Section */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
            <div className="bg-[#f9fafb] px-6 py-3 border-b border-gray-200">
              <h2 className="text-base font-semibold">Media</h2>
            </div>
            <div className="p-6 flex flex-col items-center">
              <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6 relative">
                <HiOutlinePhotograph className="text-4xl text-blue-400" />
                <div className="absolute top-0 right-0 bg-blue-500 rounded-full p-1 border-2 border-white">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M5 10l7-7m0 0l7 7m-7-7v18"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="flex items-center bg-[#f1f4f9] rounded w-full h-10 overflow-hidden text-xs">
                <button className="px-4 h-full bg-gray-100 hover:bg-gray-200 border-r border-gray-200 font-semibold text-slate-600">
                  Choose File
                </button>
                <span className="px-3 text-slate-400 italic">
                  No file chosen
                </span>
              </div>
            </div>
          </div>

          {/* Organization Section */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
            <div className="bg-[#f9fafb] px-6 py-3 border-b border-gray-200">
              <h2 className="text-base font-semibold">Organization</h2>
            </div>
            <div className="p-6 space-y-5">
              <div className="grid grid-cols-2 gap-3">
                <div className="form-control">
                  <label className="label py-1">
                    <span className="label-text text-[10px] font-bold uppercase text-slate-400">
                      Category
                    </span>
                  </label>
                  <div className="relative">
                    <select className="select select-sm h-10 w-full bg-[#f1f4f9] border-none font-normal appearance-none rounded text-xs">
                      <option>Automobiles</option>
                    </select>
                  </div>
                </div>
                <div className="form-control">
                  <label className="label py-1">
                    <span className="label-text text-[10px] font-bold uppercase text-slate-400">
                      Sub-category
                    </span>
                  </label>
                  <div className="relative">
                    <select className="select select-sm h-10 w-full bg-[#f1f4f9] border-none font-normal appearance-none rounded text-xs">
                      <option>Nissan</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="form-control">
                <label className="label py-1">
                  <span className="label-text text-[10px] font-bold uppercase text-slate-400 mr-2">
                    Tags
                  </span>
                </label>
                <input
                  type="text"
                  className="input input-sm h-10 bg-[#f1f4f9] border-none rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProductPage;
