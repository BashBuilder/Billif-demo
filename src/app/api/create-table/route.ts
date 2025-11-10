import { supabase } from "@/lib/supabaseClient";
import { NextResponse } from "next/server";

export async function POST() {
  const { error, data } = await supabase.rpc("exec_sql", {
    sql: `
      create table if not exists public.blogs (
        id bigserial primary key,
        title text not null,
        excerpt text,
        status text,
        imageUrl text,
        author text,
        author_id uuid references auth.users (id) on delete cascade,
        created_at timestamptz default now(),
        updated_at timestamptz default now()
      );
    `,
  });

  if (error) return NextResponse.json({ error });
  return NextResponse.json({ message: "Table created successfully", data });
}
