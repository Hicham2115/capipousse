"use client";

import { Heart, Minus, Plus } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import type { Product } from "@/lib/content/catalog";
import { useCartStore } from "@/lib/store/cart";

export function ProductActions({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore((state) => state.addItem);

  function handleAddToCart() {
    for (let i = 0; i < quantity; i += 1) {
      addItem({ id: product.id, name: product.name, price: product.price, image: product.image });
    }
    toast.success(`${quantity > 1 ? `${quantity}x ` : ""}${product.name} ajouté au panier`);
  }

  return (
    <div className="mt-6 flex items-center gap-3">
      <div className="flex items-center border border-neutral-300">
        <button type="button" aria-label="Diminuer la quantité" onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="p-3 transition-colors hover:bg-neutral-100">
          <Minus size={14} />
        </button>
        <span className="w-8 text-center text-sm">{quantity}</span>
        <button type="button" aria-label="Augmenter la quantité" onClick={() => setQuantity((q) => q + 1)} className="p-3 transition-colors hover:bg-neutral-100">
          <Plus size={14} />
        </button>
      </div>
      <button
        type="button"
        onClick={handleAddToCart}
        className="flex-1 bg-black px-6 py-3.5 text-xs font-medium uppercase tracking-[0.1em] text-white transition-opacity hover:opacity-80"
      >
        Ajouter au panier
      </button>
      <button
        type="button"
        aria-label={`Ajouter ${product.name} aux favoris`}
        className="border border-neutral-300 p-3.5 transition-colors hover:border-black"
      >
        <Heart size={20} strokeWidth={1.4} />
      </button>
    </div>
  );
}
