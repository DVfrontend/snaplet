"use client";

import styles from "@/styles/buttonBuy.module.scss";
import { toast } from "sonner";
import { Product } from "@/types/productType";
import { useAppDispatch } from "@/store";
import { addToCart } from "@/store/cartSlice";

interface ButtonBuyProps {
  product: Product;
}

export default function ButtonBuy({ product }: ButtonBuyProps) {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(addToCart(product));
    toast.success("Отлично, теперь товар в корзине");
  };

  return (
    <button onClick={handleClick} className={styles.button}>
      В КОРЗИНУ
    </button>
  );
}
