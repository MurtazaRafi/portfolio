import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

// RESTful endpoint: POST /api/contact  { name, email, message }
export async function POST(req: Request) {
  const { name, email, message } = await req.json().catch(() => ({}));
  if (!name || !email || !message) {
    return NextResponse.json({ error: "name, email and message are required" }, { status: 400 });
  }
  const { error } = await supabase.from("messages").insert({ name, email, message });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true }, { status: 201 });
}
