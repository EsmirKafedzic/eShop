import React from "react";
import { useSelector } from "react-redux";
import SingleCardComponents from "../components/SingleCardComponents";
function FavoriteProductsPage() {
  const { favorite } = useSelector((state) => state.favoriteStore);
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-5">
          {favorite.map((fav, index) => {
            return <SingleCardComponents key={index} product={fav} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default FavoriteProductsPage;
