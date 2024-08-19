import React from "react";
import { Link } from "react-router-dom";
import Image from "../designLayouts/Image";
import { logoLight } from "../../assets/images";
import { useLocation } from "react-router-dom";

const links = [
  {
    id: 1,
    name: "General",
    link: "/dashboard",
  },
  {
    id: 2,
    name: "Users",
    link: "/dashboard/user",
  },
  {
    id: 3,
    name: "Products",
    link: "/dashboard/product",
  },
  {
    id: 4,
    name: "Orders",
    link: "/dashboard/order",
  },
  {
    id: 5,
    name: "Categories",
    link: "/dashboard/category",
  },
];

const Sidebar = () => {
  const { pathname } = useLocation();

  console.log(pathname);

  return (
    <div className="flex w-64  h-screen flex-col justify-between border-e bg-gray-800">
      <div className="px-4 py-6">
        <span className="h-10 w-full flex items-center justify-center rounded-lg text-gray-600">
          <Link to="/">
            <Image className="w-32 object-cover" imgSrc={logoLight} />
          </Link>
        </span>

        <ul className="mt-6 space-y-1">
          {links.map((link) => (
            <li key={link.id}>
              <Link
                to={link.link}
                className={`block rounded-lg px-4 py-2 text-sm font-medium ${
                  pathname === link.link
                    ? "bg-gray-700 text-white"
                    : "text-gray-400 hover:bg-gray-700 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
