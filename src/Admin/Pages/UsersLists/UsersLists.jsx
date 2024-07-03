import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { CartContext } from "../../../User/Componet/Contexts/Contexts";
import SearchBar from "../../../G-Components/SearchBar/SearchBar";

export default function UsersLists() {
  const navigate = useNavigate();

  const { setFilterUsers, filterUsers } = useContext(CartContext);

  const handleDeleteUser = (users) => {
    axios
      .delete(`http://localhost:8000/User/${users.id}`)
      .then(() => {
        setFilterUsers((prevUsers) =>
          prevUsers.filter((user) => user.id !== users.id)
        );
        toast.success(`User '${users.name}' deleted successfully`);
      })
      .catch((err) => toast.error("Failed to delete user"));
  };
  // console.log(filterUsers);
  return (
    <>
      <SearchBar />
      <div className="md:ms-64 overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm mt-10">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Id
              </th>
              <th className="sticky left-0 bg-white whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Name
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Email
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Cart
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Delete
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-center tracking-wider">
            {filterUsers.map((user) => (
              <tr key={user.id}>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 ">
                  {user.id}
                </td>
                <td className="sticky left-0 bg-white whitespace-nowrap px-4 py-2 text-gray-700">
                  {user.name}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {user.email}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  <button
                    onClick={() => {
                      navigate(`/admin/userslist/user/:${user.id}`);
                    }}
                    type="button"
                    className="px-4 py-1 rounded-md bg-indigo-500 text-white font-semibold text-base  shadow hover:bg-indigo-600 focus:outline-none  focus:ring-indigo-600"
                  >
                    View Cart
                  </button>
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  <button
                    onClick={() => {
                      navigate(`/admin/userslist/user/:${user.id}/orders`);
                    }}
                    type="button"
                    className="px-2.5 py-1 rounded-md bg-lime-600 text-white font-semibold text-base  shadow hover:bg-lime-700 focus:outline-none  focus:ring-lime-700"
                  >
                    View Orders
                  </button>
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  <button
                    onClick={() => handleDeleteUser(user)}
                    type="button"
                    className="px-4 py-1 bg-red-500 text-white font-semibold text-base rounded shadow hover:bg-red-600 focus:outline-none  focus:ring-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
