"use client";

import { PlaceholderRed } from "@/components/PlaceholderRed";

export default function HomePage() {
  return (
    <div className="w-full">

      {/* HERO */}
      <section className="grid md:grid-cols-2 gap-10 mt-14 px-4 md:px-30">

        {/* Left text side */}
        <div className="space-y-8">

          {/* Title */}
          <h1 className="text-4xl font-bold text-(--color-text-dark)">
            Headphones
          </h1>

          {/* Description */}
          <p className="max-w-md font-medium text-lg text-(--color-text-gray) leading-relaxed">
            Experience pure sound and comfort with LEVRÉ headphones — crafted for clarity,
            elegance, and immersive everyday listening.
          </p>

          {/* BUY button */}
          <button className="
            border-2 border-(--color-text-black) 
            px-20 py-5 
            rounded-xs
            text-lg 
            mt-15
            hover:bg-(--color-text-black) 
            hover:text-white 
            transition
            font-medium
          ">
            BUY&nbsp;&nbsp;115 €
          </button>

          {/* Product details */}
          <div className="text-base mt-16 opacity-50 text-(--color-text-gray)">
            Product details
          </div>
        </div>

        {/* Right image placeholder */}
        <div className="flex justify-center md:justify-end">
          <PlaceholderRed className="w-[280px] h-[280px] md:w-[420px] md:h-[420px]" />
        </div>
      </section>

      {/* SLIDER NUMBERS */}
      <div className="flex justify-center items-center space-x-6 my-14 font-medium">
        <span className="text-sm text-(--color-text-gray)">01</span>
        <div className="w-20 h-0.5 rounded-md bg-(--color-text-gray)/40" />
        <span className="text-sm text-(--color-text-gray)">04</span>
      </div>

      {/* CATEGORY TAGS */}
      <div className="flex justify-center space-x-10 text-sm mt-6 mb-10 font-medium">
        <span className="text-(--color-text-gray)">× EVERY DAY</span>
        <span className="text-(--color-text-gray)">× FASHION</span>
        <span className="text-(--color-text-gray)">× TRAVEL</span>
        <span className="text-(--color-text-black)">WORK</span>
      </div>

    </div>
  );
}
