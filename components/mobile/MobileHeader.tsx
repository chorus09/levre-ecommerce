"use client";

import { useMobileMenu } from "@/lib/useMobileMenu";
import { PlaceholderRed } from "../PlaceholderRed";

export function MobileHeader() {
  const open = useMobileMenu((state) => state.open);

  return (
    <header className="
      md:hidden 
      flex 
      items-center 
      justify-between 
      h-[70px] 
      px-5 
      border-b 
      border-[#e3e3e3]
      bg-(--color-background)
    ">
      
      {/* Hamburger */}
      <button onClick={open}>
        <PlaceholderRed className="w-6 h-6" />
      </button>

      {/* Logo */}
      <PlaceholderRed className="w-24 h-6" />

      {/* Cart icon */}
      <PlaceholderRed className="w-6 h-6" />
    </header>
  );
}
