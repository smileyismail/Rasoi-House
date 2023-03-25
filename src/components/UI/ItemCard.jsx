import React from "react";

import { useDispatch } from "react-redux";
import { cartSliceActions } from "../../store/cartSlice";

import { TiShoppingCart } from "react-icons/ti";
import { BiPlus } from "react-icons/bi";

const ItemCard = (props) => {
  const dispatch = useDispatch();

  const { id, name, image, type, trending, price, description } = props.dish;

  function handleAddToCart() {
    dispatch(
      cartSliceActions.addItemToCart({
        id,
        name,
        image,
        type,
        trending,
        price,
        description,
      })
    );
  }
  return (
    <div className="group relative bg-primary hover:grayscale-1 drop-shadow-xl h-screen max-h-[13rem] w-screen max-w-xs rounded-md p-4 backdrop-blur-3xl">
      <div className="w-44 absolute -top-4 group-hover:scale-125 duration-150 transition-all">
        <img src={image} alt="pic" className="h-full w-full object-cover" />
      </div>

      <div className="flex flex-col justify-start items-end h-full select-none">
        <button
          className="group flex-1 flex items-start font-semibold p-1 rounded-md hover:scale-110 duration-150"
          onClick={handleAddToCart}
        >
          <div className="flex items-center justify-center">
            <TiShoppingCart className="text-4xl text-secondary group-active:text-accent" />
            <BiPlus className="text-2xl text-accent" />
          </div>
        </button>

        <h4 className="text-lg font-semibold">{name}</h4>
        <p>{description}</p>
        <p className="font-bold">
          {price} <span className="text-accent">₹</span>
        </p>
      </div>
    </div>
  );
};

export default ItemCard;
