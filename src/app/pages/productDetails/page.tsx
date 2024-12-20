"use client";
import { useParams } from "next/navigation";
import React from "react";
import productData from "@/utils/productData.js";
import Footer from "@/app/Components/Footer";
import Header from "@/app/Components/Header";
import Link from "next/link";
import Image from "next/image";

const Page = () => {
  const params = useParams(); // Returns an object
  const paramID = params?.id; // Extract 'id' from params
  const filterData = productData.filter((item) => item.id === Number(paramID));
  const dataFilter = filterData[0];

  console.log(dataFilter);
  console.log(paramID);

  return (
    <div>
      <Header />
      <div>
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <Image
                alt="ecommerce"
                className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                src={dataFilter?.imageUrl || "/assets/Images/img8.png"} // Add fallback image if undefined
                width={500}
                height={500}
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  Ecommerce
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {dataFilter?.title || "Product Title"}
                </h1>
                <div className="flex mb-4">
                  <span className="flex items-center">
                    {/* Your star rating code here */}
                    <span className="text-gray-600 ml-3">4 Reviews</span>
                  </span>
                </div>
                <p className="leading-relaxed">{dataFilter?.description || "Product description not available."}</p>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                  <div className="flex">
                    <span className="mr-3">Color</span>
                    <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                    <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                    <button className="border-2 border-gray-300 ml-1 bg-blue-500 rounded-full w-6 h-6 focus:outline-none"></button>
                  </div>
                  <div className="flex ml-6 items-center">
                    <span className="mr-3">Size</span>
                    <div className="relative">
                      <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 text-base pl-3 pr-10">
                        <option>SM</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                      </select>
                      <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-4 h-4"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-evenly gap-4">
                  <span className="title-font font-medium text-2xl text-gray-900">
                    {dataFilter?.price || "Rs:250000"}
                  </span>
                  <div className="flex gap-4 mr-20">
                    <Link href="/pages/cart">
                      <button className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">
                        Add_to_cart
                      </button>
                    </Link>
                    <Link href="/pages/checkout">
                      <button className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">
                        Checkout
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
