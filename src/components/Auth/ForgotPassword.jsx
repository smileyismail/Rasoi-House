import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

import Spinner from "../UI/Loader";

const ForgotPassword = () => {
  const [values, setValues] = useState({ email: "" });
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const { forgotPassword } = useAuthContext();

  function handleChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  function validate() {
    const newErrors = {};

    if (!values.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      newErrors.email = "Email is invalid";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validate()) {
      setLoading(true);
      setServerError("");

      forgotPassword(values.email)
        .then(() => {
          setIsEmailSent(true);
        })
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
        className="flex flex-1 flex-col justify-center items-center gap-6 mt-20 bg-primary max-w-lg mx-auto rounded-lg drop-shadow-2xl p-10 font-roboto "
      >
        <h4 className="text-2xl font-bold ">Forgot Password</h4>
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

        {serverError && <p className="text-sm text-error">{serverError}</p>}

        {isEmailSent ? (
          <p className="">Check your inbox for password reset link.</p>
        ) : (
          <div className="">
            <Link
              to="/logIn"
              className="text-accent hover:contrast-200 duration-200"
            >
              Log In
            </Link>
            &nbsp;or&nbsp;
            <Link
              to="/signUp"
              className="text-accent hover:contrast-200 duration-200"
            >
              Sign Up
            </Link>
          </div>
        )}

        {isEmailSent ? (
          <Link to="/logIn" className="w-full">
            <button
              type="button"
              className="w-full bg-action  p-2 text-lg rounded-md drop-shadow-xl hover:contrast-200 duration-200 font-medium active:scale-105"
            >
              ok
            </button>
          </Link>
        ) : (
          <button
            type="submit"
            className="w-full bg-accent text-primary  p-2 text-lg rounded-md drop-shadow-xl hover:contrast-200 duration-200 font-medium active:scale-105"
          >
            {loading ? <Spinner /> : "Submit"}
          </button>
        )}
      </form>
    </section>
  );
};

export default ForgotPassword;
