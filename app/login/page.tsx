"use client";
import { login, signup } from "@/app/login/action";
import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/client";
export default function LoginPage() {
  const handleGoogleLogin = async (provider: "google") => {
    const supabase = createClient();
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
  };
  return (
    <Button onClick={() => handleGoogleLogin("google")}>
      Login with Google
    </Button>
  );
}
