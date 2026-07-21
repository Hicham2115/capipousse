"use client";

import { Leaf, ShieldCheck, Sprout } from "lucide-react";
import { motion, type Variants } from "motion/react";
import Image from "next/image";
import Link from "next/link";

import heroImage from "@/app/assets/hero.png";
import { product } from "@/lib/content/product";

const benefitIcons = [Leaf, Sprout, ShieldCheck];

const MotionLink = motion.create(Link);

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Hero() {
  return (
    <main id="boutique" className="bg-white">
      <section className="relative isolate flex h-[97svh] min-h-136 max-h-272 overflow-hidden bg-[#f6f5f2]">
        <motion.div
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 -z-10"
        >
          <Image
            src={heroImage}
            alt={`Lotion ${product.brand} ${product.name.fr}`}
            priority
            placeholder="blur"
            className="size-full object-cover object-center"
          />
        </motion.div>
        <div className="absolute inset-y-0 left-0 -z-0 w-[58%] bg-gradient-to-r from-white/15 via-white/5 to-transparent" />
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 flex w-full max-w-[44rem] flex-col justify-center px-7 py-12 sm:px-12 lg:px-20"
        >
          <motion.p
            variants={item}
            className="mb-5 text-xs font-semibold uppercase tracking-[0.34em]"
          >
            {product.brand}
          </motion.p>
          <motion.h1
            variants={item}
            className="font-serif text-5xl leading-[0.9] tracking-[-0.06em] sm:text-6xl lg:text-[4.7rem]"
          >
            Nourrit.
            <br />
            Fortifie.
            <br />
            Fait Pousser.
          </motion.h1>
          <motion.span
            variants={item}
            className="mt-6 block h-px w-11 bg-black"
          />
          <motion.p
            variants={item}
            className="mt-5 max-w-[28rem] text-base leading-[1.4] text-neutral-800 sm:text-lg"
          >
            {product.description.fr}
          </motion.p>
          <motion.div
            variants={item}
            className="mt-7 flex flex-wrap items-center gap-4"
          >
            <MotionLink
              href="#la-gamme"
              whileHover={{ scale: 1.04, opacity: 0.85 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="w-fit bg-black px-6 py-3.5 text-xs font-medium uppercase tracking-[0.12em] text-white"
            >
              Découvrir maintenant
            </MotionLink>
            <motion.span
              whileHover={{ borderColor: "rgb(115 115 115)" }}
              className="border border-black px-4 py-2 text-[0.65rem] font-semibold uppercase leading-4 tracking-[0.06em]"
            >
              <span className="block">{product.noRinse.fr}</span>
              <span className="font-normal">{product.noRinse.en}</span>
            </motion.span>
          </motion.div>
          {/* <motion.div
            variants={item}
            className="mt-11 flex flex-wrap items-center gap-y-5"
          >
            {product.benefits.fr.map((title, index) => {
              const Icon = benefitIcons[index];
              return (
                <div
                  key={title}
                  className={`flex items-center gap-3 pr-7 ${index > 0 ? "border-l border-neutral-500 pl-7" : ""}`}
                >
                  <span className="grid size-12 place-items-center rounded-full border border-black">
                    <Icon size={25} strokeWidth={1.25} />
                  </span>
                  <p className="text-xs font-semibold uppercase leading-5">
                    <span className="block">{title}</span>
                    <span className="font-normal">
                      {product.benefits.en[index]}
                    </span>
                  </p>
                </div>
              );
            })}
          </motion.div> */}
        </motion.div>
      </section>
    </main>
  );
}
