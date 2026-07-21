"use client";

import { Award, BadgeCheck, Heart, Leaf, Quote, ShieldCheck, Sprout, Star } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import serumImage from "@/app/assets/collections/ChatGPT Image Jul 21, 2026, 04_56_35 PM.png";
import shampooImage from "@/app/assets/collections/ChatGPT Image Jul 21, 2026, 04_55_11 PM.png";
import beardImage from "@/app/assets/collections/ChatGPT Image Jul 21, 2026, 04_55_45 PM.png";
import lotionImage from "@/app/assets/collections/ChatGPT Image Jul 21, 2026, 04_55_01 PM.png";

type Review = { name: string; initials: string; text: string; product: string; subtitle: string; image: StaticImageData };

// Placeholder testimonials — swap for real customer reviews once collected.
const reviewSlides: Review[][] = [
  [
    { name: "Yassine M.", initials: "YM", text: "Après 3 semaines d’utilisation, ma chute de cheveux a clairement diminué. Mes cheveux sont plus forts et plus denses. Je recommande à 100% !", product: "Sérum Pousse", subtitle: "Hair Growth Serum", image: serumImage },
    { name: "Karim A.", initials: "KA", text: "Une lotion naturelle et efficace ! Facile à appliquer, sans rinçage et odeur agréable. Ma barbe pousse plus vite et plus fournie.", product: "Huile à Barbe", subtitle: "Beard Oil", image: beardImage },
    { name: "Salma T.", initials: "ST", text: "Enfin un shampoing qui apaise mon cuir chevelu et réduit les pellicules. Cheveux doux et légers, je ne peux plus m’en passer.", product: "Shampooing Anti-Pelliculaire", subtitle: "Anti-Dandruff Shampoo", image: shampooImage },
  ],
  [
    { name: "Amine H.", initials: "AH", text: "Ma chute a nettement ralenti après 6 semaines. Cuir chevelu apaisé, plus aucune démangeaison au quotidien.", product: "Lotion Anti-Chute", subtitle: "Anti-Hair Loss Lotion", image: lotionImage },
    { name: "Fatima Z.", initials: "FZ", text: "Cheveux visiblement plus épais depuis que j’utilise le sérum tous les soirs. Une vraie différence après un mois.", product: "Sérum Pousse", subtitle: "Hair Growth Serum", image: serumImage },
    { name: "Omar L.", initials: "OL", text: "Barbe plus douce et plus dense en un mois. L’odeur est discrète et agréable, parfait au quotidien.", product: "Huile à Barbe", subtitle: "Beard Oil", image: beardImage },
  ],
  [
    { name: "Nadia B.", initials: "NB", text: "Fini les pellicules après deux semaines seulement. Cheveux légers, brillants et cuir chevelu apaisé.", product: "Shampooing Anti-Pelliculaire", subtitle: "Anti-Dandruff Shampoo", image: shampooImage },
    { name: "Hamza R.", initials: "HR", text: "Produit naturel qui tient ses promesses, sans rinçage et facile à intégrer à ma routine du soir.", product: "Lotion Anti-Chute", subtitle: "Anti-Hair Loss Lotion", image: lotionImage },
    { name: "Khadija S.", initials: "KS", text: "Repousse visible sur les golfes temporaux après 2 mois d’utilisation. Je suis bluffée par les résultats.", product: "Sérum Pousse", subtitle: "Hair Growth Serum", image: serumImage },
  ],
];

const statistics = [
  { icon: Leaf, number: "96%", label: "ont constaté moins de chute" },
  { icon: Sprout, number: "93%", label: "cheveux plus forts et plus sains" },
  { icon: BadgeCheck, number: "94%", label: "satisfaction globale" },
  { icon: Heart, number: "98%", label: "recommandent Capi Pousse" },
];

function Stars() { return <span className="flex gap-0.5">{Array.from({ length: 5 }, (_, index) => <Star key={index} size={16} fill="currentColor" strokeWidth={1.4} />)}</span>; }

