"use client";

import { useEffect, useRef } from "react";
import { Shapes } from "./Shapes";
import Bounded from "../Bounded";
import gsap from "gsap";


const Hero: React.FC = () => {
  const component = useRef<HTMLDivElement>(null);

  // Define the name here
  const firstName: string = "Aayan";
  const lastName: string = "Khan";

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline()
        .fromTo(
          ".name-animation",
          { x: -100, opacity: 0, rotate: -10 },
          {
            x: 0,
            opacity: 1,
            rotate: 0,
            ease: "elastic.out(1,0.3)",
            duration: 1,
            transformOrigin: "left top",
            stagger: { each: 0.1, from: "random" },
          }
        )
        .fromTo(
          ".job-title",
          {
            y: 20,
            opacity: 0,
            scale: 1.2,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scale: 1,
            ease: "elastic.out(1,0.3)",
          }
        );
    }, component);
    return () => ctx.revert(); 
  }, []);


  const renderLetters = (name: string, keyPrefix: string) => {
    return name.split("").map((letter, index) => (
      <span
        key={`${keyPrefix}-${index}`}
        className={`name-animation name-animation-${keyPrefix}-${index} inline-block opacity-0`}
      >
        {letter}
      </span>
    ));
  };

  return (
    <Bounded ref={component}>
      <div className="grid grid-cols-1 items-center md:grid-cols-2">
        <Shapes />
        <div className="col-start-1 md:row-start-1 " data-speed=".2">
          <h1
            className="mb-8 text-[clamp(3rem,20vmin,20rem)] font-extrabold leading-none tracking-tighter"
            aria-label={`${firstName} ${lastName}`}
          >
            <span className="block text-slate-900 ">
              {renderLetters(firstName, "first")}
            </span>
            <span className="-mt-[.2em] block text-slate-600 ">
              {renderLetters(lastName, "last")}
            </span>
          </h1>
          <span className="job-title block bg-gradient-to-tr from-blue-900 via-blue-500 to-blue-800 bg-clip-text text-2xl font-bold uppercase tracking-[.2em] text-transparent opacity-0 md:text-4xl">
            Web Developer
          </span>
        </div>
      </div>
    </Bounded>
  );
};

export default Hero;
