import React, { useContext, useState } from "react";
import Logo from "../../../Assets/Logo white.png";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import axios from "axios";
 import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Formik, Field, Form, ErrorMessage } from "formik";
import { CartContext } from "../../Componet/Contexts/Contexts";

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useContext(CartContext);
  const [showPopup, setShowPopup] = useState(false);

  const validationSchema = yup.object({
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

  const handleSubmit = async (values, { setSubmitting, setErrors,resetForm }) => {
    try {
      const response = await axios.get("http://localhost:8000/User");
      const NewData = response.data;
      const existData = NewData.find(
        (user) => user.email === values.email && user.password === values.password
      );
      const incorrectData = NewData.find(
        (user) => user.email === values.email && user.password !== values.password
      );

      if (existData) {
        console.log("Login Successfully");
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
          localStorage.setItem('id',existData.id)
          resetForm()
          if(values.email==='admin@gmail.com'){
            navigate('/admin')
          }
          else{
            navigate('/');
          }
          login();
        }, 1500);
      } else if (incorrectData) {
        toast.error("username/password is incorrect");
      } else {
        resetForm()
        toast.error("Please Create an account");
        navigate('/registration');
      }
    } catch (error) {
      toast.error("Something went wrong");
      setErrors({ submit: error.message });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-20 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-36 w-auto" src={Logo} alt="Company Logo" />
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <Field
                      id="email"
                      name="email"
                      type="text"
                      placeholder="Enter Email"
                      autoComplete="email"
                      className="block w-full pl-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                  </div>
                  <div className="mt-2">
                    <Field
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Enter Password"
                      autoComplete="current-password"
                      className="block w-full pl-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    disabled={isSubmitting}
                  >
                    Login in
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
                <p>Login Successfully.</p>
              </div>
            </div>
          )}

          <p className="mt-10 text-center text-sm text-gray-500">
            Not an user?{"  "}
            <Link
              to="/registration"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Create a new account
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
