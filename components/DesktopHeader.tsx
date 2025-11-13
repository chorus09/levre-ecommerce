"use client";

import { PlaceholderRed } from "./PlaceholderRed";

export function DesktopHeader() {
  return (
    <header className="
      hidden 
      md:flex 
      items-center 
      justify-between 
      h-[100px] 
      px-18 
      bg-(--color-background)
      font-medium
    ">
      {/* Left side */}
      <div className="flex items-center space-x-20">

        {/* Hamburger */}
        <PlaceholderRed className="w-6 h-6" />

        {/* Back link */}
        <button className="text-sm text-(--color-text-gray)">
           Back
        </button>
      </div>

      {/* Center logo */}
      <PlaceholderRed className="w-32 h-8" />

      {/* Right side */}
      <div className="flex items-center space-x-20 text-sm text-(--color-text-dark)">
        <button className="hover:text-(--color-text-black)">
          Cart (2)
        </button>

        <button className="hover:text-(--color-text-black)">
          En
        </button>
      </div>
    </header>
  );
}
