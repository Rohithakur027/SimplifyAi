"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

function page() {
  return (
    <div>
      <button onClick={() => signIn("google")}>Connect gmail</button>
    </div>
  );
}

export default page;
