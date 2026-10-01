"use client";
import { useState } from "react";
import { Alert, Snackbar, TextField } from "@mui/material";
import { Button } from "@/components/ui/button";

const fieldSx = {
  "& .MuiOutlinedInput-root": { borderRadius: "14px", background: "hsl(var(--muted))", color: "hsl(var(--foreground))" },
  "& .MuiOutlinedInput-notchedOutline": { borderColor: "transparent" },
  "& .Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "hsl(var(--primary)) !important" },
  "& label": { color: "hsl(var(--muted-foreground))" },
  "& label.Mui-focused": { color: "hsl(var(--primary))" },
};

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ ok: boolean; msg: string } | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      if (!res.ok) throw new Error();
      form.reset();
      setToast({ ok: true, msg: "Message sent" });
    } catch {
      setToast({ ok: false, msg: "Message not sent. Check your details and try again." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-xl px-6 py-20">
      <h2 className="mb-10 text-center text-3xl font-bold">Contact</h2>
      <form onSubmit={onSubmit} className="grid gap-4">
        <TextField name="name" label="Your name" required sx={fieldSx} />
        <TextField name="email" type="email" label="Your email" required sx={fieldSx} />
        <TextField name="message" label="How can I help?" multiline minRows={4} required sx={fieldSx} />
        <Button type="submit" disabled={loading}>{loading ? "Sending..." : "Send message"}</Button>
      </form>
      <Snackbar open={!!toast} autoHideDuration={4000} onClose={() => setToast(null)}>
        <Alert severity={toast?.ok ? "success" : "error"} variant="filled">{toast?.msg}</Alert>
      </Snackbar>
    </section>
  );
}
