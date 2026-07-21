import { FlaskConical, Globe2, Heart, Leaf } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import philosophyImage from "@/app/assets/collections/ChatGPT Image Jul 21, 2026, 04_55_11 PM.png";

const commitments = [
  {
    icon: Leaf,
    title: "Naturel & sain",
    copy: "Des ingrédients naturels sélectionnés avec soin pour respecter vos cheveux et votre peau.",
  },
  {
    icon: FlaskConical,
    title: "Formules efficaces",
    copy: "Des formules concentrées en actifs pour des résultats visibles et durables.",
  },
  {
    icon: Heart,
    title: "Respectueux",
    copy: "Nos produits sont sans cruauté, sans parabènes et sans sulfates agressifs.",
  },
  {
    icon: Globe2,
    title: "Engagés localement",
    copy: "Fabriqués au Maroc avec fierté, nous soutenons le savoir-faire et l’économie locale.",
  },
];

export function Philosophy() {
  return (
    <section id="a-propos" className="bg-white text-black">
      <div className="grid min-h-[37rem] lg:grid-cols-[minmax(0,0.83fr)_minmax(0,1.17fr)]">
        <div className="flex items-center bg-[#f8f7f4] px-7 py-16 sm:px-12 lg:px-16 xl:px-20">
          <div className="max-w-[30rem]">
            <p className="text-sm font-semibold uppercase tracking-[0.34em]">Notre engagement</p>
            <h2 className="mt-6 font-serif text-5xl leading-[0.92] tracking-[-0.05em] sm:text-6xl lg:text-[4.45rem]">Our<br />philosophy</h2>
            <span className="mt-6 block h-px w-11 bg-black" />
            <p className="mt-7 text-base leading-[1.42] text-neutral-800 sm:text-lg">Chez Capi Pousse, nous croyons que la beauté commence par la nature. Notre mission est simple : offrir des soins capillaires et pour la barbe efficaces, sains et respectueux de votre corps et de l’environnement.</p>
            <p className="mt-6 text-base font-semibold leading-6 sm:text-lg">Des formules pures, des résultats visibles, pour révéler le meilleur de vous-même.</p>
            <Link href="#contact" className="mt-7 inline-block bg-black px-7 py-4 text-xs font-semibold uppercase tracking-[0.13em] text-white transition-opacity hover:opacity-75">En savoir plus</Link>
          </div>
        </div>
        <div className="relative min-h-[26rem] overflow-hidden lg:min-h-0">
          <Image src={philosophyImage} alt="Soin CapiPousse aux ingrédients naturels" fill className="object-cover object-center" />
          <div className="absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-black/15 to-transparent" />
        </div>
      </div>

      <div className="mx-auto grid max-w-[1600px] gap-y-8 px-6 py-10 sm:grid-cols-2 sm:px-12 lg:grid-cols-4 lg:px-16">
        {commitments.map(({ icon: Icon, title, copy }, index) => (
          <div key={title} className={`flex gap-5 px-2 lg:px-8 ${index > 0 ? "lg:border-l lg:border-neutral-300" : ""}`}>
            <span className="grid size-16 shrink-0 place-items-center rounded-full border border-black"><Icon size={31} strokeWidth={1.15} /></span>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.02em]">{title}</h3>
              <p className="mt-2 text-sm leading-5 text-neutral-800">{copy}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
