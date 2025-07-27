"use client";
import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/client";

export default function AccountForm() {
  const handleEnrollment = async () => {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("enrollments")
      .insert([
        {
          course_id: "34de61b8-7377-436f-b284-f63e81995776",
          user_id: "34de61b8-7377-436f-b284-f63e81995776",
        },
      ])
      .select();
  };
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <Button onClick={handleEnrollment}>Enroll Course</Button>
    </div>
  );
}
