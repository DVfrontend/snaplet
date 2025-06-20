import fs from "fs/promises";
import path from "path";
import {Products} from "@/components/products";
import { memo } from "react";
import { Product } from "@/types/productType";

async function Home() {
  const filePath = path.join(process.cwd(), "public/data", "products.json");
  const jsonData = await fs.readFile(filePath, "utf-8");
  const products: Product[] = JSON.parse(jsonData);

  return (
    <>
      <h1 className="text-3xl font-bold mb-4">All Products</h1>
      <Products products={products} />
    </>
  );
}

export default memo(Home);
