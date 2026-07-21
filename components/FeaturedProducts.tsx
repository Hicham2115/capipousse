"use client";

import { ArrowRight, Heart, Star } from "lucide-react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { toast } from "sonner";

import antiHairLoss from "@/app/assets/collections/ChatGPT Image Jul 21, 2026, 04_55_01 PM.png";
import antiDandruff from "@/app/assets/collections/ChatGPT Image Jul 21, 2026, 04_55_11 PM.png";
import beardOil from "@/app/assets/collections/ChatGPT Image Jul 21, 2026, 04_55_45 PM.png";
import growthSerum from "@/app/assets/collections/ChatGPT Image Jul 21, 2026, 04_56_35 PM.png";
import { useCartStore } from "@/lib/store/cart";

type Product = {
  id: string;
  badge: string;
  name: string;
  description: string;
  reviews: number;
  price: number;
  image: StaticImageData;
};

const products: Product[] = [
  { id: "lotion-anti-chute", badge: "Best seller", name: "Lotion anti-chute", description: "Stimule la repousse et fortifie les cheveux", reviews: 128, price: 249, image: antiHairLoss },
  { id: "serum-pousse", badge: "Nouveau", name: "Sérum pousse", description: "Nourrit, fortifie et stimule la croissance", reviews: 96, price: 299, image: growthSerum },
  { id: "shampooing-anti-pelliculaire", badge: "Top choix", name: "Shampooing anti-pelliculaire", description: "Élimine les pellicules et apaise le cuir chevelu", reviews: 74, price: 199, image: antiDandruff },
  { id: "huile-a-barbe", badge: "Pour homme", name: "Huile à barbe", description: "Nourrit, adoucit et discipline la barbe", reviews: 59, price: 229, image: beardOil },
];

function formatPrice(price: number) {
  return `${price.toFixed(2).replace(".", ",")} Dhs`;
}

function Rating({ reviews }: { reviews: number }) {
  return (
    <div className="mt-3 flex items-center gap-1.5" aria-label={`Note 4,5 sur 5, ${reviews} avis`}>
      <span className="flex gap-0.5">{Array.from({ length: 5 }, (_, index) => <Star key={index} size={14} fill={index < 4 ? "currentColor" : "none"} strokeWidth={1.7} />)}</span>
      <span className="text-xs">({reviews})</span>
    </div>
  );
}

export function FeaturedProducts() {
  const addItem = useCartStore((state) => state.addItem);

  function handleAddToCart(product: Product) {
    addItem({ id: product.id, name: product.name, price: product.price, image: product.image });
    toast.success(`${product.name} ajouté au panier`);
  }

  return (
    <section id="la-gamme" className="bg-[#fdfdfc] px-5 py-12 sm:px-10 lg:px-16 lg:py-14">
      <div className="mx-auto max-w-[1600px] text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.24em]">Nos meilleures sélections</p>
        <h2 className="mt-2 font-serif text-5xl leading-none tracking-[-0.045em] sm:text-6xl lg:text-[4rem]">Featured products</h2>
        <span className="mx-auto mt-4 block h-px w-11 bg-black" />
        <p className="mx-auto mt-4 max-w-xl text-sm leading-5 text-neutral-700 sm:text-base">Des soins naturels et efficaces, conçus pour nourrir, fortifier et révéler la beauté de vos cheveux et de votre barbe.</p>
      </div>

      <div className="mx-auto mt-5 grid max-w-[1600px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <article key={product.name} className="group rounded-md bg-[#fafaf9] p-4">
            <div className="relative aspect-[0.95] overflow-hidden rounded-sm bg-neutral-100">
              <Image src={product.image} alt={product.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <span className="absolute left-4 top-4 bg-black px-2 py-1 text-[0.65rem] font-medium uppercase tracking-[0.03em] text-white">{product.badge}</span>
            </div>
            <div className="px-0.5 pt-3">
              <h3 className="text-sm font-semibold uppercase leading-5">{product.name}</h3>
              <p className="mt-1 text-xs leading-5 text-neutral-700">{product.description}</p>
              <Rating reviews={product.reviews} />
              <p className="mt-3 text-base font-medium">{formatPrice(product.price)}</p>
              <div className="mt-3 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => handleAddToCart(product)}
                  className="bg-black px-5 py-3 text-xs font-medium uppercase tracking-[0.08em] text-white transition-opacity hover:opacity-75"
                >
                  Ajouter au panier
                </button>
                <button type="button" aria-label={`Ajouter ${product.name} aux favoris`} className="p-1"><Heart size={25} strokeWidth={1.25} /></button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <Link href="#" className="mx-auto mt-7 flex w-fit items-center gap-8 border border-black px-7 py-3 text-xs font-medium uppercase tracking-[0.08em] transition-colors hover:bg-black hover:text-white">Voir toute la collection <ArrowRight size={22} strokeWidth={1.25} /></Link>
    </section>
  );
}
