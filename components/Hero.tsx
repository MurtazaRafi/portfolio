"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  const roleRef = useRef<HTMLSpanElement>(null);

   useEffect(() => {
    const el = roleRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = site.role;
      return;
    }
    const counter = { n: 0 };
    const ctx = gsap.context(() => {
      gsap.to(counter, {
        n: site.role.length, duration: 1.4, ease: "none", delay: 0.3,
        onUpdate: () => { el.textContent = site.role.slice(0, Math.round(counter.n)); },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="top" className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-36 md:grid-cols-[1.2fr_1fr]">
      <div>
        <h1 className="mb-5 text-4xl font-bold leading-tight md:text-5xl">
          Hello, I am
          <br />
          <span className="sr-only">{site.role}</span>
          <span aria-hidden>
            <TypeAnimation
              sequence={["Murtaza Rafi", 1500, "Fullstack Developer", 1500, "AI/ML Engineer", 1500]}
              wrapper="span"
              speed={50}
              deletionSpeed={60}
              repeat={Infinity}
              cursor
              className="text-primary"
            />
          </span>
        </h1>
        <p className="text-primary-light md:mr-10 dark:text-primary-dark sm:text-lg mb-4 md:mb-6 lg:text-xl">
        {site.intro}
        </p>
        <div className="flex flex-wrap gap-3">
          <Button asChild><a href="#contact">Hire Me</a></Button>
          <Button asChild variant="outline"><a href={site.cvUrl} download>Download CV</a></Button>
        </div>
      </div>
      {/* Replace with  */}
      <div  className="mx-auto relative grid aspect-square w-[min(380px,80vw)] place-items-center overflow-hidden rounded-full bg-[#121014]">
        <Image src="/murtaza.png" alt="Hero image" fill sizes="(min-width: 1024px) 480px, (min-width: 768px) 45vw, 100vw" className="object-cover" />
      </div>
    </section>
  );
}
