"use client";

import type { Product } from "@/types/productType";
import ButtonBuy from "./buttonBuy";
import Image from "next/image";

interface ProductsProps {
  products: Product[];
}

function Products({ products }: ProductsProps) {
  return (
    <div>
      <ul className="space-y-4 mb-4">
        {products.map((item) => (
          <li key={item.id} className="border p-4 rounded shadow flex gap-4">
            <Image
              src={item.image}
              alt={item.title}
              width={100}
              height={80}
              className="object-cover"
            />
            <div>
              <b>
                {item.title} {item.brand}
              </b>{" "}
              — {item.description} {item.price} {item.currency}
            </div>
            <ButtonBuy product={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
