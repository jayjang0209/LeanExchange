"use client"

import React from 'react'
import { Layout, Compass } from "lucide-react"
import SideBarItem from './sidebar-item'

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
]


export default function SidebarRoutes() {
  const routes = guestRoutes;

  
    return (
    <div className='flex flex-col w-full gap-y-2'>
    {
        routes.map((route, index) => (
            <SideBarItem
                key={index}
                path={route.path}
                name={route.name}
                icon={route.icon}
            />
        ))
    }

    </div>
  )
}
