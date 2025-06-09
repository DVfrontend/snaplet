"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, [router]);
  return (
    <>
      <div className="flex justify-center items-center">
        <Image src={"/error404.png"} alt="Error 404" width={500} height={500} />
      </div>
      <h1 className="text-3xl font-bold">Error 404</h1>
      <h2 className="text-2xl font-bold">Page not found</h2>
      <h3 className="text-xl font-bold">
        You will be automatically redirected to the home page in 5 seconds
      </h3>
    </>
  );
}
