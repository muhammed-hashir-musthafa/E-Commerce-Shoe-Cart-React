import React, { useContext, useState } from "react";
import Logo from "../Assets/Logo white.png";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import axios from "axios";
import { CartContext } from "../Componet/Contexts";

const LoginPage = () => {

  const navigate =useNavigate()

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  const validationlogform = yup.object({
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
    .min(8, "Password must be atleast 8 characters")
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      "Password must contain an uppercase letter, a lowercase letter, a number and a special character"
    )
  });
  const { login } = useContext(CartContext);

  const handleChangelog = (e) => {
    const {name,value}=e.target
    setLoginData({
      ...loginData,
      [name]:value,
    })
  };

  const handleSubmitlog= async (e)=>{
    e.preventDefault();
    setErrors({})
    try {
      await validationlogform.validate(loginData,{abortEarly : false})
      // console.log("Login Succesfully", loginData);
      setErrors({})
      axios.get("http://localhost:3000/User").then((res) => {
        const NewData = res.data;
        const existData = NewData.find((user) => user.email === loginData.email && user.password === loginData.password)
        if(existData){
          console.log("Login Successfully");
          setShowPopup(true);
          setTimeout(() => {
            setShowPopup(false);
            navigate('/')
            login()
          }, 1500)
        }
        else{
          alert("Please Create an account")
          navigate('/registration')
        }
      })
    } catch (errors) {
      const NewErrors = {};
      errors.inner.forEach((err) => {
        NewErrors[err.path] = err.message;
      });
      setErrors(NewErrors);
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
          <form
            className="space-y-6"
            action="#"
            method="POST"
            onSubmit={handleSubmitlog}
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="text"
                  value={loginData.email}
                  onChange={handleChangelog}
                  autoComplete="email"
                  placeholder="Enter Email"
                  className="block w-full pl-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.email && (<div className="text-red-500 text-sm">{errors.email} </div>) }
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
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={loginData.password}
                  onChange={handleChangelog}
                  placeholder="Enter Password"
                  autoComplete="current-password"
                  className="block w-full pl-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.password &&(<div className="text-red-500 text-sm">{errors.password} </div>)}
              </div>
              {/* <div className="text-sm text-right">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500 "
                >
                  Forgot password?
                </a>
              </div> */}
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
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
            <p>Login Succesfully.</p>
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
