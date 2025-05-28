import React from "react";
import Link from "next/link";
import Image from "next/image";

type SocialLink = {
  id: number;
  href: string;
  icon: string;
  name: string;
};

const links: SocialLink[] = [
  {
    id: 1,
    href: "mailto:daniel.vartanov81@gmail.com",
    icon: "/icons/gmail.png",
    name: "gmail",
  },
  {
    id: 2,
    href: "https://github.com/DVfrontend",
    icon: "/icons/github.png",
    name: "github",
  },
  {
    id: 3,
    href: "https://linkedin.com",
    icon: "/icons/linkedin.png",
    name: "linkedin",
  }, // no
  {
    id: 4,
    href: "https://t.me/TSXplorer",
    icon: "/icons/telegram.png",
    name: "telegram",
  },
  {
    id: 5,
    href: "https://wa.me/995568981657",
    icon: "/icons/whatsapp.png",
    name: "whatsapp",
  },
  {
    id: 6,
    href: "https://x.com/VartanovDaniel",
    icon: "/icons/twitter.png",
    name: "Twitter",
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white py-4 bg-black">
      <div className="flex justify-center gap-4 mb-4 ">
        {links.map(({ id, href, icon, name }) => (
          <Link
            key={id}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className=""
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
      </div>
    </footer>
  );
};

export default Footer;