export function Testimonials() {
  const [slide, setSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setSlide((current) => (current + 1) % reviewSlides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [paused]);

  const reviews = reviewSlides[slide];

  return (
    <section className="bg-[#fcfcfb] px-5 py-12 sm:px-10 lg:px-16">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.24em]">Vos avis comptent</p>
        <h2 className="mt-2 font-serif text-4xl leading-none tracking-[-0.045em] sm:text-5xl lg:text-[3.6rem]">Ils en parlent mieux que nous</h2>
        <span className="mx-auto mt-3 block h-px w-11 bg-black" />
        <p className="mt-3 text-sm leading-5 text-neutral-700 sm:text-base">Des résultats visibles, une confiance méritée.<br />Découvrez les retours de notre communauté.</p>
      </div>

      <div className="mx-auto mt-6 grid max-w-[1600px] gap-5 lg:grid-cols-[0.85fr_1.15fr]">
        <article className="rounded-xl border border-neutral-200 bg-white p-6">
          <div className="grid items-center gap-6 sm:grid-cols-[0.7fr_1.3fr]">
            <div className="text-center sm:border-r sm:border-neutral-200 sm:pr-6"><p className="text-6xl font-semibold tracking-[-0.07em]">4.8</p><div className="mt-2 flex justify-center"><Stars /></div><p className="mt-2 text-xs">Basé sur 320+ avis</p></div>
            <div className="space-y-3">{[["5", "72%", "w-[72%]"], ["4", "17%", "w-[17%]"], ["3", "7%", "w-[7%]"], ["2", "2%", "w-[2%]"], ["1", "2%", "w-[2%]"]].map(([rate, percent, width]) => <div key={rate} className="flex items-center gap-3 text-xs"><span className="w-8 text-right">{rate} ★</span><span className="h-2 flex-1 overflow-hidden rounded-full bg-neutral-100"><motion.span initial={{ width: 0 }} whileInView={{ width: percent }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className={`block h-full rounded-full bg-black ${width}`} /></span><span className="w-8">{percent}</span></div>)}</div>
          </div>
          <div className="mt-7 grid grid-cols-2 border-t border-neutral-200 pt-6 sm:grid-cols-4">{statistics.map(({ icon: Icon, number, label }, index) => <div key={number} className={`px-3 text-center ${index > 0 ? "sm:border-l sm:border-neutral-200" : ""}`}><span className="mx-auto grid size-13 place-items-center rounded-full border border-black transition-colors hover:bg-black hover:text-white"><Icon size={26} strokeWidth={1.15} /></span><p className="mt-3 text-2xl font-semibold">{number}</p><p className="mt-1 text-xs leading-4">{label}</p></div>)}</div>
        </article>

        <article
          className="rounded-xl border border-neutral-200 bg-white p-6"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="flex items-center justify-between"><h3 className="text-sm font-semibold uppercase tracking-[0.1em]">Avis clients</h3><p className="text-xs uppercase tracking-[0.08em] text-neutral-600">320+ avis vérifiés</p></div>
          <div className="relative mt-5 min-h-[19rem] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="grid gap-4 sm:grid-cols-3"
              >
                {reviews.map((review) => (
                  <div key={review.name} className="flex min-h-[19rem] flex-col rounded-lg border border-neutral-200 p-4 transition-shadow duration-300 hover:shadow-lg">
                    <Quote size={25} fill="currentColor" strokeWidth={0} />
                    <div className="mt-2"><Stars /></div>
                    <p className="mt-3 text-xs leading-5">{review.text}</p>
                    <div className="mt-auto">
                      <div className="flex items-center gap-2"><span className="grid size-8 place-items-center rounded-full bg-neutral-900 text-[0.6rem] text-white">{review.initials}</span><div><p className="text-xs font-semibold">{review.name} <BadgeCheck className="inline" size={13} fill="black" color="white" /></p><p className="text-[0.6rem] text-neutral-600">Achat vérifié</p></div></div>
                      <div className="mt-4 flex items-center gap-3 rounded-md bg-neutral-50 p-2"><span className="relative size-12 overflow-hidden rounded"><Image src={review.image} alt="" fill className="object-cover" /></span><p className="text-[0.65rem] font-semibold leading-4">{review.product}<span className="block font-normal text-neutral-500">{review.subtitle}</span></p></div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="mt-5 flex justify-center gap-2">
            {reviewSlides.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Voir les avis ${index + 1}`}
                aria-current={slide === index}
                onClick={() => setSlide(index)}
                className={`size-2 rounded-full transition-colors ${slide === index ? "bg-black" : "bg-neutral-200 hover:bg-neutral-400"}`}
              />
            ))}
          </div>
        </article>
      </div>

      <div className="mx-auto mt-6 grid max-w-[1600px] items-center gap-6 rounded-lg border border-neutral-200 bg-white p-5 lg:grid-cols-[1.45fr_auto_1.2fr]"><div className="flex items-center gap-5"><span className="relative hidden h-28 w-40 shrink-0 overflow-hidden rounded sm:block"><Image src={serumImage} alt="Sérum CapiPousse" fill className="object-cover" /></span><Quote size={34} fill="currentColor" strokeWidth={0} /><p className="text-sm leading-6">Votre confiance est notre plus belle récompense.<br />Rejoignez des centaines de clients satisfaits et révélez le meilleur de vos cheveux.</p></div><Link href="#la-gamme" className="justify-self-center bg-black px-6 py-3 text-xs font-medium uppercase tracking-[0.08em] text-white transition-opacity hover:opacity-80">Découvrir nos produits →</Link><div className="grid grid-cols-3 gap-3 border-t border-neutral-200 pt-5 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">{[{ icon: ShieldCheck, title: "Sûr & naturel", text: "Ingrédients doux" }, { icon: Award, title: "Qualité premium", text: "Formules testées" }, { icon: Leaf, title: "Résultats visibles", text: "La différence" }].map(({ icon: Icon, title, text }) => <div key={title} className="text-center"><Icon className="mx-auto" size={30} strokeWidth={1.15} /><p className="mt-2 text-[0.65rem] font-semibold uppercase">{title}</p><p className="mt-1 text-[0.65rem]">{text}</p></div>)}</div></div>
    </section>
  );
}
