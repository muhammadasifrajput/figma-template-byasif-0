"use client";

import Footer from "@/app/Components/Footer";
import Header from "@/app/Components/Header";
import TextData from "@/app/Components/TextData";
import Image from "next/image";

const Cart = () => {
  const cartItems = [
    {
      id: 1,
      image: "/assets/Images/img1.png",
      price: 1000,
      quantity: 2,
      subtotal: 2000,
    },
    {
      id: 2,
      image: "/assets/Images/img2.png",
      price: 500,
      quantity: 1,
      subtotal: 500,
    },
  ];

  return (
    <div>
      <Header />

      <div className="w-full">
        <Image
          src="/assets/Images/cart.png"
          alt="Cart"
          width={1500}
          height={200}
          className="w-full object-cover"
        />
      </div>
      <div className="min-h-screen flex flex-col bg-gray-50 py-10">
        <main className="flex-grow max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Cart Items */}
            <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Shopping Cart
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead className="bg-[#fff9e5] border-b">
                    <tr>
                      <th className="text-left p-3 text-gray-600 font-medium">
                        Product
                      </th>
                      <th className="text-right p-3 text-gray-600 font-medium">
                        Price
                      </th>
                      <th className="text-center p-3 text-gray-600 font-medium">
                        Quantity
                      </th>
                      <th className="text-right p-3 text-gray-600 font-medium">
                        Subtotal
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr
                        key={`cart-item-${item.id}`}
                        className="border-b hover:bg-gray-100"
                      >
                        <td className="p-3 text-gray-700 flex items-center gap-4">
                          <Image
                            src={item.image}
                            height={60}
                            width={60}
                            alt={`Product ${item.id}`}
                            className="rounded-md"
                          />
                          <span className="truncate text-sm md:text-base">
                            Product #{item.id}
                          </span>
                        </td>
                        <td className="p-3 text-right text-gray-700">
                          PKR {item.price}
                        </td>
                        <td className="p-3 text-center text-gray-700">
                          {item.quantity}
                        </td>
                        <td className="p-3 text-right text-gray-700">
                          PKR {item.subtotal}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Cart Summary */}
            <div className="bg-[#fff9e5] p-6 rounded-lg shadow">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Cart Summary
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between text-sm md:text-base">
                  <span className="text-gray-700 font-medium">Subtotal:</span>
                  <span className="text-gray-800 font-bold">PKR 2500</span>
                </div>
                <div className="flex justify-between text-sm md:text-base">
                  <span className="text-gray-700 font-medium">Shipping:</span>
                  <span className="text-gray-800 font-bold">PKR 200</span>
                </div>
                <hr />
                <div className="flex justify-between text-lg font-bold">
                  <span>Total:</span>
                  <span className="text-gray-900">PKR 2700</span>
                </div>
                <button className="w-full mt-4 px-4 py-2 bg-[#fff9e5] text-black font-medium rounded-lg shadow hover:bg-white transition">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>

      <TextData />
      <Footer />
    </div>
  );
};

export default Cart;
