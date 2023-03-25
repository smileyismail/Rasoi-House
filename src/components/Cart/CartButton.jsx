import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { TiShoppingCart } from "react-icons/ti";

const CartButton = () => {
  const [btnBump, setBtnBump] = useState(false);
  const { totalQuantity, items } = useSelector((state) => state.cart);

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnBump(true);

    const timer = setTimeout(() => {
      setBtnBump(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <div
      className={`relative group cursor-pointer p-3 duration-200  hover:scale-110 ${
        btnBump && "scale-110"
      }`}
    >
      <TiShoppingCart className="text-3xl text-primary group-active:text-accent" />
      <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-primary bg-accent rounded-full top-0 -right-2">
        {totalQuantity}
      </div>
    </div>
  );
};

export default CartButton;
