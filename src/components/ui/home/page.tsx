import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SignInButton } from "@/features/auth/SignInButton";
import { Button } from "@/components/ui/button";

export const HomePage = () => {
  return (
    <div className="relative">
      <div className="fixed left-0 top-0 h-screen w-screen">
        <Image src="/BackgraoundMain.png" alt="page-bg" fill />
      </div>
      <div className="flex h-screen flex-col items-center justify-center text-center">
        <Image
          src="/ProTender.png"
          alt="Picture MyBuyer Logo"
          width={152}
          height={45}
          className="mb-5"
        />
        <SignInButton />
      </div>
    </div>
  );
};
