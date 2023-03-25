import React from "react";

const Drawer = ({ children, isCartOpen, setIsCartOpen }) => {
  return (
    <main
      className={
        "fixed overflow-hidden max-h-screen z-40 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out" +
        (isCartOpen
          ? " transition-opacity opacity-100 duration-200 translate-x-0"
          : " transition-all delay-200 opacity-0 translate-x-full")
      }
    >
      <section
        className={
          "w-full max-w-md right-0 absolute overflow-hidden p-4 bg-primary h-full shadow-2xl delay-200 duration-200 ease-in-out transition-all transform" +
          (isCartOpen ? " translate-x-0 " : " translate-x-full")
        }
      >
        {children}
      </section>

      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setIsCartOpen(false);
        }}
      ></section>
    </main>
  );
};

export default Drawer;
