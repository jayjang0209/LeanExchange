"use client"

import React from 'react'
import { LucideIcon } from "lucide-react"
import { usePathname, useRouter } from 'next/navigation'
import { cn } from "@/lib/utils"

interface SidebarItemProps {
    path: string;
    name: string;
    icon: LucideIcon;
}

export default function SideBarItem(
    { path, name, icon: Icon }: SidebarItemProps
) {
    const currentPath = usePathname();
    const router = useRouter();

    const isActive =
    (currentPath === "/" && path === "/") ||
    currentPath === path ||
    currentPath?.startsWith(`${path}/`)

    const onClick = () => {
        router.push(path)
    }

  return (
    <button onClick={onClick} className={cn(
        "flex items-center justify-start px-4 py-1 text-sm font-bold text-slate-500 rounded-lg mx-3",
        isActive ? "bg-pink-50 text-pink-500" : "text-slate-500 hover:bg-pink-50 hover:text-pink-500"
    )}>
        <div className='flex items-center gap-x-2 py-3'>
            <Icon 
                size={22}
                className={cn(
                    "text-gray-400",
                    isActive ? "text-gray-500" : ""
                )}
            />
            {name}
        </div>
    </button>

  )
}
