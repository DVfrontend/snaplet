"use client";

import type { Product } from "@/types/productType";
import { useEffect, useState } from "react";
import Products from "@/components/ui/products";
import data from "@/data/product.json";

export default function HouseHold() {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const products = await new Promise<Product[]>((resolve) => {
          setTimeout(() => {
            resolve(data);
          }, 1000);
        });

        const filtered = products.filter(
          (product) => product.category === "Электроника",
        );

        setFilteredProducts(filtered);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) return <p>Загрузка...</p>;

  return <Products products={filteredProducts} />;
}
