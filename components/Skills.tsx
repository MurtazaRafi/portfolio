"use client";
import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import {
  SiCss,
  SiDotnet,
  SiMysql,
  SiHtml5,
  SiJavascript,
  SiVuedotjs,
  SiPython,
  SiPostgresql,
  SiReact,
  SiSupabase,
  SiBootstrap,
  SiTypescript,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

const skills: { name: string; Icon: IconType }[] = [
  { name: "React", Icon: SiReact }, { name: "Python", Icon: SiPython },
  { name: "JavaScript", Icon: SiJavascript }, { name: "TypeScript", Icon: SiTypescript },
  { name: "HTML5", Icon: SiHtml5 }, { name: "CSS", Icon: SiCss },
  { name: "Bootstrap", Icon: SiBootstrap }, { name: "RESTful APIs", Icon: TbApi },
  { name: "PostgreSQL", Icon: SiPostgresql }, { name: "Supabase", Icon: SiSupabase },
  { name: "MySQL", Icon: SiMysql }, { name: ".NET", Icon: SiDotnet },
  { name: "Vue.js", Icon: SiVuedotjs },
];

function Row({ items, reverse = false }: { items: typeof skills; reverse?: boolean }) {
  const loop = [...items, ...items];
  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex w-max gap-8 pb-8"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: 30, ease: "linear", repeat: Infinity }}
      >
        {loop.map(({ name, Icon }, i) => (
          <div key={i} title={name} className="grid h-20 w-20 shrink-0 place-items-center rounded-2xl bg-muted text-primary">
            <Icon size={38} aria-label={name} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <h2 className="mb-10 text-center text-3xl font-bold">Skills</h2>
      <Row items={skills.slice(0, 8)} />
      <Row items={skills.slice(8)} reverse />
    </section>
  );
}
