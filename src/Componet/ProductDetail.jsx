import { useContext, useState } from "react";
import {
  Dialog,
  DialogPanel,
  Radio,
  RadioGroup,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { products } from "../Pages/ProductPage";
import { CartContext } from "./Contexts";

const product1 = {
  // name: "",
  // price: "",
  // href: "#",
  // imageSrc: "",
  // imageAlt: "",
  colors: [
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [{ name: "L", inStock: true }],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetail() {
  const { id } = useParams();
  const idNum = Number(id.slice(1));

  const product = products.find((product) => product.id === idNum);

  const [open, setOpen] = useState(true);
  const [selectedColor, setSelectedColor] = useState(product1.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product1.sizes[2]);

  const { addToCart, updateQuantity } = useContext(CartContext);

  const handleCart = () => {
    addToCart(product);
  };
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
            <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                enterTo="opacity-100 translate-y-0 md:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 md:scale-100"
                leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
              >
                <DialogPanel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                  <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                    <button
                      type="button"
                      className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close</span>
                      <Link to="/products">
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </Link>
                    </button>

                    <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                      <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                        <div className="group relative">
                          <img
                            src={product.imageSrc}
                            alt={product.imageAlt}
                            className="object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-8 lg:col-span-7">
                        <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
                          {product.name}
                        </h2>

                        <section
                          aria-labelledby="information-heading"
                          className="mt-2"
                        >
                          <h3 id="information-heading" className="sr-only">
                            Product information
                          </h3>

                          <p className="text-2xl text-gray-900">
                            ₹{product.price}
                          </p>
                          <h4 className="text-1xl font-medium font-sans">
                            It is a Good & High Quality Product
                          </h4>
                        </section>

                        <section
                          aria-labelledby="options-heading"
                          className="mt-10"
                        >
                          <h3 id="options-heading" className="sr-only">
                            Product options
                          </h3>

                          <form>
                            {/* Colors */}
                            <fieldset aria-label="Choose a color">
                              <legend className="text-sm font-medium text-gray-900">
                                Color
                              </legend>

                              <RadioGroup
                                value={selectedColor}
                                onChange={setSelectedColor}
                                className="mt-4 flex items-center space-x-3"
                              >
                                {product1.colors.map((color) => (
                                  <Radio
                                    key={color.name}
                                    value={color}
                                    aria-label={color.name}
                                    className={({ focus, checked }) =>
                                      classNames(
                                        color.selectedClass,
                                        focus && checked
                                          ? "ring ring-offset-1"
                                          : "",
                                        !focus && checked ? "ring-2" : "",
                                        "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                                      )
                                    }
                                  >
                                    <span
                                      aria-hidden="true"
                                      className={classNames(
                                        color.class,
                                        "h-8 w-8 rounded-full border border-black border-opacity-10"
                                      )}
                                    />
                                  </Radio>
                                ))}
                              </RadioGroup>
                            </fieldset>

                            {/* Sizes */}
                            <fieldset
                              className="mt-10"
                              aria-label="Choose a size"
                            >
                              <div className="flex items-center justify-between">
                                <div className="text-sm font-medium text-gray-900">
                                  Size
                                </div>
                              </div>

                              <RadioGroup
                                value={selectedSize}
                                onChange={setSelectedSize}
                                className="mt-4 grid grid-cols-4 gap-4"
                              >
                                {product1.sizes.map((size) => (
                                  <Radio
                                    key={size.name}
                                    value={size}
                                    disabled={!size.inStock}
                                    className={({ focus }) =>
                                      classNames(
                                        size.inStock
                                          ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                                          : "cursor-not-allowed bg-gray-50 text-gray-200",
                                        focus ? "ring-2 ring-indigo-500" : "",
                                        "group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1"
                                      )
                                    }
                                  >
                                    {({ checked, focus }) => (
                                      <>
                                        <span>{size.name}</span>
                                        {size.inStock ? (
                                          <span
                                            className={classNames(
                                              checked
                                                ? "border-indigo-500"
                                                : "border-transparent",
                                              focus ? "border" : "border-2",
                                              "pointer-events-none absolute -inset-px rounded-md"
                                            )}
                                            aria-hidden="true"
                                          />
                                        ) : (
                                          <span
                                            aria-hidden="true"
                                            className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                          >
                                            <svg
                                              className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                              viewBox="0 0 100 100"
                                              preserveAspectRatio="none"
                                              stroke="currentColor"
                                            >
                                              <line
                                                x1={0}
                                                y1={100}
                                                x2={100}
                                                y2={0}
                                                vectorEffect="non-scaling-stroke"
                                              />
                                            </svg>
                                          </span>
                                        )}
                                      </>
                                    )}
                                  </Radio>
                                ))}
                              </RadioGroup>
                            </fieldset>
                            <p className="text-gray-500 pt-10">
                              <button
                                onClick={() => product.quantity - 1}
                                className="px-1 py-.5 bg-indigo-500 text-white font-semibold text-base rounded shadow hover:bg-indigo-600 focus:outline-none  focus:ring-indigo-600"
                              >
                                -
                              </button>{" "}
                              Qty {product.quantity}{" "}
                              <button
                                onClick={() => product.quantity + 1}
                                className="px-1 py-.5 bg-indigo-500 text-white font-semibold text-base rounded shadow hover:bg-indigo-600 focus:outline-none  focus:ring-indigo-600"
                              >
                                +
                              </button>
                            </p>
                            <Link to={"/products"}>
                              <button
                                onClick={() => handleCart(product)}
                                type="button"
                                className="mt-24 flex w-full items-center justify-center  rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                              >
                                Add to Cart
                              </button>
                            </Link>
                          </form>
                        </section>
                      </div>
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
