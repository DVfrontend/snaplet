"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const nav = [
  { id: 1, title: "Home", path: "/" },
  {
    id: 2,
    title: "Categories",
    path: "/category",
    categories: [
      "Electronics",
      "Clothing",
      "Accessories",
      "Beauty",
      "Home",
      "Games",
      "Household",
      "Sports",
    ],
  },
  { id: 3, title: "Cart", path: "/cart" },
  { id: 4, title: "About", path: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [showCategories, setShowCategories] = useState(false);

  const navItemClasses =
    "px-3 py-1 transition-colors inline-flex items-center hover:text-gray-300";

  return (
    <nav className="fixed top-0 left-0 right-0 bg-neutral-900 text-white z-10 p-3 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href={"/"}>
          <Image
            src={"/icons/icon.png"}
            alt="logo"
            width={40}
            height={40}
            className="rounded shadow"
          />
        </Link>

        <div className="flex space-x-4 relative">
          {nav.map(({ id, title, path, categories }) => (
            <div key={id} className="relative">
              {categories ? (
                <button
                  onClick={() => setShowCategories((prev) => !prev)}
                  className={`${navItemClasses} appearance-none bg-transparent ${
                    pathname === path ? "border-b-2 border-white" : ""
                  }`}
                >
                  {title}
                </button>
              ) : (
                <Link
                  href={path}
                  className={`${navItemClasses} ${
                    pathname === path ? "border-b-2 border-white" : ""
                  }`}
                >
                  {title}
                </Link>
              )}

              {categories && (
                <AnimatePresence>
                  {showCategories && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-2 w-40 bg-neutral-800 border border-neutral-700 rounded shadow-lg z-20"
                    >
                      {categories.map((category, index) => (
                        <li
                          key={index}
                          className="px-4 py-2 hover:bg-neutral-700 transition-colors"
                        >
                          <Link href={`/category/${category}`}>{category}</Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
