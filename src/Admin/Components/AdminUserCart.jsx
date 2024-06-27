import { useContext, useEffect, useState } from "react";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export default function AdminUserCart() {
  const [users, setUsers] = useState([]);
  const { id } = useParams();
  const idNum = id.slice(1);
  const user = users.find((item) => item.id === idNum);
  const [open, setOpen] = useState(true);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("http://localhost:8000/User");
        setUsers(res.data);
        setLoading(false);
      } catch (err) {
        toast.error("Something went wrong", err);
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    if (!loading) {
      setCart(user.cart);
    }
  }, [user, loading]);

  const Subtotal = cart.reduce((total, product) => {
    return total + parseFloat(product.price) * product.quantity;
  }, 0);

  return (
    <>
      <Transition show={open}>
        <Dialog className="relative z-10" onClose={() => setOpen(true)}>
          <TransitionChild
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block" />
          </TransitionChild>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-stretch justify-center text-center md:items-center my-8 sm:my-0  md:px-2 lg:px-4">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                enterTo="opacity-100 translate-y-0 md:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 md:scale-100"
                leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
              >
                <DialogPanel className="items-center text-center flex w-full transform text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                  <div className="relative w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                    <button
                      type="button"
                      className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close</span>
                      <Link to="/admin/userslist">
                        <XMarkIcon
                          className="h-6 w-6 end-0"
                          aria-hidden="true"
                        />
                      </Link>
                    </button>
                    <div className="overflow-x-auto">
                      {cart.length > 0 ? (
                        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                          <thead className="ltr:text-left rtl:text-right">
                            <tr>
                              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                Product Title
                              </th>
                              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                Product Color
                              </th>
                              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                Product Qunatity
                              </th>
                              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                Product Price
                              </th>
                              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                Total
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            {cart.map((user) => (
                              <tr key={user.id} className="odd:bg-gray-50">
                                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                  {user.title}
                                </td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                  {user.color}
                                </td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                  {user.quantity}
                                </td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                  {user.price}
                                </td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                  {user.price * user.quantity}
                                </td>
                              </tr>
                            ))}
                            <tr className="odd:bg-gray-50">
                              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"></td>
                              <td className="whitespace-nowrap px-4 py-2 text-gray-700"></td>
                              <td className="whitespace-nowrap px-4 py-2 text-gray-700"></td>
                              <th className="whitespace-nowrap px-4 py-2 text-gray-700">
                                Subtotal
                              </th>
                              <th className="whitespace-nowrap px-4 py-2 text-gray-700 border">
                                ₹{Subtotal.toFixed(2)}
                              </th>
                            </tr>
                          </tbody>
                        </table>
                      ) : (
                        <p className="text-center font-bold">No Cart founded</p>
                      )}
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
