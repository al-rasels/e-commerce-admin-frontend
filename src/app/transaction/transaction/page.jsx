"use client";

import React, { useEffect, useRef, useState } from "react";
import transactionData from "@/Data/transaction.json";
import { Calendar, Download, Printer, RefreshCcw } from "lucide-react";

const TransactionPage = () => {
  const tableRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let table;
    let $;

    const initTable = async () => {
      $ = (await import("jquery")).default;
      const DataTable = (await import("datatables.net-dt")).default;

      if (!$.fn.DataTable) {
        DataTable(window, $);
      }

      table = $(tableRef.current).DataTable({
        data: transactionData,
        pageLength: 10,
        pagingType: "numbers", // Matches MediaPage style
        ordering: true,
        searching: true,
        destroy: true,
        // Layout matching your MediaPage structure
        dom:
          "<'dt-top flex justify-between items-center p-4'<'dt-left flex items-center'l>f>" +
          "<'border rounded-lg overflow-hidden't>" +
          "<'dt-bottom flex justify-between items-center p-4'i p>",
        columns: [
          {
            data: null,
            title: "DATE & TIME",
            className: "text-sm py-4",
            render: (data) => `
              <div class="flex flex-col">
                <span class="font-bold text-slate-700">${data.date}</span>
                <span class="text-xs text-slate-400">at ${data.time}</span>
              </div>`,
          },
          {
            data: "seller",
            title: "SELLER",
            render: (data) => `
              <div class="flex items-center gap-2">
                <div class="w-8 h-8 rounded border bg-gray-50 flex items-center justify-center text-[10px] font-bold text-gray-400">LOGO</div>
                <span class="font-medium text-slate-600">${data}</span>
              </div>`,
          },
          { data: "sku", title: "SKU", className: "text-slate-500 text-sm" },
          {
            data: "method",
            title: "METHOD",
            className: "text-slate-600 font-medium",
          },
          { data: "type", title: "TYPE", className: "text-slate-400" },
          {
            data: "status",
            title: "STATUS",
            render: (data) => {
              const colors = {
                APPROVED: "bg-blue-100 text-blue-600 border-blue-200",
                WAITING: "bg-teal-100 text-teal-600 border-teal-200",
                CANCELLED: "bg-red-100 text-red-600 border-red-200",
                REJECTED: "bg-gray-100 text-gray-600 border-gray-200",
              };
              return `<span class="px-3 py-1 rounded-full text-[10px] font-black border ${colors[data] || "bg-gray-50"}">${data}</span>`;
            },
          },
          { data: "country", title: "COUNTRY", className: "text-slate-500" },
          {
            data: "currency",
            title: "CURR",
            className: "text-slate-500 font-mono",
          },
          { data: "fee", title: "FEE", render: (data) => data.toFixed(2) },
          { data: "tax", title: "TAX", render: (data) => data.toFixed(1) },
          {
            data: "amount",
            title: "AMOUNT",
            className: "font-black text-slate-800 text-right",
            render: (data) => `$${data.toLocaleString()}`,
          },
        ],
        language: {
          search: "",
          searchPlaceholder: "Search here...",
          lengthMenu: "Show _MENU_ entries",
        },
      });
      setIsLoaded(true);
    };

    initTable();

    return () => {
      if (table) table.destroy();
    };
  }, []);

  return (
    <div className="p-8 bg-[#f8f9fa] min-h-screen font-sans">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-black text-slate-800 tracking-tight">
            Transactions
          </h1>
          <div className="flex items-center gap-2 text-slate-400 text-sm mt-1 font-medium">
            <RefreshCcw size={14} className="text-blue-500" />
            Data Refresh{" "}
            <span className="text-slate-300 ml-4">
              January 17, 2026 12:38 PM
            </span>
          </div>
        </div>
      </div>

      {/* Filter Bar (Visual Only) */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 mb-6 flex justify-between items-center">
        <div className="flex flex-col">
          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">
            Transaction date from:
          </label>
          <div className="flex items-center gap-2 border px-3 py-1.5 rounded-md text-sm text-slate-600 bg-slate-50 cursor-default">
            <Calendar size={14} />
            <span>01/01/2026 - 17/01/2026</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs text-slate-400 font-medium">
            View transactions:{" "}
            <span className="text-slate-800 font-bold">6/12</span>
          </span>
          <select className="border rounded-md px-4 py-1.5 text-sm bg-white text-slate-600 outline-none hover:border-slate-300 cursor-pointer">
            <option>Recent</option>
            <option>Oldest</option>
          </select>
        </div>
      </div>

      {/* DataTable Container */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 relative">
        {!isLoaded && (
          <div className="flex items-center justify-center p-20 text-slate-400 animate-pulse">
            Loading data...
          </div>
        )}
        <div
          className={`transaction-table ${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
        >
          <table ref={tableRef} className="display w-full border-none">
            {/* Table generated by DataTables */}
          </table>
        </div>
      </div>

      <style jsx global>{`
        /* Header Styling */
        .transaction-table table.dataTable thead th {
          background: #fdfdfd !important;
          color: #3b82f6 !important;
          font-size: 11px !important;
          font-weight: 800 !important;
          letter-spacing: 0.05em;
          padding: 12px 15px !important;
          border-bottom: 1px solid #f1f5f9 !important;
          text-align: left !important;
        }

        /* Search input matching MediaPage */
        .transaction-table .dataTables_wrapper .dataTables_filter input {
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 8px 14px;
          background: #f8fafc;
          outline: none;
          margin-left: 12px;
          font-size: 14px;
        }

        .transaction-table table.dataTable tbody td {
          border-bottom: 1px solid #f8fafc !important;
          padding: 18px 15px !important;
          vertical-align: middle;
        }
      `}</style>
    </div>
  );
};

export default TransactionPage;
