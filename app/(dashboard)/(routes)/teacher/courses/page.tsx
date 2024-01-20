import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CoursePage() {
  return (
    <div>
      <Link href="/teacher/create">
        <Button>New Course</Button>
      </Link>
    </div>
  );
}
