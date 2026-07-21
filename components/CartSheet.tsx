"use client";

import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCartStore } from "@/lib/store/cart";

function formatPrice(price: number) {
  return `${price.toFixed(2).replace(".", ",")} Dhs`;
}

export function CartSheet() {
  const items = useCartStore((state) => state.items);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Sheet>
      <SheetTrigger
        render={
          <button
            type="button"
            aria-label="Voir le panier"
            className="relative transition-transform duration-200 hover:scale-110 hover:opacity-60"
          >
            <ShoppingBag size={20} strokeWidth={1.35} />
            {itemCount > 0 && (
              <span className="absolute -right-2 -top-2 grid size-4 place-items-center rounded-full bg-black text-[0.55rem] text-white">
                {itemCount}
              </span>
            )}
          </button>
        }
      />
      <SheetContent side="right" className="w-full sm:max-w-sm">
        <SheetHeader>
          <SheetTitle>Panier</SheetTitle>
          <SheetDescription>
            {itemCount === 0 ? "Votre panier est vide" : `${itemCount} article(s)`}
          </SheetDescription>
        </SheetHeader>

        <div className="flex-1 space-y-4 overflow-y-auto px-4">
          {items.map((item) => (
            <div key={item.id} className="flex gap-3 border-b border-neutral-200 pb-4">
              <span className="relative size-16 shrink-0 overflow-hidden rounded bg-neutral-100">
                <Image src={item.image} alt={item.name} fill className="object-cover" />
              </span>
              <div className="flex-1">
                <p className="text-sm font-medium leading-5">{item.name}</p>
                <p className="mt-1 text-sm text-neutral-600">{formatPrice(item.price)}</p>
                <div className="mt-2 flex items-center gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="icon-sm"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    aria-label="Diminuer la quantité"
                  >
                    <Minus size={14} />
                  </Button>
                  <span className="w-6 text-center text-sm">{item.quantity}</span>
                  <Button
                    type="button"
                    variant="outline"
                    size="icon-sm"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    aria-label="Augmenter la quantité"
                  >
                    <Plus size={14} />
                  </Button>
                  <button
                    type="button"
                    onClick={() => removeItem(item.id)}
                    aria-label={`Retirer ${item.name}`}
                    className="ml-auto p-1 text-neutral-500 transition-colors hover:text-black"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
          {items.length === 0 && (
            <div className="flex flex-col items-center gap-2 py-10 text-center text-sm text-neutral-500">
              <ShoppingBag size={28} strokeWidth={1.3} />
              Ajoutez des produits pour commencer.
            </div>
          )}
        </div>

        {items.length > 0 && (
          <SheetFooter>
            <div className="flex items-center justify-between text-sm font-medium">
              <span>Sous-total</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <Button
              type="button"
              className="w-full"
              onClick={() => toast.info("Le paiement en ligne arrive bientôt")}
            >
              Passer commande
            </Button>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
}
