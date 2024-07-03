import { useState } from "react";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { toast } from "react-toastify";

export default function RegistrationPage() {
  const navigate = useNavigate();

  const [showPopup, setShowPopup] = useState(false);

  const validationSchema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("Invalid Email Format")
      .matches(
        /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,3}$/,
        "Invalid Email Format"
      )
      .required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        "Password must contain an uppercase letter, a lowercase letter, a number and a special character"
      ),
  });

  const handleSubmit = async (
    values,
    { setSubmitting, setErrors, resetForm }
  ) => {
    try {
      const response = await axios.get("http://localhost:8000/User");
      const existingUser = response.data.find(
        (user) => user.email === values.email
      );

      if (existingUser) {
        resetForm();
        toast.error("Email already exists");
      } else {
        await axios.post("http://localhost:8000/User", values);
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
          resetForm();
          navigate("/login");
        }, 1000);
      }
    } catch (error) {
      resetForm();
      toast.error("Something went wrong");
      setErrors({ submit: error.message });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Create new account
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          You can create a new account from here!
        </p>
      </div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          address: [],
          pincode:[],
          cart: [],
          orders: [],
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="mx-auto mt-16 max-w-xl sm:mt-20">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Name
                </label>
                <div className="mt-2.5">
                  <Field
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <Field
                    type="text"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="relative mt-2.5">
                  <Field
                    type="password"
                    name="password"
                    id="password"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                disabled={isSubmitting}
              >
                Submit
              </button>
              <ErrorMessage
                name="submit"
                component="div"
                className="text-red-500 text-sm mt-2"
              />
            </div>
          </Form>
        )}
      </Formik>
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex text-center items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-5 rounded-lg shadow">
            <div className="flex justify-center items-center">
              <img
                src="https://png.pngtree.com/png-vector/20190228/ourmid/pngtree-check-mark-icon-design-template-vector-isolated-png-image_711429.jpg"
                width={150}
                alt="Done"
              />
            </div>
            <h3 className="text-xl font-semibold text-green-600">Success!</h3>
            <p>You have registered successfully.</p>
          </div>
        </div>
      )}
    </div>
  );
}
