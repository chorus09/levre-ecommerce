import "./globals.css";
import { ReactNode } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-poppins",
});
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="bg-background text-text-black">
        <div className="mx-auto max-w-[1440px] px-4">
          {children}
        </div>
      </body>
    </html>
  );
}
