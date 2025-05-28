"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/styles/navbar.module.scss";
import Image from "next/image";

const nav: { id: number; title: string; path: string }[] = [
  { id: 1, title: "Дом", path: "/" },
  { id: 2, title: "Корзина", path: "/cart" },
  { id: 3, title: "Про меня", path: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed bg-neutral-900 top-0 right-0 left-0 text-white p-3 items-center">
      <div className="flex items-center justify-between gap-x-8">
        <Link href={"./"}>
          <Image
            src={"/icons/icon.png"}
            alt="logo"
            width={40}
            height={40}
            className="rounded-md shdaow-xl/50 shadow-white"
          />
        </Link>

        <div className="flex space-x-3 text-right">
          {nav.map(({ id, title, path }) => (
            <Link key={id} href={path} className="text-right">
              <span
                className={`${
                  pathname === path ? styles.active : undefined
                } ease-in duration-300 hover:shadow-white hover:shadow-2xl hover:border-b mx-3 py-1 hover:border-b-white hover:shadow-b border-white hover:shadow-[0_2px_0_0_rgb(255,255,255)] transition-shadow`}
              >
                {title}
              </span>
            </Link>
          ))}
          {/*.map



          <details className="group relative cursor-pointer">
            <summary className="list-none text-white px-3 py-1 rounded-md hover:bg-white hover:text-neutral-900 transition-colors duration-300">
              Меню
            </summary>
            <ul className="absolute right-0 mt-2 w-32 bg-neutral-800 rounded-md shadow-lg border border-neutral-700 z-10 hidden group-open:block">
              <li className="px-4 py-2 hover:bg-neutral-700 transition-colors">
                Пункт 1
              </li>
              <li className="px-4 py-2 hover:bg-neutral-700 transition-colors">
                Пункт 2
              </li>
            </ul>
          </details>
          */}
        </div>
      </div>
    </nav>
  );
}
