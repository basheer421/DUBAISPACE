"use client";

import React from "react";
import NextImage, { ImageProps as NextImageProps } from "next/image";

interface ImageProps extends Omit<NextImageProps, "onError" | "onLoad"> {
  fallbackSrc?: string;
}

export default function Image({
  src,
  alt,
  fallbackSrc = "/images/space-bg.jpg",
  className = "",
  ...props
}: ImageProps) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [imgSrc, setImgSrc] = React.useState(src);

  React.useEffect(() => {
    setImgSrc(src);
    setError(false);
    setIsLoading(true);
  }, [src]);

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-space-dark/50 backdrop-blur-sm">
          <div className="w-8 h-8 border-t-2 border-dubai-gold rounded-full animate-spin"></div>
        </div>
      )}
      <NextImage
        {...props}
        src={error ? fallbackSrc : imgSrc}
        alt={alt}
        className={className}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setError(true);
          setIsLoading(false);
        }}
      />
    </div>
  );
}
