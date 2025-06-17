"use client";

import { useAppSelector } from "@/store";
import Image from "next/image";
import { memo } from "react";

function CartPage() {
  const items = useAppSelector((state) => state.cart.items);

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-4xl font-bold mb-6">Cart</h1>

      {items.length === 0 ? (
        <p className="text-2xl text-center text-gray-500">
          Your cart is empty.
        </p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <li
              key={`${item.id}-${i}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-4 flex flex-col justify-between h-[200px]">
                <div className="space-y-2">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-sm">{item.brand}</p>
                  <p className="text-sm line-clamp-3">{item.description}</p>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-base font-bold text-indigo-600 dark:text-indigo-400">
                    {item.price} {item.currency}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default memo(CartPage);
