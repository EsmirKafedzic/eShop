import React from "react";
import { useDispatch } from "react-redux";
import { setPriceHandler } from "../store/cartSlice";

function CartItemComponent({ item, index }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-4 w-full justify-between">
      <img src={item.thumbnail} alt="" className="w-[100px] h-[100px]" />
      <div>
        <p>{item.title}</p>
        <p>{item.category}</p>
      </div>
      <h1>${item.price}</h1>

      <div>
        <button
          className=" bg-gray-300 w-[40px]"
          onClick={() => dispatch(setPriceHandler({ increment: 1, index }))}
        >
          +
        </button>
        <span className="border border-t-gray-300 border-b-gray-300 px-3">
          {item.count}
        </span>
        <button
          className="bg-gray-300 w-[40px]"
          onClick={() => dispatch(setPriceHandler({ increment: -1, index }))}
        >
          -
        </button>
      </div>
      <h1>${item.cartTotal}</h1>
    </div>
  );
}

export default CartItemComponent;
