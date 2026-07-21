"use client";

import { Star } from "lucide-react";
import { motion, type Variants } from "motion/react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

// Placeholder testimonials — swap for real customer reviews once collected.
const reviews = [
  {
    name: "Salma B.",
    initials: "SB",
    rating: 5,
    text: "Après 2 mois d'utilisation, ma chute de cheveux a nettement ralenti et mon cuir chevelu ne me démange plus. Je recommande !",
  },
  {
    name: "Youssef K.",
    initials: "YK",
    rating: 5,
    text: "Produit 100% naturel qui tient ses promesses. Odeur agréable et texture non grasse, parfait pour une utilisation le soir.",
  },
  {
    name: "Imane R.",
    initials: "IR",
    rating: 4,
    text: "Bons résultats sur la repousse, surtout au niveau des golfes temporaux. Il faut être patiente les premières semaines.",
  },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export function Reviews() {
  return (
    <section id="avis" className="bg-white px-5 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">Avis clients</p>
          <h2 className="mt-3 font-serif text-3xl tracking-[-0.03em] sm:text-4xl">Ce qu&apos;en pensent nos client·e·s</h2>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {reviews.map((review) => (
            <motion.div key={review.name} variants={item} whileHover={{ y: -6 }} transition={{ duration: 0.25 }}>
              <Card className="h-full transition-shadow duration-300 hover:shadow-lg">
                <CardHeader className="flex flex-row items-center gap-3">
                  <Avatar>
                    <AvatarFallback>{review.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">{review.name}</p>
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star
                          key={index}
                          size={14}
                          className={index < review.rating ? "fill-black text-black" : "text-neutral-300"}
                        />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-neutral-700">{review.text}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
