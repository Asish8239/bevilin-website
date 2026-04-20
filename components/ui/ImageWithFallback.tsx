"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
};

export default function ImageWithFallback({
  src,
  alt,
  width,
  height,
  className,
}: Props) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={width || 500}
      height={height || 500}
      className={className}
      onError={() => setImgSrc("/fallback.png")}
    />
  );
}