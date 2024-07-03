import { useContext, useState } from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
 import { toast } from "react-toastify";
import { CartContext } from "../../Componet/Contexts/Contexts";

// const products = [
//   {
//     id: 1,
//     name: "Otes Tan Men Ruosh",
//     href: "",
//     imageSrc:
//       "https://img.tatacliq.com/images/i11/437Wx649H/MP000000017535835_437Wx649H_202305142316151.jpeg",
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: "2800",
//     color: "Brown",
//     category: "men",
//     quantity: 1,
//   },]

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart } = useContext(CartContext);
  const [open, setOpen] = useState(true);
  const navigate=useNavigate()

  const Subtotal = cart.reduce((total, product) => {
    return total + parseFloat(product.price) * product.quantity;
  }, 0);

  // console.log(cart);

  const handleCheckout=()=>{
    if(cart.length===0){
      toast.error("Your cart is empty")
    }
    else{
      navigate('/paymentsection')
    }
  }
  return (
    <>
      <Transition show={open}>
        <Dialog className="relative z-10" onClose={() => setOpen(true)}>
          <TransitionChild
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <TransitionChild
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <DialogPanel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-auto bg-white shadow-xl">
                      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                        <div className="flex items-start justify-between">
                          <DialogTitle className="text-lg font-medium text-gray-900">
                            Shopping cart
                          </DialogTitle>
                          <div className="ml-3 flex h-7 items-center">
                            <Link to="/products">
                              <button
                                type="button"
                                className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                                onClick={() => setOpen(false)}
                              >
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Close panel</span>
                                <XMarkIcon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              </button>
                            </Link>
                          </div>
                        </div>

                        <div className="mt-8">
                          <div className="flow-root">
                            <ul
                              role="list"
                              className="-my-6 divide-y divide-gray-200"
                            >
                              {cart.map((product) => (
                                <li key={product.id} className="flex py-6">
                                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <img
                                      src={product.imageSrc}
                                      alt={product.imageAlt}
                                      className="h-full w-full object-cover object-center"
                                    />
                                  </div>

                                  <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                      <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>
                                          <a href={product.href}>
                                            {product.title}
                                          </a>
                                        </h3>
                                        <span className="ml-4">
                                          {product.price * product.quantity}
                                        </span>
                                      </div>
                                      <span className=" text-sm text-gray-500">
                                        {product.color}
                                      </span>
                                      <p className="mt-1 text-xs float-end text-gray-500">
                                        {product.price} x {product.quantity}
                                      </p>
                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-sm">
                                      <p className="text-gray-500">
                                        <button
                                          onClick={() => {
                                            if (product.quantity <= 1) {
                                              removeFromCart(product.id);
                                            } else
                                              updateQuantity(
                                                product.id,
                                                product.quantity - 1
                                              );
                                          }}
                                          className="px-1 py-.5 bg-indigo-500 text-white font-semibold text-base rounded shadow hover:bg-indigo-600 focus:outline-none  focus:ring-indigo-600"
                                        >
                                          -
                                        </button>{" "}
                                        Qty {product.quantity}{" "}
                                        <button
                                          onClick={() => {
                                            updateQuantity(
                                              product.id,
                                              product.quantity + 1
                                            );
                                          }}
                                          className="px-1 py-.5 bg-indigo-500 text-white font-semibold text-base rounded shadow hover:bg-indigo-600 focus:outline-none  focus:ring-indigo-600"
                                        >
                                          +
                                        </button>
                                      </p>

                                      <div className="flex">
                                        <button
                                          onClick={() =>
                                            removeFromCart(product.id)
                                          }
                                          type="button"
                                          className="font-medium text-indigo-600 hover:text-indigo-500"
                                        >
                                          Remove
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <p>Subtotal</p>
                          <p>₹{Subtotal} </p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">
                          Shipping and taxes calculated at checkout.
                        </p>
                        <div className="mt-6" >
                          <button 
                           onClick={handleCheckout}
                            className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                          >
                            Checkout
                          </button>
                        </div>
                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                          <p>
                            or{" "}
                            <Link
                              to="/products"
                              type="button"
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                              onClick={() => setOpen(false)}
                            >
                              Continue Shopping
                              <span aria-hidden="true"> &rarr;</span>
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </DialogPanel>
                </TransitionChild>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
