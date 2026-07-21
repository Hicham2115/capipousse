"use client";

import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";

import { ProductCard } from "@/components/ProductCard";
import { products, type Category } from "@/lib/content/catalog";
import { fadeUpContainer, fadeUpItem } from "@/lib/motion";

const categories: Array<Category | "Tous"> = [
  "Tous",
  "Anti-chute cheveux",
  "Pousse & fortifiant",
  "Anti-pelliculaire",
  "Barbe & soin homme",
];

function isCategory(value: string): value is Category {
  return (categories as string[]).includes(value) && value !== "Tous";
}

export function BoutiqueGrid({ initialCategory }: { initialCategory?: string }) {
  const [active, setActive] = useState<Category | "Tous">(
    initialCategory && isCategory(initialCategory) ? initialCategory : "Tous"
  );

  const filtered = useMemo(
    () => (active === "Tous" ? products : products.filter((p) => p.category === active)),
    [active]
  );

  return (
    <section className="mx-auto max-w-[1600px] px-5 pb-14 sm:px-10 lg:px-16">
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={`border px-4 py-2 text-xs font-medium uppercase tracking-[0.06em] transition-colors ${
              active === category
                ? "border-black bg-black text-white"
                : "border-neutral-300 text-neutral-700 hover:border-black hover:text-black"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeUpContainer}
        className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((product) => (
            <motion.div key={product.id} layout variants={fadeUpItem} initial="hidden" animate="show" exit={{ opacity: 0, y: 12 }}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-sm text-neutral-600">Aucun produit dans cette catégorie pour le moment.</p>
      )}
    </section>
  );
}
