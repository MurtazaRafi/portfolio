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
        n: site.role.length,
        duration: 1.4,
        ease: "none",
        delay: 0.3,
        onUpdate: () => {
          el.textContent = site.role.slice(0, Math.round(counter.n));
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    // <section id="top" className="mx-auto grid max-w-[1400px] items-center gap-10 px-8 pb-20 pt-32 sm:px-10 md:grid-cols-[1.4fr_1fr] md:pt-36 lg:gap-20 lg:px-12
    //          min-[1800px]:max-w-[1700px] min-[2200px]:max-w-[2000px]">
    //   <div>
    //     <h1 className="mb-5 text-4xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
    //       Hello, I am
    //       <br />
    //       <span className="sr-only">{site.role}</span>
    //       <span aria-hidden>
    //         <TypeAnimation
    //           sequence={["Murtaza Rafi", 1500, "Fullstack Developer", 1500, "AI/ML Engineer", 1500]}
    //           wrapper="span"
    //           speed={50}
    //           deletionSpeed={60}
    //           repeat={Infinity}
    //           cursor
    //           className="text-primary"
    //         />
    //       </span>
    //     </h1>
    //     <p className="mb-8 text-lg text-foreground md:text-xl lg:text-2xl">
    //     {site.intro}
    //     </p>
    //     <div className="flex flex-wrap gap-3">
    //       <Button size = "lg" asChild><a href="#contact">Hire Me</a></Button>
    //       <Button size = "lg" asChild variant="outline"><a href={site.cvUrl} download>Download CV</a></Button>
    //     </div>
    //   </div>
    //   {/* Replace with  */}
    //   <div  className="mx-auto relative aspect-square w-[min(480px,80vw)] place-items-center overflow-hidden rounded-full bg-[#121014] min-[1800px]:w-[640px]">
    //     <Image src="/murtaza.png" alt="Hero image" fill priority sizes="(min-width: 1024px) 480px, 80vw" className="object-cover" />
    //   </div>
    // </section>
    <section id="top">
      <div
        className="mx-auto flex w-full max-w-[1400px] flex-col items-center gap-10 px-8 pb-20 pt-32
                 sm:px-10 md:flex-row md:gap-12 md:px-16 md:pt-36 lg:gap-20 lg:px-12
                 min-[1800px]:max-w-[1675px] md:justify-center min-[2100px]:max-w-[1800px]"
      >
        {/* Text column: full width on mobile, takes 1.4 parts of the row from md up */}
        <div className="w-full min-w-0 md:flex-[1.2] flex flex-col items-center text-center md:items-start sm:text-left lg:max-w-[560px] xl:max-w-[600px] min-[1800px]:max-w-[700px]">
          <h1 className="mb-5 text-center text-4xl font-extrabold leading-tight sm:text-5xl md:text-left md:text-3xl lg:text-4xl xl:text-5xl min-[1800px]:text-6xl">
            Hello, I am
            <br />
            {/* <span className="sr-only text-transparent bg-clip-text bg-gradient-to-r from-[#d6b0ff] to-[#392563] dark:bg-gradient-to-r dark:from-primary-dark dark:to-[#bb86fc]">
              {site.role}
            </span> */}
            <span aria-hidden>
              <TypeAnimation
                sequence={[
                  "Murtaza Rafi",
                  1500,
                  "Fullstack Developer",
                  1500,
                  "AI/ML Engineer",
                  1500,
                ]}
                wrapper="span"
                speed={50}
                deletionSpeed={60}
                repeat={Infinity}
                cursor
                className="text-primary"
              />
            </span>
          </h1>
          <p className="mb-6 text-base text-foreground sm:text-md md:text-lg lg:text-xl min-[1800px]:text-xl">
            {site.intro}
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:justify-start">
            <Button asChild className="md:h-12 md:px-8 md:text-base">
              <a href="#contact">Hire Me</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="md:h-12 md:px-8 md:text-base"
            >
              <a href={site.cvUrl} download>
                Download CV
              </a>
            </Button>
          </div>
        </div>
        {/* Photo column: takes 1 part of the row from md up */}
        <div className="flex w-full justify-center md:flex-1">
          <div className="relative aspect-square w-[70vw] max-w-[560px] overflow-hidden rounded-full bg-[#121014] md:w-full min-[1500px]:max-w-[420px] min-[1800px]:max-w-[500px]">
            <Image
              src="/murtaza.png"
              alt="Hero image"
              fill
              priority
              sizes="(min-width: 1800px) 640px, (min-width: 1024px) 560px, 70vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
