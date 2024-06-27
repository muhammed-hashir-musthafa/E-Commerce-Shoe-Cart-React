import { useContext, useState } from "react";
import axios from "axios";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { toast } from "react-toastify";
import * as yup from "yup";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { CartContext } from "../../User/Componet/Contexts";

export default function AdminProductUpdate() {
  const { products } = useContext(CartContext);
  const { id } = useParams();
  const idNum = id.slice(1);
  const product = products.find((item) => item.id === idNum);
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const validationSchema = yup.object({
    title: yup.string().required("This Field is Required"),
    imageSrc: yup.string().url().required("This Field is Required"),
    imageAlt: yup.string().required("This Field is Required"),
    price: yup.number().required("This Field is Required"),
    color: yup.string().required("This Field is Required"),
    category: yup.string().required("This Field is Required"),
  });

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const updated = Object.keys(values).some(
        (key) => values[key] !== product[key]
      );

      if (updated) {
        await axios.put(`http://localhost:8000/products/${product.id}`, values);
        toast.success(`Updated "${values.title}" successfully`);
      } else {
        toast.info("No changes applied");
      }
      navigate("/admin");
      // console.log(values);
    } catch (error) {
      setErrors({ submit: error.message });
    } finally {
      setSubmitting(false);
    }
  };

  // console.log(product);
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
                      <Link to="/admin">
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </Link>
                    </button>

                    <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                      <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-10 lg:col-span-5">
                        <div className="group relative">
                          <img
                            src={product.imageSrc}
                            alt={product.imageAlt}
                            className="object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-12 lg:col-span-7">
                        <div>
                          <div className="mx-auto mt-5 max-w-screen-xl sm:px-6 lg:px-8">
                            <div className="mx-auto max-w-lg">
                              <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
                                Update Product
                              </h1>
                              <Formik
                                initialValues={{
                                  title: `${product.title}`,
                                  imageSrc: `${product.imageSrc}`,
                                  imageAlt: `${product.imageAlt}`,
                                  price: `${product.price}`,
                                  color: `${product.color}`,
                                  category: `${product.category}`,
                                  quantity: 1,
                                }}
                                validationSchema={validationSchema}
                                onSubmit={handleSubmit}
                              >
                                {({ isSubmitting }) => (
                                  <Form className="overflow-y-auto lg:h-80 h-full mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg border-t sm:p-6 ">
                                    <div>
                                      <label
                                        htmlFor=""
                                        className="block ps-1.5 pb-1 text-sm text-start font-medium leading-6 text-gray-400"
                                      >
                                        Product Title
                                      </label>
                                      <div className="relative">
                                        <Field
                                          name="title"
                                          type="text"
                                          className="w-full rounded-md mb-2 border-gray-200 p-3 pe-12 text-sm shadow-sm border"
                                          placeholder="Update Title"
                                        />
                                        <ErrorMessage
                                          component="div"
                                          name="title"
                                          className="text-red-500 text-sm"
                                        />
                                      </div>
                                    </div>
                                    <div>
                                      <label
                                        htmlFor=""
                                        className="block ps-1.5 pb-1 text-sm text-start font-medium leading-6 text-gray-400"
                                      >
                                        ImageSrc
                                      </label>
                                      <div className="relative">
                                        <Field
                                          name="imageSrc"
                                          type="text"
                                          className="w-full rounded-md mb-2 border-gray-200 p-3 pe-12 text-sm shadow-sm border"
                                          placeholder="Update ImageSrc"
                                        />
                                        <ErrorMessage
                                          component="div"
                                          name="imageSrc"
                                          className="text-red-500 text-sm"
                                        />
                                      </div>
                                    </div>
                                    <div>
                                      <label
                                        htmlFor=""
                                        className="block ps-1.5 pb-1 text-sm text-start font-medium leading-6 text-gray-400"
                                      >
                                        ImageAlt
                                      </label>
                                      <div className="relative">
                                        <Field
                                          name="imageAlt"
                                          type="text"
                                          className="w-full rounded-md mb-2 border-gray-200 p-3 pe-12 text-sm shadow-sm border"
                                          placeholder="Update ImageAlt"
                                        />
                                        <ErrorMessage
                                          component="div"
                                          name="imageAlt"
                                          className="text-red-500 text-sm"
                                        />
                                      </div>
                                    </div>
                                    <div>
                                      <label
                                        htmlFor=""
                                        className="block ps-1.5 pb-1 text-sm text-start font-medium leading-6 text-gray-400"
                                      >
                                        Price
                                      </label>
                                      <div className="relative">
                                        <Field
                                          name="price"
                                          type="text"
                                          className="w-full rounded-md mb-2 border-gray-200 p-3 pe-12 text-sm shadow-sm border"
                                          placeholder="Update Price"
                                        />
                                        <ErrorMessage
                                          component="div"
                                          name="price"
                                          className="text-red-500 text-sm"
                                        />
                                      </div>
                                    </div>
                                    <div>
                                      <label
                                        htmlFor=""
                                        className="block ps-1.5 pb-1 text-sm text-start font-medium leading-6 text-gray-400"
                                      >
                                        Color
                                      </label>
                                      <div className="relative">
                                        <Field
                                          name="color"
                                          type="text"
                                          className="w-full rounded-md mb-2 border-gray-200 p-3 pe-12 text-sm shadow-sm border"
                                          placeholder="Update Color"
                                        />
                                        <ErrorMessage
                                          component="div"
                                          name="color"
                                          className="text-red-500 text-sm"
                                        />
                                      </div>
                                    </div>
                                    <div>
                                      <div className="relative">
                                        <label
                                          htmlFor=""
                                          className="block ps-1.5 pb-1 text-sm text-start font-medium leading-6 text-gray-400"
                                        >
                                          Category
                                        </label>
                                        <Field
                                          name="category"
                                          type="text"
                                          className="w-full rounded-md mb-4 border-gray-200 p-3 pe-12 text-sm shadow-sm border"
                                          placeholder="Update Category"
                                        />
                                        <ErrorMessage
                                          component="div"
                                          name="category"
                                          className="text-red-500 text-sm"
                                        />
                                      </div>
                                    </div>
                                    <button
                                      onClick={handleSubmit}
                                      type="submit"
                                      className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
                                      disabled={isSubmitting}
                                    >
                                      Update Product
                                    </button>
                                  </Form>
                                )}
                              </Formik>
                            </div>
                          </div>
                        </div>
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
