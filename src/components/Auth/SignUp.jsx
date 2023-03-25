import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAuthContext } from "../../context/AuthContext";

import Spinner from "../UI/Loader";
import { strengthColor, strengthIndicator } from "./passwordStrength";
import SocialAuth from "./SocialAuth";

const SignUp = () => {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [level, setLevel] = useState({});
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const navigate = useNavigate();

  const { signUp } = useAuthContext();

  function handleChange(e) {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  }

  function passwordStrength(value) {
    const temp = strengthIndicator(value);
    setLevel(strengthColor(temp));
  }

  useEffect(() => {
    passwordStrength("");
  }, []);

  function validate() {
    const newErrors = {};

    if (!values.fullName) {
      newErrors.fullName = "Name is required";
    }
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

      signUp(values.fullName, values.email, values.password)
        .then(() => navigate("/expenses"))
        .catch((err) => {
          setServerError(err.code);
          setLoading(false);
        });
    }
  }

  console.log(serverError);

  return (
    <section className="auth flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="flex-1 flex flex-col justify-center items-center gap-6 mt-20 bg-primary max-w-lg mx-auto rounded-lg drop-shadow-2xl p-10 font-roboto "
      >
        <h4 className="text-2xl font-bold ">Sign Up</h4>

        <div className="flex flex-col w-full gap-1">
          <label htmlFor="fullName" className="text-sm ">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            value={values.fullName}
            placeholder="Enter full name"
            onChange={handleChange}
            className="border-gray-400 border-[1px] p-2 rounded-md  focus:outline-none"
          />
          <p className="text-sm text-error">{errors && errors.fullName}</p>
        </div>

        <div className="flex flex-col w-full gap-1">
          <label htmlFor="email" className="text-sm ">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={values.email}
            placeholder="Enter email address"
            onChange={handleChange}
            className="border-gray-400 border-[1px] p-2 rounded-md  focus:outline-none"
          />
          <p className="text-sm text-error">{errors && errors.email}</p>
        </div>

        <div className="flex flex-col w-full gap-1">
          <label htmlFor="password" className="text-sm ">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={values.password}
            placeholder="Enter password"
            onChange={(e) => {
              handleChange(e);
              passwordStrength(e.target.value);
            }}
            className="border-gray-400 border-[1px] p-2 rounded-md  focus:outline-none"
          />
          <p className="text-sm text-error">{errors && errors.password}</p>

          <div className="flex items-center gap-2 mt-1 text-sm">
            <div className={`w-24 h-2 ${level.color} rounded-lg`} />
            <p>{level.label}</p>
          </div>
        </div>

        {serverError && <p className="text-sm text-error">{serverError}</p>}

        <div className="">
          Don't have an account?
          <Link
            to="/logIn"
            className="text-accent hover:contrast-200 duration-200"
          >
            &nbsp;Log In
          </Link>
        </div>

        <button
          type="submit"
          className="w-full bg-accent text-primary  p-2 text-lg rounded-md drop-shadow-xl hover:contrast-200 duration-200 font-medium active:scale-105"
        >
          {loading ? <Spinner /> : "Sign Up"}
        </button>

        <div className="w-full flex justify-center items-center gap-2">
          <div className="h-0.5 bg-gray-200 w-full" />
          <p className="whitespace-nowrap text-sm ">Sign Up with</p>
          <div className="h-0.5 bg-gray-200 w-full" />
        </div>

        <SocialAuth />
      </form>
    </section>
  );
};

export default SignUp;
