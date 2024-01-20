"use client";

import React from "react";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavbarRoutes() {
  const pathname = usePathname();
  const isTeacherPage = pathname?.startsWith("/teacher");
  const isCoursePage = pathname?.startsWith("/course");
  const isSearchPage = pathname === "/search";

  return (
    <div className="flex gap-x-2 ml-auth">
      {isTeacherPage ? (
        <Link href="/">
        <Button variant="ghost">
          <LogOut className="h-4 w-4 mr-2" /> Exit
        </Button>
        </Link>
      ) : (
        <Link href="/teacher/courses">
          <Button size="sm" variant="ghost">
            Teacher Mode
          </Button>
        </Link>
      )}
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
