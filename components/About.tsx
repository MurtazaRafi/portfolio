"use client";
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { site } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid items-start gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-square overflow-hidden rounded-[2rem] bg-gradient-to-br from-muted to-primary/40"
        >
          <Image
            src="/about.jfif"
            alt="Portrait of Murtaza"
            fill
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-cover"
          />
        </motion.div>

        <div>
          <h2 className="mb-6 text-center text-3xl font-bold">About Me</h2>
           <p className="text-primary-light dark:text-primary-dark text-center md:text-justify lg:text-lg">
            I care about building technology that's{" "}
            <span className="font-semibold text-[#bb86fc]">
              reliable and genuinely useful.
            </span>{" "}
            My journey started in{" "}
            <span className="font-semibold text-[#bb86fc]">engineering</span> —
            a Bachelor's and Master's from KTH — where I learned to think
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
            because I believe software should be smarter, not just faster — and
            I want to combine solid engineering with applied AI to build
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
    </section>
  );
}

// TODO ta bort route för api:et och ha allt i front end, för statisk sida