import fs from "fs/promises";
import path from "path";
import Products from "@/components/ui/products";
import Carousel from "@/components/ui/carousel";
import Category from "./product-pages/page";
import type { Product } from "@/types";

export default async function Home() {
  const filePath = path.join(process.cwd(), "public/data", "products.json");
  const jsonData = await fs.readFile(filePath, "utf-8");
  const products: Product[] = JSON.parse(jsonData);

  return (
    <>
      <Carousel />
      <Category />
      <Products products={products} />
    </>
  );
}
