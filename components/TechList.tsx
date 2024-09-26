"use client";

import React, { useLayoutEffect, useRef } from "react";
import { Circle } from 'lucide-react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";

gsap.registerPlugin(ScrollTrigger);

export type TechItem = {
  tech_color?: string;
  tech_name: string;
};

export type TechListProps = {
  title: string;
  techItems: TechItem[];
};

const TechList = ({ title, techItems }: TechListProps): JSX.Element => {
  const component = useRef<HTMLDivElement>(null);

useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // create as many GSAP animations and/or ScrollTriggers here as you want...
      const tl = gsap.timeline({
        scrollTrigger: {
          pin: true, // pin the trigger element while active
          start: "top bottom",
          end: "bottom top",
          scrub: 4,
        },
      });

      tl.fromTo(
        ".tech-row",
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(600, 400)
              : gsap.utils.random(-600, -400);
          },
        },
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(-600, -400)
              : gsap.utils.random(600, 400);
          },
          ease: "power1.inOut",
        },
      );
    }, component);
    return () => ctx.revert(); // cleanup!
  }, []);


  return (
    <section className="wrapper overflow-hidden" ref={component}>
      <Bounded as="div" className="">
        <Heading size="xl" className="mb-8" as="h2">
          {title}
        </Heading>
      </Bounded>

      {techItems.map(({ tech_color, tech_name }, index) => (
        <div
          key={index}
          className="tech-row mb-8 flex items-center justify-center gap-4 text-slate-400"
          aria-label={tech_name || ""}
        >
          {Array.from({ length: 15 }, (_, i) => (
            <React.Fragment key={i}>
              <span
                className="tech-item text-6xl md:text-8xl font-extrabold uppercase tracking-tighter"
                style={{ color: i === 7 && tech_color ? tech_color : "inherit" }}
              >
                {tech_name}
              </span>
              <span className="text-3xl">
                <Circle />
              </span>
            </React.Fragment>
          ))}
        </div>
      ))}
    </section>
  );
};

export default TechList;
