"use client";

import { useMobileMenu } from "@/lib/useMobileMenu";
import { PlaceholderRed } from "../PlaceholderRed";
import { motion, AnimatePresence } from "framer-motion";

export function MobileDrawer() {
  const { isOpen, close } = useMobileMenu();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            onClick={close}
            className="fixed inset-0 bg-black/40 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
          />

          {/* Drawer panel */}
          <motion.div
            className="fixed left-0 top-0 bottom-0 w-72 bg-background z-50 p-6 flex flex-col space-y-6 shadow-xl"
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: "tween", duration: 0.25 }}
          >
            {/* Close button */}
            <button onClick={close} className="mb-4">
              <PlaceholderRed className="w-6 h-6" />
            </button>

            {/* Logo placeholder */}
            <PlaceholderRed className="w-32 h-8" />

            {/* Navigation links */}
            <nav className="flex flex-col space-y-4 text-xl text-(--color-text-dark)">
              <a className="hover:text-(--color-text-black)" href="/">Home</a>
              <a className="hover:text-(--color-text-black)" href="/products">Products</a>
              <a className="hover:text-(--color-text-black)" href="/categories">Categories</a>
              <a className="hover:text-(--color-text-black)" href="/about">About</a>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
