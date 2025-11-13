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

          {/* Drawer */}
          <motion.div
            className="
              fixed 
              left-0 top-0 bottom-0 
              w-[300px] 
              bg-(--color-background) 
              z-50 
              p-6 
              shadow-xl 
              flex 
              flex-col
              justify-between
            "
            initial={{ x: -320 }}
            animate={{ x: 0 }}
            exit={{ x: -320 }}
            transition={{ duration: 0.25 }}
          >

            <div className="space-y-8">
              {/* Close icon */}
              <button onClick={close}>
                <PlaceholderRed className="w-6 h-6" />
              </button>

              {/* Menu items */}
              <nav className="space-y-6 text-(--color-text-black)">

                {/* Dashboard */}
                <div className="flex items-center space-x-4">
                  <PlaceholderRed className="w-6 h-6" />
                  <span>Dashboard</span>
                </div>

                {/* Products */}
                <div className="flex items-center space-x-4">
                  <PlaceholderRed className="w-6 h-6" />
                  <span>Products</span>
                </div>

                {/* Cart with number */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <PlaceholderRed className="w-6 h-6" />
                    <span>Cart</span>
                  </div>
                  <span className="text-sm">25</span>
                </div>

                {/* Posts */}
                <div className="flex items-center space-x-4">
                  <PlaceholderRed className="w-6 h-6" />
                  <span>Posts</span>
                </div>
              </nav>
            </div>

            {/* Bottom icon */}
            <div className="flex justify-center pb-4">
              <PlaceholderRed className="w-6 h-6" />
            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
