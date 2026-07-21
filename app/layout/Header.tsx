"use client";

import {
  Leaf,
  Menu,
  Search,
  Truck,
  UserRound,
  LockKeyhole,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";

import { CartSheet } from "@/components/CartSheet";
import { product } from "@/lib/content/product";

const navLinks = [
  { href: "/boutique", label: "Boutique" },
  { href: "/#a-propos", label: "À propos" },
  { href: "/#contact", label: "Contact" },
];

const navLinkClass =
  "relative py-1 transition-colors hover:text-neutral-500 after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full";

const iconButtonClass = "transition-transform duration-200 hover:scale-110 hover:opacity-60";

function Brand() {
  return (
    <Link href="/" aria-label={`${product.brand} — accueil`} className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center leading-none transition-opacity hover:opacity-70">
      <span className="mb-0.5 flex size-6 items-center justify-center rounded-[45%_55%_48%_52%] border-2 border-black text-xs font-serif leading-none">◒</span>
      <span className="font-serif text-xl tracking-[-0.055em] sm:text-2xl">{product.brand}</span>
      <span className="mt-0.5 text-[0.45rem] tracking-[-0.02em]">{product.brandSuffix}</span>
    </Link>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="relative z-20 bg-white text-black">
      <div className="flex h-8 items-center justify-around bg-black px-3 text-[0.55rem] font-medium uppercase tracking-[0.06em] text-white sm:text-[0.65rem] sm:tracking-[0.08em]">
        <span className="flex items-center gap-1.5"><Truck size={13} strokeWidth={1.6} />Livraison rapide partout au Maroc</span>
        <span className="hidden items-center gap-1.5 sm:flex"><Leaf size={13} strokeWidth={1.6} />Ingrédients naturels</span>
        <span className="hidden items-center gap-1.5 sm:flex"><LockKeyhole size={13} strokeWidth={1.6} />Paiement sécurisé</span>
      </div>

      <div className="relative flex h-16 items-center justify-between px-5 sm:px-8 lg:h-20 lg:px-12">
        <div className="flex items-center gap-6 lg:gap-10">
          <button
            type="button"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className={`p-1 md:hidden ${iconButtonClass}`}
          >
            {menuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
          </button>
          <nav className="hidden items-center gap-8 text-xs font-medium uppercase tracking-[0.025em] md:flex">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={navLinkClass}>{link.label}</Link>
            ))}
          </nav>
        </div>

        <Brand />

        <div className="flex items-center gap-4 sm:gap-6">
          {searchOpen ? (
            <motion.form
              role="search"
              onSubmit={(e) => e.preventDefault()}
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "auto", opacity: 1 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <input
                type="search"
                autoFocus
                placeholder="Rechercher..."
                onBlur={() => setSearchOpen(false)}
                className="w-32 border-b border-black bg-transparent py-1 text-sm outline-none sm:w-48"
              />
            </motion.form>
          ) : (
            <button type="button" aria-label="Rechercher" onClick={() => setSearchOpen(true)} className={iconButtonClass}>
              <Search size={20} strokeWidth={1.55} />
            </button>
          )}
          <button type="button" aria-label="Mon compte" className={`hidden sm:block ${iconButtonClass}`}>
            <UserRound size={20} strokeWidth={1.45} />
          </button>
          <CartSheet />
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-4 overflow-hidden border-t border-black/10 px-5 py-5 text-xs font-medium uppercase tracking-wide md:hidden"
          >
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className={navLinkClass}>
                {link.label}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
