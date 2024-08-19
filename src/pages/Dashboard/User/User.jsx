import Sidebar from "../../../components/dashboard/Sidebar";

const User = () => {
  const userData = [
    {
      name: "John Doe",
      email: "johndoe@example.com",
      address: "123 Main St",
      country: "USA",
    },
    {
      name: "Jane Doe",
      email: "janedoe@example.com",
      address: "456 Elm St",
      country: "Canada",
    },
    {
      name: "Bob Smith",
      email: "bobsmith@example.com",
      address: "789 Oak St",
      country: "UK",
    },
  ];
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="ml-6 p-4 w-full">
        <div className="container mx-auto p-4">
          <table className="table-auto w-full mb-4">
            <thead>
              <tr>
                <th className="px-4 py-2">#</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Address</th>
                <th className="px-4 py-2">Country</th>
                <th className="px-4 py-2"></th>
              </tr>
            </thead>
            <tbody>
              {userData.map((user, index) => (
                <tr key={index}>
                  <td className="px-4 text-center py-2">{index + 1}</td>
                  <td className="px-4 text-center py-2">{user.name}</td>
                  <td className="px-4 text-center py-2">{user.email}</td>
                  <td className="px-4 text-center py-2">{user.address}</td>
                  <td className="px-4 text-center  py-2">{user.country}</td>
                  <td className="px-4 py-2">
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

export default User;
