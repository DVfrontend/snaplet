"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { ButtonBuy } from "@/components/buttonBuy";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Product } from "@/types/productType";

export default function CategoryPage() {
  const params = useParams();
  const slug = params?.slug;
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (!slug) return;

    fetch("/data/products.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to load products");
        }
        return res.json();
      })
      .then((data: Product[]) => {
        const filtered = data.filter((product) => product.category === slug);
        setFilteredProducts(filtered);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
      });
  }, [slug]);

  return (
    <div>
      <h1 className="text-xl font-bold">Category: {slug}</h1>
      <div className="max-w-6xl mx-auto px-4 py-6">
        {filteredProducts.length === 0 && (
          <p>No products found in this category.</p>
        )}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Link key={product.id} href={`/category/${slug}/${product.id}`}>
              <li className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="relative h-48 w-full">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 flex flex-col justify-between h-[200px]">
                  <div className="space-y-2">
                    <h2 className="text-lg font-semibold">{product.title}</h2>
                    <p className="text-sm">{product.brand}</p>
                    <p className="text-sm line-clamp-3">
                      {product.description}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-base font-bold">
                      {product.price} {product.currency}
                    </span>
                    {product.inStock ? (
                      <ButtonBuy product={product} />
                    ) : (
                      <p className="text-red-500 text-sm">
                        Not available
                      </p>
                    )}
                  </div>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
