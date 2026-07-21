"use client";

import { motion } from "motion/react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

import antiHairLoss from "@/app/assets/collections/ChatGPT Image Jul 21, 2026, 04_55_01 PM.png";
import antiDandruff from "@/app/assets/collections/ChatGPT Image Jul 21, 2026, 04_55_11 PM.png";
import beardOil from "@/app/assets/collections/ChatGPT Image Jul 21, 2026, 04_55_45 PM.png";
import growthSerum from "@/app/assets/collections/ChatGPT Image Jul 21, 2026, 04_56_35 PM.png";
import { assurances } from "@/lib/content/catalog";
import { fadeUpContainer, fadeUpItem } from "@/lib/motion";

type Collection = {
  title: string;
  description: string;
  image: StaticImageData;
  position?: string;
};

const collections: Collection[] = [
  {
    title: "Anti-chute cheveux",
    description: "Réduit la chute des cheveux et stimule leur repousse.",
    image: antiHairLoss,
    position: "center",
  },
  {
    title: "Pousse & fortifiant",
    description: "Stimule la croissance et renforce la fibre capillaire.",
    image: growthSerum,
    position: "center",
  },
  {
    title: "Anti-pelliculaire",
    description:
      "Élimine les pellicules, apaise le cuir chevelu et rééquilibre.",
    image: antiDandruff,
    position: "center",
  },
  {
    title: "Barbe & soin homme",
    description: "Nourrit, adoucit et discipline la barbe.",
    image: beardOil,
    position: "center",
  },
];

export function Collections() {
  return (
    <main id="boutique" className="bg-[#fdfdfc] text-black">
      <section className="mx-auto max-w-[1600px] px-5 pb-2 pt-9 sm:px-10 sm:pt-10 lg:px-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUpContainer}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.p
            variants={fadeUpItem}
            className="text-sm font-semibold uppercase tracking-[0.2em]"
          >
            Nos essentiels
          </motion.p>
          <motion.h1
            variants={fadeUpItem}
            className="mt-3 font-serif text-5xl leading-none tracking-[-0.045em] sm:text-6xl lg:text-[4rem]"
          >
            Featured collections
          </motion.h1>
          <motion.span
            variants={fadeUpItem}
            className="mx-auto mt-4 block h-px w-11 bg-black"
          />
          <motion.p
            variants={fadeUpItem}
            className="mx-auto mt-4 max-w-xl text-sm leading-6 text-neutral-700 sm:text-base"
          >
            Des soins naturels et efficaces pour des cheveux plus forts, plus
            sains et une barbe impeccable au quotidien.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpContainer}
          className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
        >
          {collections.map((collection) => (
            <motion.article
              key={collection.title}
              variants={fadeUpItem}
              className="group relative min-h-[26rem] overflow-hidden rounded-lg bg-neutral-200"
            >
              <Image
                src={collection.image}
                alt={collection.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ objectPosition: collection.position }}
              />
              <div className="absolute inset-x-0 top-0 bg-gradient-to-b from-white/90 via-white/30 to-transparent p-5">
                <h2 className="max-w-[10rem] text-xl font-semibold uppercase leading-[1.08] tracking-[0.025em]">
                  {collection.title}
                </h2>
                {/* <p className="mt-4 max-w-[10rem] text-xs leading-5 text-black">{collection.description}</p> */}
              </div>
              <Link
                href={`/boutique?category=${encodeURIComponent(collection.title)}`}
                aria-label={`Découvrir ${collection.title}`}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black px-8 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-opacity hover:opacity-75"
              >
                Découvrir
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section
        aria-label="Nos engagements"
        className="mt-2 border-t border-neutral-100 bg-white px-5 py-8 sm:px-10 lg:px-16"
      >
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUpContainer}
          className="mx-auto grid max-w-6xl grid-cols-2 gap-y-8 lg:grid-cols-4"
        >
          {assurances.map(({ icon: Icon, label }, index) => (
            <motion.div
              key={label}
              variants={fadeUpItem}
              className={`flex items-center justify-center gap-5 px-4 ${index > 0 ? "lg:border-l lg:border-neutral-300" : ""}`}
            >
              <Icon size={42} strokeWidth={1.15} />
              <span className="max-w-24 text-sm font-medium uppercase leading-6">
                {label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}
