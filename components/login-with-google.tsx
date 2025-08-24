import { createClient } from "@/utils/supabase/client";
import { Button } from "./ui/button";
import { FcGoogle } from "react-icons/fc";

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

  return (
    <Button
      onClick={handleGoogleLogin}
      className="flex font-semibold cursor-pointer"
    >
      <FcGoogle /> အကောင့်ဝင်မည်
    </Button>
  );
}
