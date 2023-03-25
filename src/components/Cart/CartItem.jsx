import React from "react";

import { useDispatch } from "react-redux";
import { cartSliceActions } from "../../store/cartSlice";

import { BiPlus, BiMinus } from "react-icons/bi";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { id, name, image, price, description, quantity, totalPrice } =
    props.item;

  function handleIncrement() {
    dispatch(
      cartSliceActions.addItemToCart({
        id,
        price,
      })
    );
  }
  function handleDecrement() {
    dispatch(cartSliceActions.removeItemFromCart(id));
  }

  return (
    <div className="shadow-md rounded-md h-screen max-h-32 flex justify-between items-center p-4 select-none">
      <div className="flex justify-start items-center">
        <div>
          <img src={image} alt="img" className="w-20 max-w-[5rem]" />
        </div>

        <div>
          <h5 className="text-md font font-semibold">{name}</h5>
          <p className="text-sm">{description}</p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-end gap-3 whitespace-nowrap">
        <div className="flex justify-between items-center text-lg rounded-md bg-secondary border-2 border-secondary">
          <div className="flex-1 w-full" onClick={handleDecrement}>
            <BiMinus />
          </div>
          <div className="flex-1 px-1 w-full rounded-sm bg-primary text-center">
            {quantity}
          </div>
          <div className="flex-1 w-full" onClick={handleIncrement}>
            <BiPlus className="text-xl" />
          </div>
        </div>

        <div>
          <p className="text-sm text-end">
            {"("}₹{price}/item{")"}
          </p>
          <h6 className="text-md font-semibold">Amount : ₹ {totalPrice}</h6>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
