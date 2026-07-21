import { FlaskConical, Leaf, MapPin, UsersRound } from "lucide-react";
import type { StaticImageData } from "next/image";

import antiHairLoss from "@/app/assets/collections/ChatGPT Image Jul 21, 2026, 04_55_01 PM.png";
import antiDandruff from "@/app/assets/collections/ChatGPT Image Jul 21, 2026, 04_55_11 PM.png";
import beardOil from "@/app/assets/collections/ChatGPT Image Jul 21, 2026, 04_55_45 PM.png";
import growthSerum from "@/app/assets/collections/ChatGPT Image Jul 21, 2026, 04_56_35 PM.png";

export type Category =
  | "Anti-chute cheveux"
  | "Pousse & fortifiant"
  | "Anti-pelliculaire"
  | "Barbe & soin homme";

export type Product = {
  id: string;
  category: Category;
  badge: string;
  name: string;
  description: string;
  reviews: number;
  price: number;
  image: StaticImageData;
};

// Full product catalog — shared by the homepage's featured teaser and the /boutique page.
export const products: Product[] = [
  { id: "lotion-anti-chute", category: "Anti-chute cheveux", badge: "Best seller", name: "Lotion anti-chute", description: "Stimule la repousse et fortifie les cheveux", reviews: 128, price: 249, image: antiHairLoss },
  { id: "serum-pousse", category: "Pousse & fortifiant", badge: "Nouveau", name: "Sérum pousse", description: "Nourrit, fortifie et stimule la croissance", reviews: 96, price: 299, image: growthSerum },
  { id: "shampooing-anti-pelliculaire", category: "Anti-pelliculaire", badge: "Top choix", name: "Shampooing anti-pelliculaire", description: "Élimine les pellicules et apaise le cuir chevelu", reviews: 74, price: 199, image: antiDandruff },
  { id: "huile-a-barbe", category: "Barbe & soin homme", badge: "Pour homme", name: "Huile à barbe", description: "Nourrit, adoucit et discipline la barbe", reviews: 59, price: 229, image: beardOil },
];

export function formatPrice(price: number) {
  return `${price.toFixed(2).replace(".", ",")} Dhs`;
}

export const assurances = [
  { icon: Leaf, label: "Ingrédients naturels" },
  { icon: FlaskConical, label: "Formule efficace" },
  { icon: UsersRound, label: "Pour hommes & femmes" },
  { icon: MapPin, label: "Fabriqué au Maroc" },
];
