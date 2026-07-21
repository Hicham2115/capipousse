// Source of truth for CapiPousse product copy, taken from the official label (Etiquette.pdf).
// Reuse this across sections (hero, product info, ingredients, footer) instead of re-typing copy.

export const product = {
  brand: "CapiPousse",
  brandSuffix: "by NatilCosmetics",
  name: {
    fr: "Lotion Anti-Chute",
    en: "Anti-Hair Loss Lotion",
  },
  benefits: {
    fr: [
      "Nourrit & fortifie les cheveux",
      "Stimule la repousse",
      "Antipelliculaire",
    ],
    en: [
      "Nourishes & strengthens the hair",
      "Stimulates the growth",
      "Anti-dandruff",
    ],
  },
  noRinse: {
    fr: "Sans rinçage",
    en: "Without rinsing",
  },
  description: {
    fr: "Capipousse est une lotion 100% naturelle, qui réduit la chute des cheveux et stimule leur repousse. Il résout en effet les principales causes de chute de cheveux tout en soignant le cuir chevelu. Il élimine les pellicules et soulage les démangeaisons permettant au cuir chevelu de retrouver des cheveux plus forts et sains.",
    en: "Capipousse is a 100% natural lotion that reduces hair loss and stimulates regrowth. It addresses the main causes of hair loss while caring for the scalp. It eliminates dandruff and soothes itching, helping the scalp regain stronger, healthier hair.",
  },
  usage: {
    fr: "Agitez avant l'emploi. Appliquez la lotion sur l'ensemble du cuir chevelu. Ensuite frictionnez votre cuir chevelu pendant 3 à 4 min. Ce produit est non gras et ne nécessite donc pas de rinçage. À utiliser tous les soirs en cure de 3 mois. Des résultats peuvent être visibles dès les premières semaines d'utilisation.",
    en: "Shake before use. Apply the lotion over the entire scalp. Then massage the scalp for 3 to 4 minutes. This product is non-greasy and does not require rinsing. Use every evening for a 3-month course. Results may be visible from the first weeks of use.",
  },
  ingredientsInci: [
    "Aqua",
    "Aloe Barbadensis Leaf Juice",
    "Eugenia Caryophyllus Bud Extract",
    "Cinnamomum Zeylanicum Bark Extract",
    "Allium Cepa Bulb Extract",
    "Zingiber Officinale Root Extract",
    "Butylene Glycol",
    "Allium Sativum Bulb Extract",
    "Epilobium Angustifolium Flower/Leaf/Stem Extract",
    "Trifolium Pratense Flower Extract",
    "Cedrus Atlantica bark oil",
    "Mentha Piperita oil",
    "Acetyl Tetrapeptide-3",
    "Benzyl Alcohol",
    "Benzoic Acid",
    "Dehydroacetic Acid",
    "Tocopherol",
    "Dextran",
    "Caprylyl Glycol",
    "Ethylhexylglycerin",
    "Fragrance",
  ],
  manufacturer: {
    name: "Coopérative Konouz Watany",
    address: "232 Loudaya, Marrakech, Morocco",
    website: "https://www.natilcosmetics.com",
    email: "contact@natilcosmetics.com",
  },
  origin: {
    fr: "Fabriqué au Maroc",
    en: "Made in Morocco",
  },
  size: {
    volume: "100ml",
    volumeUs: "3.3fl.oz",
  },
} as const;
