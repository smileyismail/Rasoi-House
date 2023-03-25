import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import { Menu, Transition } from "@headlessui/react";

import Lottie from "lottie-react";
import avatarIllustration from "../../assets/lotties/avatar.json";
import { ImUserPlus } from "react-icons/im";
import { RiLoginBoxLine } from "react-icons/ri";

const Avatar = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button>
        <div className="relative w-12 cursor-pointer rounded-full">
          <Lottie animationData={avatarIllustration} loop={true} />
        </div>
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 w-40 origin-top-right rounded-md bg-primary shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none font-semibold">
          <Menu.Item>
            {({ active }) => (
              <Link
                to="logIn"
                className={`${
                  active ? "bg-secondary text-primary" : ""
                } group flex w-full items-center rounded-md px-4 py-2`}
              >
                <RiLoginBoxLine
                  className={`mr-2 text-xl ${
                    active ? "text-primary" : "text-secondary"
                  }`}
                />
                Log In
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <Link
                to="signUp"
                className={`${
                  active ? "bg-secondary text-primary" : ""
                } group flex w-full items-center rounded-md px-4 py-2`}
              >
                <ImUserPlus
                  className={`mr-2 text-xl ${
                    active ? "text-primary" : "text-secondary"
                  }`}
                />{" "}
                Sign Up
              </Link>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Avatar;
