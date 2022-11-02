import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebaseConfig";
import { MdFastfood } from "react-icons/md";

import { authenticationSliceActions } from "../Store/authenticationSlice";

import logo from "../assets/Images/logo.gif";
import avatar from "../assets/Images/avatar.gif";

const Header = () => {
  const user = useSelector((state) => state.authentication.user);
  const dispatch = useDispatch();
  const fireBaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  async function login() {
    const {
      user: { refreshToken, providerData },
    } = await signInWithPopup(fireBaseAuth, provider);
    dispatch(authenticationSliceActions.getLoginData(providerData[0]));

    localStorage.setItem("user", JSON.stringify(providerData[0]));
  }

  return (
    <header className="fixed py-4 px-6 w-screen bg-headingColor text-primaryColor">
      {/* desktop */}
      <div className="hidden sm:flex justify-between items-center">
        <Link
          to={"/"}
          className="flex justify-center items-center gap-1 cursor-pointer"
        >
          <img src={logo} alt="logo" className="w-16" />
          <p className="font-bold text-lg ">Rasoi House</p>
        </Link>

        <div className="flex justify-center items-center gap-10">
          <ul className="flex justify-center items-center gap-10 font-bold text-base">
            <li className="text-base cursor-pointer hover:text-secondaryColor active:text-secondaryColor duration-150 transition-all ease-in-out">
              Home
            </li>
            <li className="text-base cursor-pointer hover:text-secondaryColor active:text-secondaryColor duration-150 transition-all ease-in-out">
              Menu
            </li>
            <li className="text-base cursor-pointer hover:text-secondaryColor active:text-secondaryColor duration-150  ease-in-out">
              About Us
            </li>
          </ul>

          <motion.div
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            className="relative w-10 h-10 flex justify-center items-top cursor-pointer"
          >
            <MdFastfood className="text-3xl ml-1 text-primaryColor" />
            <div className="absolute -top-3 -right-3  w-5 h-5 rounded-full bg-red-500 flex justify-center items-center">
              <p className="text-xs font-semibold">2</p>
            </div>
          </motion.div>

          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              src={user ? user.photoURL : avatar}
              alt="avatar"
              className="rounded-full w-10 cursor-pointer"
              onClick={login}
            />
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="flex sm:hidden">mobile</div>
    </header>
  );
};

export default Header;
