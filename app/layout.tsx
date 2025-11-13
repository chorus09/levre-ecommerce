import "./globals.css";
import { ReactNode } from "react";
import { Poppins } from "next/font/google";
import { MobileHeader } from "@/components/mobile/MobileHeader";
import { MobileDrawer } from "@/components/mobile/MobileDrawer";
import { DesktopHeader } from "@/components/DesktopHeader";
import { Footer } from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="bg-(--color-background) text-(--color-text-black)">
        {/* Mobile header + drawer */}
        <div className="md:hidden">
          <MobileHeader />
          <MobileDrawer />
        </div>

        {/* Desktop header */}
        <div className="hidden md:block">
          <DesktopHeader />
        </div>

        {/* Page content */}
        <main className="mx-auto max-w-[1440px] px-4 py-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
