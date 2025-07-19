import { createClient } from "@/utils/supabase/server";

export default async function AccountForm() {
  const supabase = await createClient();
  return (
    <div>
      <h1>Admin Dashboard</h1>
    </div>
  );
}
