import { createClient } from "@/utils/supabase/server";
import { type User } from "@supabase/supabase-js";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default async function AccountForm() {
  const supabase = await createClient();
  return (
    <div>
      <h1>Admin Dashboard</h1>
    </div>
  );
}
