"use client";

import { useState, type CSSProperties, type ImgHTMLAttributes } from "react";
import { Skeleton } from "antd";

interface ImageWithSkeletonProps extends ImgHTMLAttributes<HTMLImageElement> {
  skeletonStyle?: CSSProperties;   // Extra style merged onto the skeleton placeholder. 
}

/**
 * Drop-in replacement for <img> that shows an antd Skeleton.Image placeholder
 * until the real image has loaded (or failed to load), since images can
 * sometimes take a moment to show up. Render inside a `relative`-positioned
 * wrapper so the skeleton can overlay it correctly.
 */
export default function ImageWithSkeleton({
  className = "",
  skeletonStyle,
  onLoad,
  onError,
  alt,
  ...props
}: ImageWithSkeletonProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && (
        <Skeleton.Image
          active
          className="!absolute !inset-0 !z-10"
          style={{ width: "100%", height: "100%", ...skeletonStyle }}
        />
      )}
      <img
        {...props}
        alt={alt}
        onLoad={(e) => {
          setLoaded(true);
          onLoad?.(e);
        }}
        onError={(e) => {
          setLoaded(true);
          onError?.(e);
        }}
        className={`${className} ${loaded ? "opacity-100" : "opacity-0"} transition-opacity duration-500 ease-out`}
      />
    </>
  );
}