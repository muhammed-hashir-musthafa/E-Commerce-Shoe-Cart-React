import { useContext, useState } from "react";
import logo from "../../../Assets/Logo.png";
import fontLogo from "../../../Assets/font.png";
import { Link } from "react-router-dom";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Outlet } from "react-router-dom";
import { CartContext } from "../../../User/Componet/Contexts/Contexts";

export const AdminSidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { logout, isLoggedIn, setCategory, categorize, category } =
    useContext(CartContext);

  const handleCategory = () => {
    categorize(category);
  };

  return (
    <>
      <header className="fixed w-full z-10">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-center p-6 sm:p-3 lg:px-8 bg-white"
          aria-label="Global"
        >
          <img src={logo} alt="Logo" className="w-12 md:hidden me-5" />
          <div className="flex md:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
         
        </nav>

        <Dialog
          className="md:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Company Logo</span>
                <img
                  className="h-12 w-auto"
                  src={fontLogo}
                  alt="Company Logo"
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <select
                    onChange={(e) => setCategory(e.target.value)}
                    onClick={handleCategory}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    <option value="all">Categories</option>
                    <option value="all">All</option>
                    <option value="men">Men</option>
                    <option value="women">Women</option>
                  </select>
                  <Link
                    onClick={() => setMobileMenuOpen(false)}
                    to={"/admin/productPage"}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Products
                  </Link>
                  <Link
                    onClick={() => setMobileMenuOpen(false)}
                    to={"/admin/addproduct"}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Add Products
                  </Link>
                  <Link
                    onClick={() => setMobileMenuOpen(false)}
                    to={"/admin/userslist"}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Users List
                  </Link>
                  <div className="py-6">
                    <Link
                      onClick={logout}
                      to={"/login"}
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 cursor-pointer"
                    >
                      {isLoggedIn ? "Log out" : "Log in"}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
              <div className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
                <img
                  alt=""
                  src="https://icons.veryicon.com/png/o/commerce-shopping/wangdianbao-icon-monochrome/administrators-6.png"
                  className="size-10 rounded-full object-cover"
                />

                <div>
                  <p className="text-xs">
                    <strong className="block font-medium">Admin</strong>

                    <a href="mailto:kazpix@gmail.com">contact@kazpix.com </a>
                  </p>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
      <div className="flex h-screen w-fit flex-col justify-between  md:visible invisible bg-white top-8 absolute z-10">
        <div className="px-4 py-6 fixed border-r h-full">
          <img
            className="grid h-10 w-32 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600"
            src={fontLogo}
          />

          <ul className="mt-6 space-y-1">
            <li>
              <Link
                to={"/admin"}
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                Home
              </Link>
            </li>
            <li>
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                  <Link to={"/admin/productPage"} className="text-sm font-medium">
                    Products
                  </Link>
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <ul className="mt-2 space-y-1 px-4">
                  <li>
                    <Link
                      to={"/admin/addproduct"}
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                      Add Products
                    </Link>
                  </li>
                </ul>
              </details>
            </li>

            <li>
              <Link
                to={"/admin/userslist"}
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                Users List
              </Link>
            </li>
            <li>
              <Link
                onClick={logout}
                to={"/login"}
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                {isLoggedIn ? "Log out" : "Log in"}
              </Link>
            </li>
          </ul>
        </div>

        {/* <div className="sticky  inset-x-0 bottom-0 border-t border-gray-100">
          <div
            href="#"
            className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50"
          >
            <img
              alt=""
              src="https://icons.veryicon.com/png/o/commerce-shopping/wangdianbao-icon-monochrome/administrators-6.png"
              className="size-10 rounded-full object-cover"
            />

            <div>
              <p className="text-xs">
                <strong className="block font-medium">Admin</strong>

                <a href="mailto:kazpix@gmail.com">contact@kazpix.com </a>
              </p>
            </div>
          </div>
        </div> */}
      </div>
      <main className="pt-28 sm:pt-20">
        <Outlet />
      </main>
    </>
  );
};
