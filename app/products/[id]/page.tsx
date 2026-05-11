"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ProductDetailPage() {
  const router = useRouter();

  useEffect(() => {
    router.push("/products");
  }, [router]);

  return null;
}
