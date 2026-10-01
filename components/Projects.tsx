import Image from "next/image";
import { projects } from "@/data/site";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="mb-12 text-center text-3xl font-bold">My projects</h2>
      <div className="space-y-20">
        {projects.map((p) => (
          <article key={p.title} className="grid items-center gap-10 md:grid-cols-2">
            <div className="relative grid aspect-[16/10] place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-[#dccdea] to-[#b79ee0] text-2xl font-bold text-[#2a1c45]">
              {p.image ? <Image src={p.image} alt={p.title} fill className="object-cover" /> : "Project image"}
            </div>
            <div>
              <h3 className="mb-4 text-3xl font-bold leading-tight">{p.title}</h3>
              <p className="mb-3 text-muted-foreground">
                Role: <b className="text-primary">{p.role}</b>
              </p>
              <p className="mb-4 text-sm text-muted-foreground">{p.description}</p>
              <ul className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li key={t} className="rounded-full bg-muted px-3.5 py-0.5 text-[13px] text-primary">{t}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
