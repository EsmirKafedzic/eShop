import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductService from "../services/productService";
// import * as React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { FaHeart } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { CiHeart } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { saveProductHandler } from "../store/cartSlice";
import { saveFavoriteHandler } from "../store/favoriteSlice";

function ProductDetailsPage() {
  const [product, setProduct] = useState({});
  const [currentImage, setCurrentImage] = useState(0);
  const [value, setValues] = useState(1);
  const { favorite } = useSelector((state) => state.favoriteStore);
  const [favIcon, setFavIcon] = useState(null);
  let { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    ProductService.getSingleProduct(id)
      .then((res) => {
        setProduct(res.data);
        setValues(res.data.rating);
      })
      .catch((err) => console.log(err));
  }, []);

  function productHanlder() {
    dispatch(saveProductHandler(product));
  }

  function favoriteHandler() {
    dispatch(saveFavoriteHandler(product));
    console.log(product);
  }

  useEffect(() => {
    favorite.find((el) => {
      if (el.id === parseInt(id)) {
        setFavIcon(el.id);
        return;
      }
    });
  }, [favorite]);

  return (
    <div className="h-[100vh]" key={product.id}>
      <div className="container mx-auto flex mt-[50px] gap-[20px]">
        <div className="w-[50%] flex flex-col">
          <img
            src={product.images?.[currentImage]}
            className="w-full object-cover border-2 h-[500px] border-mainBlue rounded-[20px] p-3"
          />
          <div className="flex item-center justify-between mt-[20px]">
            {product.images?.map((img, index) => {
              return (
                <img
                  key={index}
                  src={img}
                  alt=""
                  className="w-[100px] h-[100px] border-2 border-mainBlue p-2 rounded-[20px] cursor-pointer"
                  onClick={() => setCurrentImage(index)}
                />
              );
            })}
          </div>
        </div>

        <div className="w-[50%] flex flex-col justify-between mb-32">
          <div>
            <div>
              <h3 className="text-3xl text-mainBlue font-bold">
                {product.title}
              </h3>
            </div>
            <div>
              <p className="text-xl mt-5">
                {" "}
                Price:
                <span className="px-2 font-bold">${product.price}</span>
              </p>
            </div>

            <div className="flex mt-4">
              <h1 className="text-xl">Rating: </h1>
              <Stack>
                <Rating
                  name="half-rating-read"
                  value={value}
                  precision={0.5}
                  readOnly
                />
              </Stack>
            </div>
            <div className="flex items-center gap-[10px] mt-4">
              <p className="text-xl">Availabilitiy:</p>
              {product.stock > 1 ? (
                <div className="flex items-center gap-2 text-green-400">
                  <FaCheck size={32} />
                  <span>In stock</span>
                </div>
              ) : (
                <div className="flex items-center text-red-400">
                  <RxCross2 size={28} />
                  <span>Out of stock</span>
                </div>
              )}
            </div>
            <h3 className="text-xl mt-4">
              Hurry up only <span className="font-bold">{product.stock} </span>{" "}
              left on the stock
            </h3>
          </div>

          <h3 className="text-xl">
            Total price: <span className="font-bold">${product.price}</span>
          </h3>
          <div className="flex items-center w-[220px] justify-between">
            <p className="text-xl">Quantitiy:</p>
            <div>
              <button className=" bg-gray-300 w-[40px]">+</button>
              <span className="border border-t-gray-300 border-b-gray-300 px-3">
                0
              </span>
              <button className="bg-gray-300 w-[40px]">-</button>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-10">
            <Link
              to="/cartPoroducts"
              className="bg-yellow-400 px-5 py-3 rounded-3xl text-blue-800 hover:bg-green-400 hover:text-white"
              onClick={() => productHanlder()}
            >
              Add to chart
            </Link>
            <Link
              to="/favoriteProducts"
              className="text-3xl "
              onClick={() => favoriteHandler()}
            >
              {favIcon === parseInt(id) ? (
                <FaHeart size={32} color="" />
              ) : (
                <CiHeart />
              )}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
