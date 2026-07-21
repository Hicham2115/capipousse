"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/content/catalog";
import { fadeUpContainer, fadeUpItem } from "@/lib/motion";

export function FeaturedProducts() {
  return (
    <section id="la-gamme" className="bg-[#fdfdfc] px-5 py-12 sm:px-10 lg:px-16 lg:py-14">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUpContainer}
        className="mx-auto max-w-[1600px] text-center"
      >
        <motion.p variants={fadeUpItem} className="text-sm font-semibold uppercase tracking-[0.24em]">Nos meilleures sélections</motion.p>
        <motion.h2 variants={fadeUpItem} className="mt-2 font-serif text-5xl leading-none tracking-[-0.045em] sm:text-6xl lg:text-[4rem]">Featured products</motion.h2>
        <motion.span variants={fadeUpItem} className="mx-auto mt-4 block h-px w-11 bg-black" />
        <motion.p variants={fadeUpItem} className="mx-auto mt-4 max-w-xl text-sm leading-5 text-neutral-700 sm:text-base">Des soins naturels et efficaces, conçus pour nourrir, fortifier et révéler la beauté de vos cheveux et de votre barbe.</motion.p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUpContainer}
        className="mx-auto mt-5 grid max-w-[1600px] gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {products.map((product) => (
          <motion.div key={product.id} variants={fadeUpItem}>
            <ProductCard product={product} />
          </motion.div>
        ))}
      </motion.div>

      <Link href="/boutique" className="mx-auto mt-7 flex w-fit items-center gap-8 border border-black px-7 py-3 text-xs font-medium uppercase tracking-[0.08em] transition-colors hover:bg-black hover:text-white">Voir toute la collection <ArrowRight size={22} strokeWidth={1.25} /></Link>
    </section>
  );
}
