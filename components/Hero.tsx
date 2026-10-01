"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

export default function Hero() {
  const roleRef = useRef<HTMLSpanElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);

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
      gsap.to(orbRef.current, { y: -14, duration: 2.4, ease: "sine.inOut", yoyo: true, repeat: -1 });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="top" className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-36 md:grid-cols-[1.2fr_1fr]">
      <div>
        <h1 className="mb-5 text-4xl font-bold leading-tight md:text-5xl">
          Hello, I am
          <br />
          <span ref={roleRef} className="text-primary" aria-label={site.role} />
        </h1>
        <p className="mb-7 max-w-[62ch] text-lg">{site.intro}</p>
        <div className="flex flex-wrap gap-3">
          <Button asChild><a href="#contact">Hire Me</a></Button>
          <Button asChild variant="outline"><a href={site.cvUrl} download>Download CV</a></Button>
        </div>
      </div>
      {/* Replace with <Image src="/hero.png" .../> */}
      <div ref={orbRef} className="mx-auto grid aspect-square w-[min(380px,80vw)] place-items-center rounded-full bg-[#121014]">
        <span className="text-8xl" aria-hidden>🚀</span>
      </div>
    </section>
  );
}
