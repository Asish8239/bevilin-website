"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Loader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-[9999]">
        <Image
          src="/images/logo/logo.png"
          alt="Bevilin"
          width={110}
          height={110}
          priority
          className="animate-pulse"
        />
        <p className="mt-4 text-gray-600 text-sm">
          Loading Healthcare Experience...
        </p>
      </div>
    );
  }

  return children;
}