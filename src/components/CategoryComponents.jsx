import React, { useEffect, useState } from "react";
import CategoryService from "../services/categoryService";
import { categoryHandler, currentCategoryHandler } from "../store/productSlice";
import { useDispatch, useSelector } from "react-redux";

function CategoryComponents() {
  const [isActive, setIsActive] = useState(false);

  const { category } = useSelector((state) => state.productStore);
  const dispatch = useDispatch();

  useEffect(() => {
    CategoryService.getAllCategory()
      .then((res) => dispatch(categoryHandler(res.data)))
      .catch((err) => console.log(err));
  }, []);

  function showCategoryHandle() {
    setIsActive(!isActive);
  }

  function handleCategory(cat) {
    console.log(cat);
    dispatch(currentCategoryHandler(cat));
  }

  return (
    <div className="bg-grayLine py-[20px]">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-[20px]">
        <button
          onClick={showCategoryHandle}
          className="px-[24px] py-[12px] bg-mainBlue text-mainYellow rounded-lg"
        >
          Category
        </button>
        <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2">
          {isActive &&
            category.map((cat, index) => {
              return (
                <li
                  className="bg-blue-300 px-[16px] py-[8px] w-[260px] hover:bg-mainBlue rounded-lg hover:text-[#fff] cursor-pointer text-center transition-all"
                  key={index}
                  onClick={() => handleCategory(cat)}
                >
                  {cat}
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default CategoryComponents;
