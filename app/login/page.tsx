"use client";
import { Button } from "@/components/ui/button";
import LoninWithGoogle from "@/components/login-with-google";
export default function LoginPage() {
  return <Button onClick={LoninWithGoogle}>Login with Google</Button>;
}
