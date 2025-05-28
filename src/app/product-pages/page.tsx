import type { Navigation } from "@/types";
import Link from "next/link";

const nav: Navigation[] = [
  { id: 1, title: "Инструменты", path: "/product-pages/tools" },
  { id: 2, title: "Спорт", path: "/product-pages/sports" },
  { id: 3, title: "Продукты", path: "/product-pages/products" },
  { id: 4, title: "Бытовая техника", path: "/product-pages/house-hold" },
  { id: 5, title: "Для дома", path: "/product-pages/for-home" },
  { id: 6, title: "Электроника", path: "/product-pages/electronics" },
  { id: 7, title: "Одежда", path: "/product-pages/clothing" },
  { id: 8, title: "Красота", path: "/product-pages/beauty" },
  { id: 9, title: "Аксессуары", path: "/product-pages/accessories" },
  { id: 10, title: "Игры", path: "/product-pages/games" },
];

export default function Category() {
  return (
    <div>
      <div className="p-4 mx-auto">
        <h1 className="text-3xl font-bold mb-4">Категории товаров</h1>
        <div className="bg-gray-200 rounded-xl w-100 ">
          <details className="group w-100">
            <summary className="cursor-pointer bg-gray-100 bg-gray-800 px-4 py-2 rounded-xl shadow-sm font-semibold text-lg hover:bg-gray-200 hover:bg-gray-100 transition-colors text-white hover:text-black duration-300">
              Все категории товаров
            </summary>
            <ul className="mt-2 pl-6 space-y-2 opacity-0 max-h-0 overflow-hidden transition-all duration-500 ease-in-out group-open:opacity-100 group-open:max-h-[500px]">
              {nav.map(({ id, title, path }) => (
                <li key={id}>
                  <Link
                    href={path}
                    className="block p-2 rounded-lg hover:bg-blue-900 transition-colors"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </details>
        </div>
        <h2 className="text-2xl font-bold m-3">Все товары</h2>
      </div>
    </div>
  );
}
