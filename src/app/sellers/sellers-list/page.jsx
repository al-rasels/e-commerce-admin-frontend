"use client";
import React, { useEffect, useRef } from "react";
import { FiPlus, FiChevronRight } from "react-icons/fi";
import sellers from "@/Data/seller.json";
import { DataTable } from "simple-datatables";
import "simple-datatables/dist/style.css";

const SellerList = () => {
  const tableRef = useRef(null);

  useEffect(() => {
    if (tableRef.current) {
      const dataTable = new DataTable(tableRef.current, {
        searchable: true,
        fixedHeight: false,
        perPage: 10,
        // CUSTOM LAYOUT: This moves the search and selector to the correct positions
        layout: {
          top: "{select}{search}",
          bottom: "{info}{pager}",
        },
        labels: {
          placeholder: "Search...",
          perPage: "{select}",
          noRows: "No entries found",
          info: "", // Hidden to match image
        },
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#f8fafc] p-4 md:p-10 font-sans text-slate-700">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-[#425466]">Sellers list</h1>
        <button className="btn bg-[#007b70] hover:bg-[#005f56] text-white border-none normal-case h-10 min-h-0 px-4 rounded shadow-sm flex items-center gap-2 font-medium">
          <FiPlus className="text-lg" /> Create new
        </button>
      </div>

      {/* DataTable Wrapper */}
      <div className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden p-6 datatable-container">
        <div className="overflow-x-auto">
          <table
            ref={tableRef}
            className="table w-full border-separate border-spacing-0"
          >
            <thead>
              <tr className="text-[#425466] text-xs font-bold uppercase tracking-wider bg-white">
                <th className="py-4 px-6 border-b border-gray-100">Seller</th>
                <th className="py-4 px-6 border-b border-gray-100 text-left">
                  Email
                </th>
                <th className="py-4 px-6 border-b border-gray-100 text-center">
                  Status
                </th>
                <th className="py-4 px-6 border-b border-gray-100 text-center">
                  Registered
                </th>
                <th className="py-4 px-6 border-b border-gray-100 text-right">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {sellers.map((seller) => (
                <tr
                  key={seller.id}
                  className="hover:bg-slate-50 transition-colors"
                >
                  <td className="py-4 px-6 border-b border-gray-50">
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="w-10 rounded-full border border-gray-100 shadow-sm">
                          <img src={seller.avatar} alt={seller.name} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-sm text-[#425466] whitespace-nowrap">
                          {seller.name}
                        </div>
                        <div className="text-[11px] text-slate-400 font-medium">
                          Seller ID: {seller.sellerId}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 border-b border-gray-50 text-xs text-slate-500 italic">
                    {seller.email}
                  </td>
                  <td className="py-4 px-6 border-b border-gray-50 text-center">
                    <span
                      className={`text-xs font-medium ${seller.status === "Active" ? "text-slate-600" : "text-slate-400"}`}
                    >
                      {seller.status || "Active"}
                    </span>
                  </td>
                  <td className="py-4 px-6 border-b border-gray-50 text-xs text-slate-500 font-medium text-center">
                    {seller.registered}
                  </td>
                  <td className="py-4 px-6 border-b border-gray-50 text-right">
                    <button className="btn bg-[#007b70] hover:bg-[#005f56] text-white border-none normal-case h-8 min-h-0 px-4 rounded text-[11px] font-medium shadow-sm">
                      View details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* PIXEL PERFECT CSS OVERRIDES */}
      <style jsx global>{`
        /* Aligning the top controls (Select and Search) */
        .datatable-container .datatable-top {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-bottom: 20px;
          margin-bottom: 10px;
        }

        /* Show 20 Select Box */
        .datatable-container .datatable-selector {
          background-color: #f1f4f9 !important;
          border: none !important;
          border-radius: 4px !important;
          height: 40px !important;
          padding: 0 30px 0 12px !important;
          color: #425466 !important;
          font-size: 13px !important;
        }

        /* Search Bar */
        .datatable-container .datatable-search {
          flex-grow: 1;
        }
        .datatable-container .datatable-input {
          background-color: #f1f4f9 !important;
          border: none !important;
          border-radius: 4px !important;
          height: 40px !important;
          width: 100% !important;
          padding-left: 15px !important;
          font-size: 13px !important;
        }

        /* Table Alignment Fixes */
        .datatable-container .datatable-table {
          border-collapse: separate !important;
          width: 100% !important;
        }

        /* Column Header Sorting Icons (Hidden to match your clean image) */
        .datatable-sorter::before,
        .datatable-sorter::after {
          display: none !important;
        }

        /* PAGINATION BUTTONS - Matching the teal square style */
        .datatable-container .datatable-pagination {
          margin-top: 25px;
        }
        .datatable-container .datatable-pagination ul {
          display: flex;
          gap: 6px;
        }
        .datatable-container .datatable-pagination li a {
          background-color: #f1f4f9 !important;
          border: none !important;
          border-radius: 4px !important;
          width: 34px !important;
          height: 34px !important;
          display: flex !important;
          align-items: center;
          justify-content: center;
          font-size: 12px !important;
          font-weight: 700 !important;
          color: #64748b !important;
          padding: 0 !important;
        }
        /* Active Page Button (Teal) */
        .datatable-container .datatable-pagination li.active a {
          background-color: #007b70 !important;
          color: #ffffff !important;
        }
        /* Hover effect */
        .datatable-container .datatable-pagination li a:hover {
          background-color: #e2e8f0 !important;
        }
      `}</style>
    </div>
  );
};

export default SellerList;
