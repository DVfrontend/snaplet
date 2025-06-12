"use client";

import { ButtonBuy } from "./buttonBuy";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { memo } from "react";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  currency: string;
  inStock: boolean;
  category: string;
  brand: string;
  rating: number;
  image: string;
}

interface ProductsProps {
  products: Product[];
}

function Products({ products }: ProductsProps) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      {products.length === 0 ? (
        <p className="text-center text-gray-500">No products found.</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((item) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <Link href={`/category/${item.category}/${item.id}`}>
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </Link>

              <div className="p-4 flex flex-col justify-between h-[200px]">
                <div className="space-y-2">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-sm">{item.brand}</p>
                  <p className="text-sm line-clamp-3">{item.description}</p>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-base font-bold">
                    {item.price} {item.currency}
                  </span>
                  {item.inStock ? (
                    <ButtonBuy product={item} />
                  ) : (
                    <p className="text-red-500 text-sm">Not available</p>
                  )}
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default memo(Products);
