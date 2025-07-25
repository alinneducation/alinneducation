"use client";
import { type User } from "@supabase/supabase-js";
import Image from "next/image";
import { Button } from "./ui/button";

// ...

export default function AccountForm({ user }: { user: User | null }) {
  return (
    <div className="form-widget">
      <Image
        src={user?.user_metadata.avatar_url}
        alt=""
        width={40}
        height={40}
        className="rounded-full"
      />
      <div>
        <p>{user?.user_metadata.full_name}</p>
      </div>
      <div>
        <p>{user?.email}</p>
      </div>
      <div></div>
      {user?.aud ? (
        <form action="/auth/signout" method="post">
          <Button className="button block" type="submit">
            Sign out
          </Button>
        </form>
      ) : (
        <Button className="button block" type="submit">
          Login With Google
        </Button>
      )}
    </div>
  );
}
