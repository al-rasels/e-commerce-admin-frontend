"use client";
import React, { useEffect, useRef } from "react";
import {
  FiEdit,
  FiTrash2,
  FiChevronDown,
  FiCalendar,
  FiChevronRight,
} from "react-icons/fi";
import products from "@/Data/products.json";
import { DataTable } from "simple-datatables";
import "simple-datatables/dist/style.css";

const ProductList = () => {
  const tableRef = useRef(null);

  useEffect(() => {
    if (tableRef.current) {
      new DataTable(tableRef.current, {
        searchable: false, // Image shows dropdowns instead of a search bar
        fixedHeight: false,
        perPage: 10,
        layout: {
          top: "", // We will build the custom filter bar manually above the table
          bottom: "{pager}",
        },
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#f8fafc] p-4 md:p-10 font-sans text-slate-700">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-[#425466]">Products List</h1>
          <p className="text-xs text-slate-400 mt-1 italic">
            Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="flex gap-2">
          <button className="btn btn-sm h-10 bg-white border-gray-300 text-slate-500 normal-case hover:bg-gray-50 font-medium px-4">
            Export
          </button>
          <button className="btn btn-sm h-10 bg-white border-gray-300 text-slate-500 normal-case hover:bg-gray-50 font-medium px-4">
            Import
          </button>
          <button className="btn btn-sm h-10 bg-[#007b70] hover:bg-[#005f56] text-white border-none normal-case px-6 font-medium shadow-md">
            Create new
          </button>
        </div>
      </div>

      {/* Custom Filter Bar (Top of Table) */}
      <div className="bg-[#f1f4f9] p-3 rounded-t-lg border border-gray-200 flex flex-wrap gap-4 items-center justify-between">
        <div className="flex gap-4 items-center">
          <input
            type="checkbox"
            className="checkbox checkbox-xs rounded border-gray-400"
          />
          <div className="relative w-48">
            <select className="select select-xs w-full bg-white border-gray-200 font-normal h-8 min-h-0 rounded pr-8 text-[11px]">
              <option>All category</option>
            </select>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="relative w-48">
            <div className="flex items-center bg-white border border-gray-200 rounded h-8 px-2 gap-2">
              <span className="text-[11px] text-slate-500 flex-grow">
                12/24/2026
              </span>
              <FiCalendar className="text-slate-400 text-xs" />
            </div>
          </div>
          <div className="relative w-40">
            <select className="select select-xs w-full bg-white border-gray-200 font-normal h-8 min-h-0 rounded pr-8 text-[11px]">
              <option>Status</option>
            </select>
          </div>
        </div>
      </div>

      {/* DataTable Container */}
      <div className="bg-white rounded-b-lg border-x border-b border-gray-200 shadow-sm overflow-hidden p-0 custom-list-table">
        <div className="overflow-x-auto">
          <table
            ref={tableRef}
            className="table w-full border-separate border-spacing-0"
          >
            <thead className="hidden">
              {/* Hidden headers to match the clean list look in the image */}
              <tr>
                <th>Check</th>
                <th>Product</th>
                <th>Price</th>
                <th>Status</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr
                  key={index}
                  className="hover:bg-slate-50 border-b border-gray-100 last:border-0 transition-colors"
                >
                  <td className="w-12 px-6 py-3">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-xs rounded border-gray-300"
                    />
                  </td>
                  <td className="py-3">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded border border-gray-100 p-1 flex items-center justify-center bg-white shadow-sm overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="object-contain max-h-full"
                        />
                      </div>
                      <span className="text-xs font-medium text-slate-600 truncate max-w-xs">
                        {product.name}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 text-xs font-bold text-slate-700">
                    ${product.price}
                  </td>
                  <td className="py-3 text-xs font-bold text-slate-700">
                    {product.status}
                  </td>
                  <td className="py-3 text-xs text-slate-400 font-medium">
                    02.11.2026
                  </td>
                  <td className="py-3 px-6 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="btn btn-xs h-7 bg-[#007b70] hover:bg-[#005f56] text-white border-none normal-case px-3 rounded text-[10px] font-bold flex items-center gap-1">
                        <FiEdit size={10} /> Edit
                      </button>
                      <button className="btn btn-xs h-7 bg-white border border-gray-200 text-slate-400 hover:bg-red-50 hover:text-red-500 hover:border-red-200 normal-case px-2 rounded">
                        <FiTrash2 size={12} /> Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Global Styles for DataTables Pager Alignment */}
      <style jsx global>{`
        .custom-list-table .datatable-pagination {
          padding: 24px;
        }
        .custom-list-table .datatable-pagination ul {
          display: flex;
          gap: 6px;
        }
        .custom-list-table .datatable-pagination li a {
          background-color: #f1f4f9 !important;
          border: none !important;
          border-radius: 4px !important;
          width: 34px !important;
          height: 34px !important;
          display: flex !important;
          align-items: center;
          justify-content: center;
          font-size: 11px !important;
          font-weight: 700 !important;
          color: #64748b !important;
        }
        .custom-list-table .datatable-pagination li.active a {
          background-color: #007b70 !important;
          color: white !important;
        }
      `}</style>
    </div>
  );
};

export default ProductList;
