"use client";

import { BadgeCheck, FlaskConical, Leaf, LockKeyhole, MapPinned, Rabbit, ShieldCheck, Truck } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

import image from "@/app/assets/img1.png";
import { fadeUpContainer, fadeUpItem } from "@/lib/motion";

const reasons = [
  { icon: Leaf, title: "Naturel & sain", text: "Des ingrédients naturels sélectionnés avec soin pour respecter vos cheveux, votre peau et l’environnement." },
  { icon: FlaskConical, title: "Formules efficaces", text: "Des formules concentrées en actifs pour des résultats visibles et durables." },
  { icon: BadgeCheck, title: "Résultats prouvés", text: "Conçus pour lutter contre la chute, stimuler la repousse et renforcer en profondeur." },
  { icon: Rabbit, title: "Sans cruauté", text: "Aucun test sur les animaux. Parce que la beauté ne devrait jamais faire de mal." },
  { icon: ShieldCheck, title: "Sûr & fiable", text: "Sans parabènes, sans sulfates agressifs et sans ingrédients nocifs." },
  { icon: MapPinned, title: "Fabriqué au Maroc", text: "Des produits fièrement conçus et fabriqués au Maroc." },
];

const guarantees = [
  { icon: BadgeCheck, title: "Satisfait ou remboursé", text: "30 jours pour changer d’avis." },
  { icon: LockKeyhole, title: "Paiement 100% sécurisé", text: "Vos données sont protégées et confidentielles." },
  { icon: Truck, title: "Livraison rapide", text: "Partout au Maroc, à domicile ou en point relais." },
];

export function WhyChooseUs() {
  return (
    <section className="relative bg-[#f8f8f6]">
      <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpContainer}
          className="px-7 pb-16 pt-10 sm:px-12 lg:px-16 lg:pb-28 lg:pt-10 xl:px-20"
        >
          <motion.p variants={fadeUpItem} className="text-sm font-semibold uppercase tracking-[0.22em]">Pourquoi nous choisir ?</motion.p>
          <motion.h2 variants={fadeUpItem} className="mt-3 font-serif text-5xl leading-none tracking-[-0.045em] sm:text-6xl lg:text-[4rem]">Why choose us</motion.h2>
          <motion.span variants={fadeUpItem} className="mt-5 block h-px w-11 bg-black" />
          <motion.p variants={fadeUpItem} className="mt-5 max-w-xl text-base leading-6 sm:text-lg">Capi Pousse s’engage à vous offrir des soins capillaires et pour la barbe naturels, efficaces et sûrs.</motion.p>
          <motion.div variants={fadeUpContainer} className="mt-8 grid grid-cols-2 sm:grid-cols-3">
            {reasons.map(({ icon: Icon, title, text }, index) => (
              <motion.article key={title} variants={fadeUpItem} className={`min-h-48 px-4 py-4 text-center ${index % 3 !== 0 ? "sm:border-l sm:border-neutral-300" : ""} ${index > 2 ? "border-t border-neutral-300" : ""}`}>
                <span className="mx-auto grid size-16 place-items-center rounded-full border border-black"><Icon size={31} strokeWidth={1.15} /></span>
                <h3 className="mt-3 text-xs font-semibold uppercase leading-4">{title}</h3>
                <p className="mt-2 text-xs leading-[1.45] text-neutral-800">{text}</p>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
        <div className="relative min-h-[34rem] overflow-hidden lg:min-h-0">
          <Image src={image} alt="La gamme de soins CapiPousse" fill className="object-cover object-center" />
        </div>
      </div>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUpContainer}
        className="relative z-10 mx-auto -mt-4 grid max-w-5xl overflow-hidden rounded-xl border border-neutral-300 bg-white shadow-sm sm:grid-cols-3 lg:-mt-20"
      >
        {guarantees.map(({ icon: Icon, title, text }, index) => (
          <motion.div key={title} variants={fadeUpItem} className={`flex items-center gap-4 px-7 py-6 ${index > 0 ? "border-t border-neutral-300 sm:border-l sm:border-t-0" : ""}`}>
            <span className="grid size-16 shrink-0 place-items-center rounded-full border border-black"><Icon size={31} strokeWidth={1.15} /></span>
            <div><h3 className="text-xs font-semibold uppercase leading-5">{title}</h3><p className="mt-1 text-xs leading-5 text-neutral-700">{text}</p></div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
