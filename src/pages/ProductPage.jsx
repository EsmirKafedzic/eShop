import React, { useEffect } from "react";
import CategoryComponents from "../components/CategoryComponents";
import ProductService from "../services/productService";
import { useDispatch, useSelector } from "react-redux";
import { productsHandler } from "../store/productSlice";
import SingleCardComponents from "../components/SingleCardComponents";

function ProductPage() {
  const dispatch = useDispatch();
  const { products, currentCategory } = useSelector(
    (state) => state.productStore
  );
  const { user, logged } = useSelector((state) => state.userStore);
  console.log(user, logged);

  useEffect(() => {
    ProductService.getAllProducts()
      .then((res) => dispatch(productsHandler(res.data.products)))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    ProductService.getProductByCategory(currentCategory)
      .then((res) => dispatch(productsHandler(res.data.products)))
      .catch((err) => console.log(err));
  }, [currentCategory]);

  return (
    <div>
      <CategoryComponents />

      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:gird-cols-2 lg:grid-cols-3 xl:grid-cols-5 mt-[50px] gap-3 place-items-center">
          {logged
            ? products.map((product) => {
                return (
                  <SingleCardComponents key={product.id} product={product} />
                );
              })
            : "Loginuj se"}
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
