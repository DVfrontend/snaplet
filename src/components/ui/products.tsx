"use client";

import type { Product } from "@/types/productType";
import {ButtonBuy} from "./buttonBuy";
import Image from "next/image";
import { motion } from "motion/react";
import { memo } from "react";

interface ProductsProps {
  products: Product[];
}

function Products({ products }: ProductsProps) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((item) => (
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
            key={item.id}
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
                <span className="text-base font-bold">
                  {item.price} {item.currency}
                </span>
                {item.inStock ? <ButtonBuy product={item} /> : <p className="text-red-500">Product is not available</p> }
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export default memo(Products);
