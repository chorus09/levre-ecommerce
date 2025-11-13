"use client";

import Link from "next/link";
import { PlaceholderRed } from "./PlaceholderRed";

export function Footer() {
  return (
    <footer className="w-full mt-20 py-10 bg-(--color-background) border-t border-zinc-200">
      {/* MOBILE */}
      <div className="flex flex-col items-center space-y-6 md:hidden">
        
        {/* Links */}
        <div className="text-sm text-(--color-text-dark) flex flex-col items-center space-y-1 leading-tight">
          <span>CONTACT</span>
          <span>MEDIA</span>
          <span>LEGAL</span>
          <span>COOKIES</span>
        </div>

        {/* Social icons */}
        <div className="flex space-x-6">
          <PlaceholderRed className="w-6 h-6" />
          <PlaceholderRed className="w-6 h-6" />
          <PlaceholderRed className="w-6 h-6" />
        </div>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:flex items-center justify-between text-sm text-(--color-text-dark)">
        
        {/* Language */}
        <button className="hover:text-(--color-text-black)">En▾</button>

        {/* Links */}
        <div className="flex space-x-6 tracking-wide">
          <span>CONTACT</span>
          <span>MEDIA</span>
          <span>LEGAL</span>
          <span>COOKIES</span>
        </div>

        {/* Social icons */}
        <div className="flex space-x-6">
          <PlaceholderRed className="w-6 h-6" />
          <PlaceholderRed className="w-6 h-6" />
          <PlaceholderRed className="w-6 h-6" />
        </div>

      </div>
    </footer>
  );
}
