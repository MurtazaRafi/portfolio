"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const links = ["About", "Projects", "Contact"];

export default function Navbar() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const isDark = saved ? saved === "dark" : true;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex items-center justify-between bg-background/85 px-6 py-4 pt-7 backdrop-blur">
      <a href="#top" aria-label="Home" className="text-3xl font-medium tracking-tighter text-primary">
        &lt;/&gt;
      </a>
      <div className="flex gap-6 text-2xl font-normal text-muted-foreground">
        {links.map((l) => (
          <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-foreground">
            {l}
          </a>
        ))}
      </div>
      <Button variant="outline" size="default" onClick={toggle}>
        {dark ? "Light" : "Dark"}
      </Button>
    </nav>
  );
}
