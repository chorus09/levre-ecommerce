"use client";

import { useMobileMenu } from "@/lib/useMobileMenu";
import { PlaceholderRed } from "../PlaceholderRed";

export function MobileHeader() {
  const open = useMobileMenu((state) => state.open);

  return (
    <header className="w-full flex items-center justify-between h-16 px-4 bg-background border-b border-gray-200">
      
      {/* Hamburger button */}
      <button
        onClick={open}
        className="flex flex-col space-y-1"
      >
        <span className="w-6 h-0.5 bg-(--color-text-black)" />
        <span className="w-6 h-0.5 bg-(--color-text-black)" />
        <span className="w-6 h-0.5 bg-(--color-text-black)" />
      </button>

      {/* Logo placeholder */}
      <PlaceholderRed className="w-24 h-6" />

      {/* Right side empty for now */}
      <div className="w-6 h-6" />
    </header>
  );
}
