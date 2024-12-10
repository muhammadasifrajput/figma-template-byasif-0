import Card from "@/app/Components/common/Card";
import Footer from "@/app/Components/Footer";
import Header from "@/app/Components/Header";
import TextData from "@/app/Components/TextData";
import productData from "@/utils/productData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />

      {/* Banner Section */}
      <div className="w-full flex justify-center my-6">
        <Image
          src="/assets/Images/banner5.png"
          alt=""
          width={1500}
          height={200}
        />
      </div>

      {/* Filter Section */}
      <div>
        <Image
          src="/assets/Images/filter.png"
          alt="Filter"
          width={1500}
          height={200}
        />
      </div>

      {/* Products Section */}
      <div className="flex justify-center items-center flex-wrap gap-4 my-20">
        {productData.map((item) => {
          const { price, imageUrl, title, id } = item;

          return (
            <Link key={`product-${id}`} href={`/pages/productDetails/${id}`}>
              <Card key={`card-${id}`} title={title} imageUrl={imageUrl} price={price} />
            </Link>
          );
        })}
      </div>

      {/* Footer Section */}
      <TextData />
      <Footer />
    </div>
  );
};

export default page;
