import React from 'react'
import Logo from './logo'
import SidebarRoutes from './sidebar-routes'

export default function Sidebar() {
  return (
    <div className='w-[16rem] h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm pt-3'>
        <div className='flex flex-col w-full'>
            <SidebarRoutes />
        </div>
    </div>
  )
}
