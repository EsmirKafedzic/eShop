import React from "react";
import { useSelector } from "react-redux";
// import SingleCardComponents from "../components/SingleCardComponents";
import CartItemComponent from "../components/CartItemComponent";

function CartProductsPage() {
  const { cart } = useSelector((state) => state.cartStore);

  return (
    <div>
      <div className="container mx-auto mt-10">
        <div className="flex gap-8">
          <div className="w-[60%]">
            {cart.map((el, index) => {
              return <CartItemComponent key={el.id} item={el} index={index} />;
            })}
          </div>
          <div className="w-[40%]">Coupon discount</div>
        </div>
      </div>
    </div>
  );
}

export default CartProductsPage;
