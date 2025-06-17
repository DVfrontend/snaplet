"use client";

import styles from "@/styles/buttonBuy.module.scss";
import { toast } from "sonner";
import { useAppDispatch } from "@/store";
import { addToCart } from "@/store/cartSlice";
import { Product } from "@/types/productType";

interface ButtonBuyProps {
  product: Product;
}

export const ButtonBuy = ({ product }: ButtonBuyProps) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(addToCart(product));
    toast.success("Great, now the item is in the cart.");
  };

  return (
    <button onClick={handleClick} className={styles.button}>
      ADD TO CART
    </button>
  );
};
