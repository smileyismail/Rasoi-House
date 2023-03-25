import React from "react";

import { useSelector } from "react-redux";

import CartItem from "./CartItem";

import { TiShoppingCart } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Cart = ({ setIsCartOpen }) => {
  const { items, totalAmount, totalQuantity } = useSelector(
    (state) => state.cart
  );

  return (
    <div className="w-full flex flex-col h-full">
      <header className="flex justify-center items-center gap-2">
        <TiShoppingCart className="text-3xl text-secondary" />
        <h1 className="text-2xl font-semibold flex-1">Cart</h1>
        <IoCloseSharp
          className="text-3xl text-accent"
          onClick={() => setIsCartOpen(false)}
        />
      </header>

      <div className="border-[1px] mt-2 scale-x-150" />

      {items.length ? (
        <nav className="overflow-y-scroll overflow-x-hidden scroll-smooth scrollbar-hide">
          <ul className="flex flex-col gap-3">
            {items.map((item) => (
              <li key={item.id}>
                <CartItem item={item} />
              </li>
            ))}
          </ul>
        </nav>
      ) : (
        <h2 className="my-auto text-2xl text-center font-semibold">
          Your Cart is Empty
        </h2>
      )}

      <div className="border-[1px] my-4 scale-x-150" />

      <div className="mt-auto drop-shadow-2xl">
        <div className="flex text-sm">
          <p className="mr-auto">Total Items :</p>
          <p className="text-end">{totalQuantity}</p>
        </div>
        <div className="flex text-lg font-semibold mb-3">
          <p className="mr-auto">Total Amount :</p>
          <p className="text-end">{totalAmount} ₹</p>
        </div>

        <Link to="/order">
          <button
            className="text-center text-lg font-bold w-full p-2 bg-secondary"
            onClick={() => setIsCartOpen(false)}
          >
            Order Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
