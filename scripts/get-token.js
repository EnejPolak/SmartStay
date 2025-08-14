import { createClient } from "@supabase/supabase-js";
import "dotenv/config";
import readline from "readline";

function prompt(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) =>
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer);
    })
  );
}

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

(async () => {
  try {
    const email = await prompt("Enter your email: ");
    const password = await prompt("Enter your password: ");

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error("Login error:", error.message);
    } else {
      console.log("JWT token:", data.session.access_token);
    }
  } catch (err) {
    console.error("Unexpected error:", err);
  }
})();
