import React from "react";
import { useSelector } from "react-redux";
// import SingleCardComponents from "../components/SingleCardComponents";
import CartItemComponent from "../components/CartItemComponent";

function CartProductsPage() {
    const { cart, totalPrice } = useSelector((state) => state.cartStore);
    console.log(cart);

    return (
      <div>
        <div className="container mx-auto mt-10">
          <div className="flex gap-8">
            <div className="w-[60%]">
              {cart.length > 0 ? (
                cart.map((el, index) => {
                  return (
                    <CartItemComponent key={el.id} item={el} index={index} />
                  );
                })
              ) : (
                <h2 className="text-center uppercase text-3xl text-mainBlue font-bold">
                  No products in cart...
                </h2>
              )}
            </div>
            <div className="w-[40%]">Total price: {totalPrice}</div>
          </div>
        </div>
      </div>
    );
}

export default CartProductsPage;
