"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import clsx from "clsx";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";
import { StaticImageData } from "next/image";

export default function Avatar({
  image,
  className,
}: {
  image: StaticImageData | string;
  className?: string;
}) {
  const component = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    // GSAP context for animations
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".avatar",
        {
          opacity: 0,
          scale: 1.4,
        },
        {
          scale: 1,
          opacity: 1,
          duration: prefersReducedMotion ? 0 : 1.3,
          ease: "power3.inOut",
        }
      );
    }, component);

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      if (!component.current) return;
      const componentRect = component.current.getBoundingClientRect();
      const componentCenterX = componentRect.left + componentRect.width / 2;

      const componentPercent = {
        x: (e.clientX - componentCenterX) / componentRect.width / 2,
      };

      const distFromCenterX = 1 - Math.abs(componentPercent.x);

      gsap
        .timeline({
          defaults: { duration: 0.5, overwrite: "auto", ease: "power3.out" },
        })
        .to(
          ".avatar",
          {
            rotation: gsap.utils.clamp(-2, 2, 5 * componentPercent.x),
            duration: 0.5,
          },
          0
        )
        .to(
          ".highlight",
          {
            opacity: distFromCenterX - 0.7,
            x: -10 + 20 * componentPercent.x,
            duration: 0.5,
          },
          0
        );
    };

    // Add mousemove event listener
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      ctx.revert(); // Cleanup GSAP context
    };
  }, [prefersReducedMotion]);

  return (
    <div ref={component} className={clsx("relative h-full w-full", className)}>
      <div
        className="avatar aspect-square overflow-hidden rounded-3xl border-2 border-slate-700 opacity-0"
        style={{ perspective: "500px", perspectiveOrigin: "150% 150%" }}
      >
        <Image
          src={image}
          className="avatar-image h-full w-full object-fill"
          alt="Avatar"
          layout="fill"
        />
        <div className="highlight absolute inset-0 hidden w-full scale-110 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0 md:block"></div>
      </div>
    </div>
  );
}
