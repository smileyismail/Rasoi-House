import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import Lottie from "lottie-react";
import logo from "../../assets/lotties/logo.json";

import Avatar from "./Avatar";
import CartButton from "../Cart/CartButton";

import navLinks from "../../utils/navLinks";

const Header = ({ setIsCartOpen }) => {
  const [navBgColor, setNavBgColor] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const location = useLocation();

  function navBgColorChange() {
    if (window.scrollY >= 400) {
      setNavBgColor(true);
    } else {
      setNavBgColor(false);
    }
  }

  window.addEventListener("scroll", navBgColorChange);

  return (
    <header
      className={`fixed z-30 h-16 top-0 left-0 w-screen flex justify-center items-center pl-4 pr-10 ${
        navBgColor || location.pathname !== "/"
          ? "bg-secondary drop-shadow-xl"
          : "bg-transparent"
      } transition-all duration-500`}
    >
      <div className="w-full max-w-6xl flex justify-between items-center gap-6">
        <div className="w-20 cursor-pointer">
          <Link to="/" onClick={() => setActiveLink("#home")}>
            <Lottie animationData={logo} loop={true} />
          </Link>
        </div>

        {location.pathname === "/logIn" ||
        location.pathname === "/signUp" ||
        location.pathname === "/forgotPassword" ? (
          ""
        ) : (
          <nav className="ml-auto hidden md:block">
            <ul className="flex gap-6">
              {navLinks.map((link) => (
                <li key={link.id} className="text-base font-semibold">
                  <a
                    href={link.path}
                    onClick={() => setActiveLink(link.path)}
                    className={`${
                      activeLink === link.path
                        ? "border-b-4 border-accent rounded-b-md"
                        : ""
                    }`}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {location.pathname === "/logIn" ||
        location.pathname === "/signUp" ||
        location.pathname === "/forgotPassword" ? (
          ""
        ) : (
          <div className="ml-auto md:ml-0" onClick={() => setIsCartOpen(true)}>
            <CartButton />
          </div>
        )}

        <div>
          <Avatar />
        </div>
      </div>
    </header>
  );
};

export default Header;
