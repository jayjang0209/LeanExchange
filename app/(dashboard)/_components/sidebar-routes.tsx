"use client";

import React from "react";
import { Layout, Compass, List, BarChart } from "lucide-react";
import SideBarItem from "./sidebar-item";
import { usePathname } from "next/navigation";

const guestRoutes = [
  {
    path: "/",
    name: "Dashboard",
    icon: Layout,
  },
  {
    path: "/search",
    name: "Browse",
    icon: Compass,
  },
];

const teacherRoutes = [
  {
    path: "/teacher/courses",
    name: "Courses",
    icon: List,
  },
  {
    path: "/teacher/analytics",
    name: "Analytics",
    icon: BarChart,
  },
];

export default function SidebarRoutes() {
  const pathname = usePathname();
  const isTeacherPage = pathname?.includes("/teacher");
  const routes = isTeacherPage ? teacherRoutes : guestRoutes;

  return (
    <div className="flex flex-col w-full gap-y-2">
      {routes.map((route, index) => (
        <SideBarItem
          key={index}
          path={route.path}
          name={route.name}
          icon={route.icon}
        />
      ))}
    </div>
  );
}
