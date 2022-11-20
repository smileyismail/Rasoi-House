import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../../firebaseConfig";
import { MdFastfood } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { RiLogoutBoxLine } from "react-icons/ri";
import { GoHome } from "react-icons/go";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import { authenticationSliceActions } from "../../Store/authenticationSlice";

import logo from "../../assets/Images/logo.gif";
import avatar from "../../assets/Images/avatar.gif";

const Header = () => {
  const user = useSelector((state) => state.authentication.user);
  const dispatch = useDispatch();
  const [isMenuActive, setIsMEnuActive] = useState(false);

  const fireBaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  async function login() {
    if (!user) {
      const {
        user: { providerData },
      } = await signInWithPopup(fireBaseAuth, provider);
      dispatch(authenticationSliceActions.accLogin(providerData[0]));

      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setIsMEnuActive(!isMenuActive);
    }
  }

  function logout() {
    setIsMEnuActive(false);
    localStorage.clear();
    dispatch(authenticationSliceActions.accLogout(""));
  }

  return (
    <header className="fixed py-2 px-5 z-30 sm:px-7 sm:py-3 w-screen bg-headingColor text-primaryColor">
      {/* desktop view*/}
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

            <motion.li
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              className="relative w-10 h-10 flex justify-center items-top cursor-pointer"
            >
              <MdFastfood className="text-3xl ml-1 text-primaryColor" />
              <div className="absolute -top-3 -right-3  w-5 h-5 rounded-full bg-red-500 flex justify-center items-center">
                <p className="text-xs font-semibold">2</p>
              </div>
            </motion.li>
          </ul>

          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              src={user ? user.photoURL : avatar}
              alt="avatar"
              className="rounded-full w-10 cursor-pointer"
              onClick={login}
            />

            {isMenuActive && (
              <motion.ul
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="absolute top-10 right-5 w-36 bg-primaryColor text-textColor px-1 py-2 flex flex-col justify-center items-start rounded-lg border border-secondaryColor"
              >
                {user.email === "smileyismail67@gmail.com" && (
                  <li className="w-full" onClick={() => setIsMEnuActive(false)}>
                    <Link
                      to={"/addItem"}
                      className="flex items-center gap-2 cursor-pointer px-2 py-2 hover:bg-secondaryColor rounded-r-lg hover:text-primaryColor duration-150 transition-all ease-in-out"
                    >
                      Add Item <IoMdAdd />
                    </Link>
                  </li>
                )}

                <li
                  className="w-full flex items-center gap-2 cursor-pointer px-2 py-2 hover:bg-secondaryColor rounded-r-lg hover:text-primaryColor duration-150 transition-all ease-in-out"
                  onClick={() => setIsMEnuActive(false)}
                >
                  About Us
                </li>
                <li
                  className="w-full flex items-center gap-2 cursor-pointer px-2 py-2 hover:bg-secondaryColor rounded-r-lg hover:text-primaryColor duration-150 transition-all ease-in-out"
                  onClick={logout}
                >
                  Logout <RiLogoutBoxLine />
                </li>
              </motion.ul>
            )}
          </div>
        </div>
      </div>

      {/* mobile view */}
      <div className="flex sm:hidden">
        <div className="flex justify-between items-center w-screen">
          <Link
            to={"/"}
            className="flex justify-center items-center gap-1 cursor-pointer"
          >
            <img src={logo} alt="logo" className="w-14" />
            <p className="font-bold text-lg ">Rasoi House</p>
          </Link>

          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              src={user ? user.photoURL : avatar}
              alt="avatar"
              className="rounded-full w-9 cursor-pointer"
              onClick={login}
            />

            {isMenuActive && (
              <motion.ul
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="absolute top-10 right-5 w-36 bg-primaryColor text-textColor px-1 py-2 flex flex-col justify-center items-start rounded-lg border border-secondaryColor"
              >
                {user.email === "smileyismail67@gmail.com" && (
                  <li className="w-full" onClick={() => setIsMEnuActive(false)}>
                    <Link
                      to={"/addItem"}
                      className="w-full flex items-center gap-2 cursor-pointer px-2 py-2 hover:bg-secondaryColor rounded-r-lg hover:text-primaryColor duration-150 transition-all ease-in-out"
                    >
                      Add Item <IoMdAdd />
                    </Link>
                  </li>
                )}

                <li
                  className="w-full flex items-center gap-2 cursor-pointer px-2 py-2 hover:bg-secondaryColor rounded-r-lg hover:text-primaryColor duration-150 transition-all ease-in-out"
                  onClick={() => setIsMEnuActive(false)}
                >
                  About Us
                </li>
                <li
                  className="w-full flex items-center gap-2 cursor-pointer px-2 py-2 hover:bg-secondaryColor rounded-r-lg hover:text-primaryColor duration-150 transition-all ease-in-out"
                  onClick={logout}
                >
                  Logout <RiLogoutBoxLine />
                </li>
              </motion.ul>
            )}
          </div>
        </div>

        <div className="fixed w-screen py-3 text-headingColor bg-white border border-gray-400 border-t-1  bottom-0 left-0">
          <ul className="flex justify-around  items-center">
            <motion.li
              whileTap={{ scale: 0.8 }}
              className="cursor-pointer text-2xl active:text-secondaryColor"
            >
              <GoHome />
            </motion.li>
            <motion.li
              whileTap={{ scale: 0.8 }}
              className="cursor-pointer text-2xl active:text-secondaryColor"
            >
              <MdOutlineRestaurantMenu />
            </motion.li>

            <motion.li
              whileTap={{ scale: 0.8 }}
              className="relative flex justify-center items-top cursor-pointer"
            >
              <MdFastfood className="text-2xl" />
              <div className="absolute -top-2 -right-3  w-4 h-4 rounded-full bg-red-500 flex justify-center items-center">
                <p className="text-xs font-semibold">2</p>
              </div>
            </motion.li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
