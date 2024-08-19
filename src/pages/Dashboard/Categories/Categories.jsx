import { Link } from "react-router-dom";
import Sidebar from "../../../components/dashboard/Sidebar";

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Category 1",
    },
    {
      id: 2,
      name: "Category 2",
    },
    {
      id: 3,
      name: "Category 3",
    },
  ];
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="ml-6 p-4 w-full">
        <div className="container mx-auto p-4">
          <Link
            to="/dashboard/category/add"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Create Category
          </Link>
          <table className="table-auto mt-4 w-full mb-4">
            <thead>
              <tr>
                <th className="px-4 py-2">#</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category, index) => (
                <tr key={category.id}>
                  <td className="px-4 text-center py-2">{index + 1}</td>
                  <td className="px-4 text-center py-2">{category.name}</td>
                  <td className="px-4 text-center py-2">
                    <i className="fas fa-trash-alt text-red-500 cursor-pointer" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Categories;
