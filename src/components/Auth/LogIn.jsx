import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAuthContext } from "../../context/AuthContext";


import Spinner from "../UI/Loader";
import SocialAuth from "./SocialAuth";

const LogIn = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const navigate = useNavigate();

  const { logIn } = useAuthContext();

  function handleChange(e) {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  }

  function validate() {
    const newErrors = {};
    if (!values.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!values.password) {
      newErrors.password = "Password is required";
    } else if (values.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (validate()) {
      setLoading(true);
      setServerError("");

      logIn(values.email, values.password)
        .then(() => navigate("/expenses"))
        .catch((err) => {
          setServerError(err.code);
          setLoading(false);
        });
    }
  }

  return (
    <section className="auth flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="flex-1 flex flex-col justify-center items-center gap-6 bg-primary max-w-lg rounded-lg drop-shadow-2xl p-6 md:p-10 font-roboto "
      >
        <h4 className="text-2xl font-bold">Log In</h4>
        <div className="flex flex-col w-full gap-1">
          <label htmlFor="email" className="text-sm">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={values.email}
            placeholder="Enter email address"
            onChange={handleChange}
            className="border-gray-400 border-[1px] p-2 rounded-md focus:outline-none"
          />
          <p className="text-sm text-error">{errors && errors.email}</p>
        </div>
        <div className="flex flex-col w-full gap-1">
          <label htmlFor="password" className="text-sm">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={values.password}
            placeholder="Enter password"
            onChange={handleChange}
            className="border-gray-400 border-[1px] p-2 rounded-md focus:outline-none"
          />
          <p className="text-sm text-error">{errors && errors.password}</p>
        </div>

        <div className="text-end w-full text-sm text-accent hover:contrast-200 duration-200">
          <Link to="/forgotPassword">Forgot Password?</Link>
        </div>

        {serverError && <p className="text-sm text-error">{serverError}</p>}

        <div className="800">
          Don't have an account?
          <Link
            to="/signUp"
            className="text-accent hover:contrast-200 duration-200"
          >
            &nbsp;Sign Up
          </Link>
        </div>

        <button
          type="submit"
          className="w-full bg-accent text-primary  p-2 text-lg rounded-md drop-shadow-xl hover:contrast-200 duration-200 font-medium active:scale-105"
        >
          {loading ? <Spinner /> : "Sign In"}
        </button>

        <div className="w-full flex justify-center items-center gap-2">
          <div className="h-0.5 bg-gray-200 w-full" />
          <p className="whitespace-nowrap text-sm ">Sign In with</p>
          <div className="h-0.5 bg-gray-200 w-full" />
        </div>

        <SocialAuth />
      </form>
    </section>
  );
};

export default LogIn;
