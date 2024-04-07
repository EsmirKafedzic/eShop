import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductService from "../services/productService";
// import * as React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

import { FaCheck } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { CiHeart } from "react-icons/ci";

function ProductDetailsPage() {
  const [product, setProduct] = useState({});
  const [currentImage, setCurrentImage] = useState(0);
  const [value, setValues] = useState(1);
  let { id } = useParams();

  useEffect(() => {
    ProductService.getSingleProduct(id)
      .then((res) => {
        setProduct(res.data);
        setValues(res.data.rating);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="h-[100vh]">
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
                  src={img}
                  alt=""
                  className="w-[100px] h-[100px] border-2 border-mainBlue p-2 rounded-[20px] cursor-pointer"
                  onClick={() => setCurrentImage(index)}
                />
              );
            })}
          </div>
        </div>

        <div className="w-[50%]">
          <div>
            <h3 className="text-xl text-mainBlue font-bold">{product.title}</h3>
            <p className="text-xl">${product.price}</p>

            <Stack>
              <Rating
                name="half-rating-read"
                value={value}
                precision={0.5}
                readOnly
              />
            </Stack>
            <div className="flex items-center gap-[10px]">
              <p>Availabilitiy</p>
              {product.stock > 1 ? (
                <div className="flex items-center gap-2 text-green-400">
                  <FaCheck />
                  <span>In stock</span>
                </div>
              ) : (
                <div className="flex items-center text-red-400">
                  <RxCross2 size={28} />
                  <span>Out of stock</span>
                </div>
              )}
            </div>
            <h3>
              Hurry up only <span className="font-bold">{product.stock} </span>{" "}
              left on the stock
            </h3>
          </div>
          <div>
            <h3>Total price: ${product.price}</h3>
            <div className="flex">
              <p>Quantitiy:</p>
              <button>+</button>
              <span>0</span>
              <button>-</button>
            </div>

            <div>
              <Link>Add to chart</Link>
              <Link>
                <CiHeart />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
