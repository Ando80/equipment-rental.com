"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PropsWithChildren } from "react";
import { signInAction, singOutAction } from "./auth.action";
import { Home, LogOut, Square } from "lucide-react";
import Link from "next/link";

export type LoggedInDropdownProps = PropsWithChildren;

export const LoggedInDropdown = (props: LoggedInDropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{props.children}</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem asChild>
          <Link href="/dashboard" className="w-full">
            <Home size={16} className="mr-2" />
            Home
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/locations" className="w-full">
            <Square size={16} className="mr-2" />
            Locations
          </Link>
        </DropdownMenuItem>
        <Link href="/">
          <DropdownMenuItem
            onClick={() => {
              singOutAction();
            }}
          >
            <LogOut size={16} className="mr-2" />
            Logout
          </DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
