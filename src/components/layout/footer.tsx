'use client'

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

type SocialLink = {
  id: number;
  href: string;
  icon: string;
  name: string;
};

const Footer: React.FC = () => {
  const [data, setData] = useState<SocialLink[]>([]);

  useEffect(() => {
    fetch('/data/socialMedia.json')
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error(err));
  }, []);

  return (
    <footer className="bg-neutral-900 text-white py-4 bg-black">
      <div className="flex justify-center gap-4 mb-4">
        {data.map(({ id, href, icon, name }) => (
          <Link
            key={id}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={icon} alt={name} width={25} height={25} />
          </Link>
        ))}
      </div>
      <div className="text-center text-sm">
        <p>
          &copy;{new Date().getDate()}/{new Date().getMonth() + 1}/
          {new Date().getFullYear()} DV product.
        </p>
        <a
    href="https://frontendbydaniel.vercel.app/"
    target="_blank">
    Click to Visit my Web-Site
  </a>
      </div>
    </footer>
  );
};

export default Footer;
