import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
// import SingleCardComponents from "../components/SingleCardComponents";
import CartItemComponent from "../components/CartItemComponent";

function CartProductsPage() {
  const { cart, totalPrice } = useSelector((state) => state.cartStore);

  const [dataCoupon, setDataCoupon] = useState("");

  let coupon = useRef("");

  function handleCoupon() {
    setDataCoupon(coupon.current.value);
  }

  return (
    <div>
      <div className="container mx-auto mt-10">
        <div className="flex gap-8 justify-between">
          <div className="w-[60%] mt-[50px] flex flex-col gap-5">
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

          <div className="flex flex-col gap-5">
            <div className="w-[40%]">
              <h3>
                Total price: $
                {dataCoupon === "alphacode" ? totalPrice / 2 : totalPrice}
              </h3>
            </div>
            <p>
              Use this promo{" "}
              <span className="text-mainYellow font-bold text-[14px]">
                alphacode
              </span>{" "}
              code for -50% discount!
            </p>
            <input
              ref={coupon}
              type="text"
              placeholder="Insert coupon..."
              className="border border-mainBlue rounded-[20px] px-[24px] py-[12px] outline-none"
            />
            <button
              onClick={handleCoupon}
              className="bg-mainBlue rounded-[20px] px-[24px] py-[12px] text-white"
            >
              Use cupon
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartProductsPage;
