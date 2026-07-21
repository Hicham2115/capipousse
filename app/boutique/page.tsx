import type { Metadata } from "next";

import { BoutiqueGrid } from "@/components/BoutiqueGrid";
import { assurances } from "@/lib/content/catalog";
import { product } from "@/lib/content/product";

export const metadata: Metadata = {
  title: `Boutique | ${product.brand}`,
  description:
    "Découvrez toute la gamme CapiPousse : lotion anti-chute, sérum pousse, shampooing anti-pelliculaire et huile à barbe, 100% naturels.",
};

export default async function BoutiquePage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;

  return (
    <main className="bg-[#fdfdfc] text-black">
      <section className="mx-auto max-w-[1600px] px-5 pb-2 pt-14 sm:px-10 sm:pt-16 lg:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em]">Notre boutique</p>
          <h1 className="mt-3 font-serif text-5xl leading-none tracking-[-0.045em] sm:text-6xl lg:text-[4rem]">Toute la gamme CapiPousse</h1>
          <span className="mx-auto mt-4 block h-px w-11 bg-black" />
          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-neutral-700 sm:text-base">
            Des soins naturels et efficaces pour des cheveux plus forts, un cuir chevelu apaisé et une barbe impeccable au quotidien.
          </p>
        </div>
      </section>

      <BoutiqueGrid initialCategory={category} />

      <section aria-label="Nos engagements" className="border-t border-neutral-100 bg-white px-5 py-8 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-8 lg:grid-cols-4">
          {assurances.map(({ icon: Icon, label }, index) => (
            <div key={label} className={`flex items-center justify-center gap-5 px-4 ${index > 0 ? "lg:border-l lg:border-neutral-300" : ""}`}>
              <Icon size={42} strokeWidth={1.15} />
              <span className="max-w-24 text-sm font-medium uppercase leading-6">{label}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
