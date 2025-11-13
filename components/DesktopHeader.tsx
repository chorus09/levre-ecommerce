import Link from "next/link";
import { PlaceholderRed } from "./PlaceholderRed";

export function DesktopHeader() {
  return (
    <header className="hidden md:flex items-center justify-between h-20 px-8 bg-(--color-background) border-b border-zinc-200">
      {/* Left side - Back */}
      <div className="flex items-center space-x-2">
        <span className="text-sm text-(--color-text-gray)">‹ Back</span>
      </div>

      {/* Center - Logo placeholder */}
      <div className="flex items-center">
        <PlaceholderRed className="w-32 h-8" />
      </div>

      {/* Right side - Cart + Language */}
      <div className="flex items-center space-x-8 text-sm text-(--color-text-dark)">
        <Link href="/cart" className="hover:text-(--color-text-black)">
          Cart <span className="ml-1 text-(--color-text-gray)">(2)</span>
        </Link>
        <button className="hover:text-(--color-text-black)">
          En▾
        </button>
      </div>
    </header>
  );
}
