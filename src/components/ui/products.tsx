"use client";

import type { Product } from "@/types/productType";
import ButtonBuy from "./buttonBuy";
import Image from "next/image";

interface ProductsProps {
  products: Product[];
}

function Products({ products }: ProductsProps) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((item) => (
          <li
            key={item.id}
            className="group bg-white dark:bg-[#1C1C1C] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
          >
            <div className="relative h-48 w-full">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="p-4 flex flex-col justify-between h-[230px]">
              <div className="space-y-2">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {item.brand}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-base font-bold text-indigo-600 dark:text-indigo-400">
                  {item.price} {item.currency}
                </span>
                <ButtonBuy product={item} />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
