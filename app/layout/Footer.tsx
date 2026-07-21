import {
  AtSign,
  FlaskConical,
  Gift,
  Leaf,
  Music2,
  Rabbit,
  Recycle,
  Share2,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { product } from "@/lib/content/product";

const columns = [
  {
    title: "Boutique",
    links: [
      "Cheveux",
      "Barbe",
      "Coffrets",
      "Accessoires",
      "Nouveautés",
      "Promotions",
      "Tous les produits",
    ],
  },
  {
    title: "À propos",
    links: [
      "Notre histoire",
      "Nos ingrédients",
      "Notre philosophie",
      "Avis clients",
      "Blog",
      "FAQ",
    ],
  },
  {
    title: "Aide & support",
    links: [
      "Contactez-nous",
      "Suivi de commande",
      "Livraison & délais",
      "Retours & échanges",
      "Conditions générales",
      "Politique de confidentialité",
    ],
  },
];

const commitments = [
  { icon: Leaf, label: "Sans parabènes" },
  { icon: FlaskConical, label: "Sans sulfates" },
  { icon: Rabbit, label: "Non testé sur les animaux" },
  { icon: Recycle, label: "Emballage recyclable" },
];

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="w-full bg-[#fafafa] pt-10">
      <div className="w-full overflow-hidden bg-gradient-to-br from-[#090a0a] via-[#161817] to-[#0b0c0c] text-white shadow-xl">
        <div className="grid gap-8 px-7 py-12 lg:grid-cols-[1.15fr_0.8fr_0.8fr_0.95fr_1.35fr] lg:px-14">
          <div className="lg:border-r lg:border-white/10 lg:pr-10">
            <Link href="/" className="inline-block text-center">
              <Image src="/brand/capipousse-logo-white.png" alt={product.brand} width={1600} height={396} className="h-9 w-auto" />
              <span className="mt-1 block text-[0.55rem] text-white/70">
                {product.brandSuffix}
              </span>
            </Link>
            <span className="mt-5 block h-px w-11 bg-[#d8b071]" />
            <p className="mt-5 max-w-60 text-sm leading-6 text-white/75">
              Des soins capillaires et pour la barbe naturels, efficaces et
              sûrs. Conçus avec passion, choisis avec exigence, pour des
              résultats visibles.
            </p>
            <div className="mt-7 flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="grid size-10 place-items-center rounded-full border border-white/30"
              >
                <AtSign size={19} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="grid size-10 place-items-center rounded-full border border-white/30"
              >
                <Share2 size={18} />
              </a>
              <a
                href="#"
                aria-label="TikTok"
                className="grid size-10 place-items-center rounded-full border border-white/30"
              >
                <Music2 size={18} />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="grid size-10 place-items-center rounded-full border border-white/30"
              >
                <Gift size={18} />
              </a>
            </div>
          </div>
          {columns.map((column) => (
            <nav
              key={column.title}
              className="lg:border-r lg:border-white/10 lg:pr-7"
            >
              <h3 className="text-sm font-semibold uppercase tracking-[0.06em] text-[#e6c28b]">
                {column.title}
              </h3>
              <ul className="mt-6 space-y-4">
                {column.links.map((link) => (
                  <li key={link}>
                    <Link
                      href={link === "Contactez-nous" ? "#contact" : "#"}
                      className="text-sm text-white/75 transition-colors hover:text-white"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.06em] text-[#e6c28b]">
              Rejoignez la communauté
            </h3>
            <p className="mt-6 max-w-xs text-sm leading-6 text-white/75">
              Inscrivez-vous à notre newsletter et recevez des conseils, des
              offres exclusives et nos nouveautés en avant-première.
            </p>
            <form className="mt-7 flex overflow-hidden rounded-lg bg-white/10">
              <label className="sr-only" htmlFor="footer-email">
                Votre adresse email
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="Votre adresse email"
                className="min-w-0 flex-1 bg-transparent px-4 py-4 text-sm text-white outline-none placeholder:text-white/45"
              />
              <button
                type="submit"
                aria-label="S’inscrire à la newsletter"
                className="bg-[#ebc58e] px-5 text-black"
              >
                →
              </button>
            </form>
            <div className="mt-10 grid grid-cols-2 divide-x divide-white/10 border-t border-white/10 pt-7">
              <div className="pr-5">
                <Gift className="text-[#e6c28b]" size={31} strokeWidth={1.25} />
                <p className="mt-3 text-xs font-semibold uppercase">
                  Offres exclusives
                </p>
                <p className="mt-1 text-xs text-white/60">Rien que pour vous</p>
              </div>
              <div className="pl-5">
                <Sparkles
                  className="text-[#e6c28b]"
                  size={31}
                  strokeWidth={1.25}
                />
                <p className="mt-3 text-xs font-semibold uppercase">
                  Nouveautés
                </p>
                <p className="mt-1 text-xs text-white/60">
                  Soyez les premiers informés
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 px-7 py-8 lg:px-14">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {commitments.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <Icon
                    className="shrink-0 text-[#e6c28b]"
                    size={28}
                    strokeWidth={1.3}
                  />
                  <span className="max-w-28 text-xs font-semibold uppercase leading-5">
                    {label}
                  </span>
                </div>
              ))}
            </div>
            <div className="border-t border-white/10 pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <p className="text-xs font-semibold uppercase text-[#e6c28b]">
                Paiements acceptés
              </p>
              <div className="mt-3 flex items-center gap-6 text-lg font-bold">
                <span className="italic">VISA</span>
                <span>◉◉</span>
                <span>CMI</span>
                <span className="font-medium"> Pay</span>
              </div>
            </div>
          </div>
          <div className="mt-7 border-t border-white/10 pt-7 text-center text-sm text-white/45">
            © {currentYear} {product.brand} {product.brandSuffix}. Tous droits réservés.
          </div>
        </div>
      </div>
    </footer>
  );
}
