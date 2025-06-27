"use client";
import { useSession } from "next-auth/react";

export default function Profile() {
  const { data: session } = useSession();

  return (
    <div>
      <h2>User: {session?.user?.email}</h2>
      <p>Access Token: {session?.accessToken}</p>
    </div>
  );
}
