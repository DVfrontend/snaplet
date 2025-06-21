"use client";

import { use } from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ButtonBuy } from "@/components/buttonBuy";
import { Product } from "@/types/productType";

export default function ProductPage(promiseParams: { params: Promise<{ id: string }> }) {
  const { id } = use(promiseParams.params);
  const [item, setItem] = useState<Product | null>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load products");
        return res.json();
      })
      .then((data: Product[]) => {
        const product = data.find((p) => p.id.toString() === id);
        if (product) {
          setItem(product);
        } else {
          setNotFound(true);
        }
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
        setNotFound(true);
      });
  }, [id]);

  if (notFound) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-center text-2xl font-semibold text-red-500">
          Product not found
        </h1>
      </div>
    );
  }

  if (!item) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-extrabold mb-6 text-center md:text-left">
        {item.title}
      </h1>
      <div className="flex flex-col md:flex-row gap-8 rounded-xl shadow-lg p-4">
        <div className="flex-shrink-0">
          <Image
            src={item.image}
            alt={item.title}
            width={300}
            height={400}
            className="rounded-2xl"
          />
        </div>
        <div className="flex flex-col justify-between">
          <p className="text-lg leading-relaxed">{item.description}</p>
          <div className="mt-4 flex justify-center md:justify-start">
            {item.inStock ? (
              <ButtonBuy product={item} />
            ) : (
              <p className="text-red-500">Product is not available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
