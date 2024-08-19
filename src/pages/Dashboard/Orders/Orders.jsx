import Sidebar from "../../../components/dashboard/Sidebar";

const Orders = () => {
  const orders = JSON.parse(localStorage.getItem("orders"));
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="ml-6 p-4 w-full">
        <div className="container mx-auto p-4">
          <table className="table-auto w-full mb-4">
            <thead>
              <tr>
                <th className="px-4 py-2">Order Owner</th>
                <th className="px-4 py-2">Items</th>
                <th className="px-4 py-2">Total Price</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td className="px-4 text-center py-2">{user?.clientName}</td>
                  <td className="px-4 text-center py-2">
                    {order.items.map((item, index) => (
                      <span key={index}>
                        {item.quantity} x {item.name} <br />
                      </span>
                    ))}
                  </td>
                  <td className="px-4 text-center py-2">{order.totalPrice}</td>
                  <td className="px-4 text-center py-2">
                    <i className="fas fa-check text-green-500 cursor-pointer mr-2" />
                    <i className="fas fa-times text-red-500 cursor-pointer" />
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

export default Orders;
