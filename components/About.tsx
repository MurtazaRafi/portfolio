"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="text-foreground">
      <div className="mx-auto flex w-full max-w-[1450px] flex-col items-center gap-10 px-8 py-20 sm:px-10 md:flex-row md:gap-12 md:px-16 lg:gap-24 lg:px-12">
        {/* Left half: picture centered, so it sits under the Hero text block */}
        <div className="flex w-full justify-center md:w-1/2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square w-[70vw] max-w-[460px] overflow-hidden rounded-[2rem] bg-gradient-to-br from-muted to-primary/40 shadow-2xl shadow-primary/30 md:w-[300px] lg:w-[360px] xl:w-[420px]"
          >
            <Image
              src="/about.jfif"
              alt="About image"
              fill
              sizes="(min-width: 1280px) 420px, (min-width: 768px) 300px, 70vw"
              className="object-cover"
            />
          </motion.div>
        </div>
        {/* Right half: text block centered, so it sits under the Hero photo */}
        <div className="flex w-full md:w-1/2 md:justify-center">
          <div className="w-full min-w-0 max-w-[560px]">
            <h2 className="mb-5 text-center text-3xl font-extrabold sm:text-4xl">
              About Me
            </h2>
            <p className="text-foreground text-center md:text-justify lg:text-lg">
              I care about building technology that's{" "}
              <span className="font-semibold text-[#bb86fc]">
                reliable and genuinely useful.
              </span>{" "}
              My journey started in{" "}
              <span className="font-semibold text-[#bb86fc]">engineering</span>{" "}
              — a Bachelor's and Master's from KTH — where I learned to think
              analytically and solve problems methodically.
              <br />
              That led me into software development, where I found my place as a{" "}
              <span className="font-semibold text-[#bb86fc]">
                Fullstack Developer,
              </span>{" "}
              building business-critical application — owning systems end-to-end
              and working with the whole development life cycle.
              <br />
              Now I'm expanding into{" "}
              <span className="font-semibold text-[#bb86fc]">
                AI and Machine Learning,
              </span>{" "}
              because I believe software should be smarter, not just faster —
              and I want to combine solid engineering with applied AI to build
              features that actually bring value to people.
              <br />
              I'm driven by{" "}
              <span className="font-semibold text-[#bb86fc]">
                curiosity, continuous learning and problem-solving,
              </span>{" "}
              bringing the same focus to a software development and AI/ML
              Engineering role.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// TODO ta bort route för api:et och ha allt i front end, för statisk sida
