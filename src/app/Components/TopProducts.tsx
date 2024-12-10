import React from "react";
import Card from "../Components/common/Card";
import productData from "../../utils/productData.js";
import Link from "next/link";

const TopProducts = () => {
  return (
    <div>
      {/* Heading Section */}
      <div className="flex justify-center flex-col items-center my-20">
        <div className="text-2xl text-center">
          <h1>Top Picks For You</h1>
          <h2 className="my-4">
            Find a bright ideal to suit your taste with our great selection of
            suspension, floors, and table lights.
          </h2>
        </div>
      </div>

      {/* Products Section */}
      <div className="flex justify-center gap-4 flex-wrap">
        {productData.map((item) => {
          const { title, imageUrl, price, id } = item;

          return (
            <Link key={id} href={`/pages/productDetails/${id}`}>
              <Card title={title} imageUrl={imageUrl} price={price} />
            </Link>
          );
        })}
      </div>

      {/* View More Section */}
      <div className="flex justify-center items-center py-10">
        <span className="border-b-2 py-2 text-2xl border-black">
          View More
        </span>
      </div>
    </div>
  );
};

export default TopProducts;
