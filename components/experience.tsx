"use client";

import { useRef } from "react";
import { experiencesData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ExperienceProps = {
  title: string;
  location: string;
  description: string;
  date: string;
  tags?: readonly string[]; // Optional, include only if your data has tags
};

export default function Experience({
  title,
  description,
  location,
  date
}: ExperienceProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 flex flex-col h-full">
          <h3 className="text-2xl font-semibold">{title}</h3>{date}
          <h4 className="bold">{location}</h4>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          
        </div>

        {/* Image component or any additional elements */}
      </section>
    </motion.div>
  );
}
