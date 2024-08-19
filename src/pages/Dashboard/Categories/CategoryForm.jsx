import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../../components/dashboard/Sidebar";

const CategoryForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Form submission logic goes here
    console.log("Form submitted:", {
      name,
    });
    navigate("/dashboard/category");
  };
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="ml-6 p-4 w-full">
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
          <h2 className="text-2xl font-bold mb-4">Create Category</h2>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Create Category
          </button>
        </form>
      </main>
    </div>
  );
};

export default CategoryForm;
