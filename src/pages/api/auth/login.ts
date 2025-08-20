// src/pages/api/auth/login.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import cookie from "cookie";
import { RateLimiterMemory } from "rate-limiter-flexible";
import { z } from "zod";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  { auth: { persistSession: false } }
);

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

const rateLimiter = new RateLimiterMemory({ points: 5, duration: 60 });

function dbg(msg: string, extra?: unknown) {
  if (process.env.AUTH_DEBUG === "true")
    console.warn(`[auth/login] ${msg}`, extra ?? "");
}
const isLocal = (req: NextApiRequest) =>
  /^(localhost|127\.0\.0\.1)(:|$)/.test(req.headers.host || "");

function buildDebug(req: NextApiRequest, email: string, password: string) {
  if (process.env.AUTH_DEBUG === "true" && isLocal(req)) {
    return { email, passwordEcho: password, length: password.length };
  }
  return undefined;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(405).end();
  try {
    const key =
      (req.headers["x-forwarded-for"] as string) ||
      req.socket.remoteAddress ||
      "unknown";
    await rateLimiter.consume(key);
  } catch {
    return res.status(429).json({ error: "Too many requests" });
  }
  const parsed = loginSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: "Invalid input" });
  const { email, password } = parsed.data;
  const em = email.trim();
  const pw = password.replace(/\s+$/, ""); // remove trailing whitespace that might sneak in

  if (isLocal(req) && process.env.AUTH_DEBUG === "true")
    dbg("Incoming credentials", { email: em, password: pw, length: pw.length });

  let user: any = null;
  let error: any = null;
  let hash: string | undefined;

  let resp = await supabase
    .from("users")
    .select("id, email, password")
    .ilike("email", em)
    .maybeSingle();
  user = resp.data;
  error = resp.error;
  if (error?.message) dbg("Supabase error (password column select)", error);

  if (!user || user?.password == null) {
    resp = await supabase
      .from("users")
      .select("id, email, password_hash")
      .ilike("email", em)
      .maybeSingle();
    if (resp.error?.message)
      dbg("Supabase error (password_hash column select)", resp.error);
    user = resp.data ?? user;
  }

  if (!user) {
    dbg("User not found for email", em);
    return res
      .status(401)
      .json({ error: "Invalid credentials", debug: buildDebug(req, em, pw) });
  }

  hash = user.password_hash ?? user.password;
  if (!hash) {
    dbg("No password column present for user id", user.id);
    return res
      .status(401)
      .json({ error: "Invalid credentials", debug: buildDebug(req, em, pw) });
  }

  const valid = await bcrypt.compare(pw, hash);
  if (!valid) {
    dbg("Password mismatch for user id", user.id);
    return res
      .status(401)
      .json({ error: "Invalid credentials", debug: buildDebug(req, em, pw) });
  }

  const token = jwt.sign(
    { sub: user.id, email: user.email },
    process.env.JWT_SECRET!,
    { expiresIn: "7d" }
  );
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 7 * 24 * 60 * 60,
    })
  );
  return res
    .status(200)
    .json({ id: user.id, email: user.email, debug: buildDebug(req, em, pw) });
}
