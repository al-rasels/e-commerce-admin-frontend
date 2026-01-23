import React from "react";
import {
  FiSearch,
  FiMoreHorizontal,
  FiEye,
  FiEdit2,
  FiTrash2,
} from "react-icons/fi";
import { MdSubdirectoryArrowRight } from "react-icons/md";

const CategoriesPage = () => {
  const categories = [
    {
      id: 21,
      name: "Men clothes",
      desc: "Men clothes",
      slug: "/men",
      order: 1,
    },
    {
      id: 2,
      name: "Women fashion",
      desc: "Fashions for Women",
      slug: "/women",
      order: 2,
    },
    {
      id: 3,
      name: "Kids clothes",
      desc: "Clothes for kids",
      slug: "/kids",
      order: 3,
    },
    {
      id: 4,
      name: "Hot Gifts",
      desc: "Hot Gifts",
      slug: "/gifts",
      order: 4,
      isChild: true,
    },
    {
      id: 5,
      name: "Electronics",
      desc: "Electronics",
      slug: "/electr",
      order: 5,
      isChild: true,
    },
    {
      id: 6,
      name: "Accessories",
      desc: "Accessories",
      slug: "/accessories",
      order: 6,
    },
    { id: 7, name: "Jewellery", desc: "Jewellery", slug: "/jewel", order: 7 },
    {
      id: 8,
      name: "Interiors",
      desc: "Interiors",
      slug: "/interior",
      order: 8,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-10 font-sans text-slate-700">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Categories</h1>
          <p className="text-sm text-slate-500 mt-1">
            Add, edit or delete a category
          </p>
        </div>
        <div className="relative w-full md:w-80">
          <input
            type="text"
            placeholder="Search Categories"
            className="input input-bordered w-full bg-white pr-10 focus:outline-teal-600"
          />
          <FiSearch className="absolute right-3 top-4 text-gray-400" />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Side: Create Form Sidebar */}
        <div className="w-full lg:w-1/3 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 h-fit">
          <div className="form-control w-full space-y-4">
            <div>
              <label className="label font-semibold text-slate-600 pb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full bg-slate-50 focus:bg-white"
              />
            </div>

            <div>
              <label className="label font-semibold text-slate-600 pb-1">
                Slug
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full bg-slate-50 focus:bg-white"
              />
            </div>

            <div>
              <label className="label font-semibold text-slate-600 pb-1">
                Parent
              </label>
              <select className="select select-bordered w-full bg-slate-50 font-normal">
                <option>Clothes</option>
              </select>
            </div>

            <div>
              <label className="label font-semibold text-slate-600 pb-1">
                Description
              </label>
              <textarea
                className="textarea textarea-bordered h-32 bg-slate-50 w-full focus:bg-white"
                placeholder="Type here"
              ></textarea>
            </div>

            <button className="btn bg-[#007b70] hover:bg-[#005f56] text-white border-none w-full mt-4 normal-case text-lg shadow-md">
              Create category
            </button>
          </div>
        </div>

        {/* Right Side: Data Table */}
        <div className="w-full lg:w-2/3 bg-white rounded-2xl shadow-sm border border-gray-100 p-2 md:p-6 overflow-visible">
          <div className="overflow-x-auto min-h-[500px]">
            <table className="table w-full">
              <thead className="text-slate-400 uppercase text-xs">
                <tr className="border-b border-gray-100">
                  <th className="bg-white">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-sm checkbox-primary"
                    />
                  </th>
                  <th className="bg-white font-bold">ID</th>
                  <th className="bg-white font-bold">Name</th>
                  <th className="bg-white font-bold">Description</th>
                  <th className="bg-white font-bold">Slug</th>
                  <th className="bg-white font-bold">Order</th>
                  <th className="bg-white text-right font-bold">Action</th>
                </tr>
              </thead>
              <tbody className="text-slate-600">
                {categories.map((cat) => (
                  <tr
                    key={cat.id}
                    className="hover:bg-slate-50 border-b border-gray-50 last:border-0 transition-colors"
                  >
                    <td>
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          className="checkbox checkbox-sm checkbox-primary"
                        />
                      </div>
                    </td>
                    <td className="font-medium text-slate-800">{cat.id}</td>
                    <td className="font-semibold text-slate-800">{cat.name}</td>
                    <td className="max-w-[140px] truncate text-slate-500">
                      {cat.desc}
                    </td>
                    <td className="text-slate-500 font-mono text-xs">
                      {cat.slug}
                    </td>
                    <td>{cat.order}</td>

                    {/* DROPDOWN ACTION MENU */}
                    <td className="text-right">
                      <div className="dropdown dropdown-left dropdown-end">
                        <label
                          tabIndex={0}
                          className="btn btn-ghost btn-sm btn-square border border-gray-200 bg-white"
                        >
                          <FiMoreHorizontal />
                        </label>
                        <ul
                          tabIndex={0}
                          className="dropdown-content z-[100] menu p-2 shadow-2xl bg-white rounded-box w-52 border border-gray-100 mt-2"
                        >
                          <li>
                            <button className="flex items-center gap-3 py-3 hover:bg-slate-50 text-slate-700">
                              <FiEye className="text-blue-500" /> View Details
                            </button>
                          </li>
                          <li>
                            <button className="flex items-center gap-3 py-3 hover:bg-slate-50 text-slate-700">
                              <FiEdit2 className="text-amber-500" /> Edit
                              Category
                            </button>
                          </li>
                          <div className="divider my-0 opacity-50"></div>
                          <li>
                            <button className="flex items-center gap-3 py-3 text-red-500 hover:bg-red-50">
                              <FiTrash2 /> Delete
                            </button>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
