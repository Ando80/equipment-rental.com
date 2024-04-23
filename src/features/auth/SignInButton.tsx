"use client";

import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import { signInAction } from "./auth.action";

export const SignInButton = () => {
  return (
    <Button
      className="rounded border border-green-500 bg-transparent px-8 py-4 font-semibold text-green-700 hover:border-transparent hover:bg-green-500 hover:text-white"
      variant="secondary"
      size="lg"
      onClick={() => {
        signInAction();
      }}
    >
      <LogIn size={20} className="mr-2" />
      Sign In
    </Button>
  );
};
