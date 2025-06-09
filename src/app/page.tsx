import fs from "fs/promises";
import path from "path";
import Products from "@/components/ui/products";
import Carousel from "@/components/ui/carousel";
import type { Product } from "@/types/productType";
import { memo } from "react";

async function Home() {
  const filePath = path.join(process.cwd(), "src/data", "products.json");
  const jsonData = await fs.readFile(filePath, "utf-8");
  const products: Product[] = JSON.parse(jsonData);

  return (
    <>
      <h1 className="text-3xl font-bold mb-4">All Products</h1>
      <Carousel />
      <Products products={products} />
    </>
  );
}

export default memo(Home);
