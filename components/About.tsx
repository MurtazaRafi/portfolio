"use client";
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { site } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid items-center gap-12 md:grid-cols-[1fr_1.2fr]">
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
          <h2 className="mb-6 text-3xl font-bold">About Me</h2>
          <div className="space-y-4">
            {site.about.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// TODO ta bort route för api:et och ha allt i front end, för statisk sida