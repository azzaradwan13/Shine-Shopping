import { Link } from "react-router-dom";
import Sidebar from "../../../components/dashboard/Sidebar";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "This is a description of product 1",
      price: 10.99,
    },
    {
      id: 2,
      name: "Product 2",
      description: "This is a description of product 2",
      price: 9.99,
    },
    {
      id: 3,
      name: "Product 3",
      description: "This is a description of product 3",
      price: 12.99,
    },
  ];
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="ml-6 p-4 w-full">
        <div className="container mx-auto p-4">
          <Link
            to="/dashboard/product/add"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Create Product
          </Link>
          <table className="table-auto mt-4 w-full mb-4">
            <thead>
              <tr>
                <th className="px-4 py-2">#</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Description</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={product.id}>
                  <td className="px-4 text-center py-2">{index + 1}</td>
                  <td className="px-4 text-center py-2">{product.name}</td>
                  <td className="px-4 text-center py-2">
                    {product.description}
                  </td>
                  <td className="px-4 text-center py-2">{product.price}</td>
                  <td className="px-4 text-center py-2">
                    <i className="fas fa-edit text-blue-500 cursor-pointer mr-2" />
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

export default Products;
