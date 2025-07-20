import { createClient } from "@/utils/supabase/client";
import { Button } from "./ui/button";

export default function LoninWithGoogle() {
  const handleGoogleLogin = async () => {
    const supabase = createClient();
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
        queryParams: {
          prompt: "select_account",
        },
      },
    });
    if (data) {
    }
    if (error) {
    }
  };

  return <Button onClick={handleGoogleLogin}>Login with Google</Button>;
}
