"use client";

import { useAppSelector } from "@/store";
import Image from "next/image";

export default function CartPage() {
  const items = useAppSelector((state) => state.cart.items);

  return (
    <div>
      <h1 className="text-4xl pb-3">Корзина</h1>
      <div>
        {items.length === 0 ? (
          <h1>Корзина пуста</h1>
        ) : (
          <ul className="space-y-4">
            {items.map((item, id) => (
              <li
                key={id}
                className="border p-4 rounded shadow flex gap-4  mb-4"
              >
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
                  </b>
                  — {item.description} {item.price} {item.currency}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
