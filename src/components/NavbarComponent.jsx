import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import InputComponents from "./InputComponents";
import { useSelector } from "react-redux";

import { FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";

function NavbarComponent() {
  const { totalProducts } = useSelector((state) => state.cartStore);
  const { user, logged } = useSelector((state) => state.userStore);
  // const { user } = useSelector((state) => state.user);
  console.log(user);
  return (
    <div className="bg-mainBlue h-[100px] px-[20px] md:px-0">
      <div className="container mx-auto flex justify-between items-center h-full">
        <Link to="/">
          <img src={logo} className="h-[60px] w-[120px]" alt="" />
        </Link>
        <InputComponents />
        <div className="flex gap-7">
          <div className="flex items-center gap-1">
            {logged ? (
              <img
                src={user.image}
                className="w-[40px] h-[40px] rounded-full"
                alt=""
              />
            ) : (
              <FaUser className="text-[#fff] text-xl cursor-pointer" />
            )}
            <Link to="/login" className="text-[#fff] ">
              {logged ? <h1>{user.username}</h1> : "Sign in"}
            </Link>
          </div>
          <div className="flex items-center gap-1">
            <FaHeart className="text-[#fff] text-xl cursor-pointer" />
            <span className="w-9 flex justify-center text-[#fff]  bg-mainYellow rounded-full p-[5px]">
              0
            </span>
          </div>
          <div className="flex items-center gap-1">
            <FaShoppingCart className="text-[#fff] text-xl cursor-pointer" />
            <span className="w-9 flex justify-center text-[#fff] bg-mainYellow rounded-full p-[5px]">
              {!totalProducts ? 0 : totalProducts}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarComponent;
