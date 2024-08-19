import React from "react";
import Sidebar from "../../components/dashboard/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="ml-6 h-full p-4 w-full">
        <div className="container mx-auto my-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card
              title="Users"
              value="100"
              icon={<i className="fas fa-users text-blue-500" />}
              color="blue"
            />
            <Card
              title="Products"
              value="500"
              icon={<i className="fas fa-boxes text-green-500" />}
              color="green"
            />
            <Card
              title="Categories"
              value="20"
              icon={<i className="fas fa-tags text-yellow-500" />}
              color="yellow"
            />
            <Card
              title="Orders"
              value="150"
              icon={<i className="fas fa-shopping-cart text-red-500" />}
              color="red"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

const Card = ({ title, value, icon, color }) => {
  return (
    <div
      className={`bg-white rounded shadow-md p-4 border-t-4 border-${color}-500`}
    >
      <div className="flex items-center mb-4">
        {icon}
        <h2 className="text-lg font-bold ml-2">{title}</h2>
      </div>
      <p className={`text-3xl font-bold text-${color}-500`}>{value}</p>
    </div>
  );
};

export default Dashboard;
