"use client";

import { PlaceholderRed } from "./PlaceholderRed";

export function Footer() {
  return (
    <footer className="w-full border-t border-[#e3e3e3] bg-(--color-background) mt-20 py-10 px-28">

      {/* Mobile */}
      <div className="flex flex-col items-center md:hidden space-y-6">
        <div className="text-xs text-(--color-text-dark) flex flex-col items-center space-y-1">
          <span>CONTACT</span>
          <span>MEDIA</span>
          <span>LEGAL</span>
          <span>COOKIES</span>
        </div>

        <div className="flex space-x-6">
          <PlaceholderRed className="w-5 h-5" />
          <PlaceholderRed className="w-5 h-5" />
          <PlaceholderRed className="w-5 h-5" />
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:flex items-center justify-between text-sm px-10 font-medium">
        <button>En</button>

        <div className="flex space-x-1 text-(--color-text-dark)">
          <span>CONTACT</span>
          <span>/</span>
          <span>MEDIA</span>
          <span>/</span>
          <span>LEGAL</span>
          <span>/</span>
          <span>COOKIES</span>
        </div>

        <div className="flex space-x-6">
          <PlaceholderRed className="w-5 h-5" />
          <PlaceholderRed className="w-5 h-5" />
          <PlaceholderRed className="w-5 h-5" />
        </div>
      </div>

    </footer>
  );
}
