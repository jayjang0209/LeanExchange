import React from "react";
import Logo from "./logo";
import { UserButton } from "@clerk/nextjs";
import { Menu } from "lucide-react";

interface NavbarProps {
  toggleSidebar: () => void;
}

export default function Navbar({ toggleSidebar }: NavbarProps) {
  return (
    <nav className="sticky top-0 h-20 z-50 flex items-center justify-between px-4 bg-white shadow-md">
      <div className="hidden sm:flex p-3 my-3 mb-5">
        <Logo />
      </div>

      {/* Mobile menu button */}
      <div className="sm:hidden flex items-center">
        <button
          className="outline-none mobile-menu-button"
          onClick={toggleSidebar}
        >
          <Menu className="w-8 h-8 text-gray-500 hover:text-pink-500 dark:text-slate-100" />
        </button>
      </div>

      <div className="hidden sm:flex">SearchBar</div>

      <div>
        <UserButton />
      </div>
    </nav>
  );
}
