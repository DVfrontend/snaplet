"use client";

import data from "@/data/socialMedia.json";
import { useEffect, useState } from "react";
import Link from "next/link";

type Socials = {
  name: string;
  id: number;
  url: string;
  logo?: string;
};

function SocialMedia() {
  const [socials, setSocials] = useState<Socials[]>([]);

  useEffect(() => {
    setSocials(data);
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold">Связаться со мной</h1>
      <ul className="list-disc">
        {socials.map((social) => (
          <li key={social.id}>
            <Link href={social.url}>
              {social.logo}
              <b>{social.name}</b>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialMedia;
