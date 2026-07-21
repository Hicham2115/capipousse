"use client";

import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";

import { Rating } from "@/components/Rating";
import { formatPrice, type Product } from "@/lib/content/catalog";
import { useCartStore } from "@/lib/store/cart";

export function ProductCard({ product }: { product: Product }) {
  const addItem = useCartStore((state) => state.addItem);

  function handleAddToCart() {
    addItem({ id: product.id, name: product.name, price: product.price, image: product.image });
    toast.success(`${product.name} ajouté au panier`);
  }

  return (
    <article className="group rounded-md bg-[#fafaf9] p-4">
      <Link href={`/boutique/${product.id}`} className="relative block aspect-[0.95] overflow-hidden rounded-sm bg-neutral-100">
        <Image src={product.image} alt={product.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
        <span className="absolute left-4 top-4 bg-black px-2 py-1 text-[0.65rem] font-medium uppercase tracking-[0.03em] text-white">{product.badge}</span>
      </Link>
      <div className="px-0.5 pt-3">
        <Link href={`/boutique/${product.id}`}>
          <h3 className="text-sm font-semibold uppercase leading-5 transition-colors hover:text-neutral-600">{product.name}</h3>
        </Link>
        <p className="mt-1 text-xs leading-5 text-neutral-700">{product.description}</p>
        <div className="mt-3">
          <Rating reviews={product.reviews} />
        </div>
        <p className="mt-3 text-base font-medium">{formatPrice(product.price)}</p>
        <div className="mt-3 flex items-center justify-between gap-3">
          <button type="button" onClick={handleAddToCart} className="bg-black px-5 py-3 text-xs font-medium uppercase tracking-[0.08em] text-white transition-opacity hover:opacity-75">Ajouter au panier</button>
          <button type="button" aria-label={`Ajouter ${product.name} aux favoris`} className="p-1"><Heart size={25} strokeWidth={1.25} /></button>
        </div>
      </div>
    </article>
  );
}
