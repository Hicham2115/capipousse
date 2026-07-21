import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ProductActions } from "@/components/ProductActions";
import { ProductCard } from "@/components/ProductCard";
import { Rating } from "@/components/Rating";
import { formatPrice, products } from "@/lib/content/catalog";
import { product as productContent } from "@/lib/content/product";

export function generateStaticParams() {
  return products.map((item) => ({ id: item.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const item = products.find((p) => p.id === id);
  if (!item) return {};

  return {
    title: `${item.name} | ${productContent.brand}`,
    description: item.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = products.find((p) => p.id === id);
  if (!item) notFound();

  const isLotion = item.id === "lotion-anti-chute";
  const related = [...products]
    .filter((p) => p.id !== item.id)
    .sort((a, b) => Number(b.category === item.category) - Number(a.category === item.category))
    .slice(0, 3);

  return (
    <main className="bg-[#fdfdfc] text-black">
      <div className="mx-auto max-w-[1600px] px-5 pt-6 sm:px-10 lg:px-16">
        <nav aria-label="Fil d'Ariane" className="flex flex-wrap items-center gap-1.5 text-xs uppercase tracking-wide text-neutral-500">
          <Link href="/boutique" className="transition-colors hover:text-black">Boutique</Link>
          <span>/</span>
          <Link href={`/boutique?category=${encodeURIComponent(item.category)}`} className="transition-colors hover:text-black">{item.category}</Link>
          <span>/</span>
          <span className="text-black">{item.name}</span>
        </nav>
      </div>

      <section className="mx-auto grid max-w-[1600px] gap-10 px-5 py-8 sm:px-10 lg:grid-cols-2 lg:px-16 lg:py-12">
        <div className="relative aspect-square overflow-hidden rounded-lg bg-neutral-100">
          <Image src={item.image} alt={item.name} fill priority className="object-cover" />
          <span className="absolute left-4 top-4 bg-black px-2.5 py-1 text-xs font-medium uppercase tracking-[0.03em] text-white">{item.badge}</span>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-500">{item.category}</p>
          <h1 className="mt-2 font-serif text-4xl leading-none tracking-[-0.04em] sm:text-5xl">{item.name}</h1>
          <div className="mt-3">
            <Rating reviews={item.reviews} />
          </div>
          <p className="mt-4 text-2xl font-medium">{formatPrice(item.price)}</p>
          <p className="mt-4 max-w-md text-sm leading-6 text-neutral-700">
            {isLotion ? productContent.description.fr : item.description}
          </p>

          {isLotion && (
            <span className="mt-4 inline-block border border-black px-4 py-2 text-[0.65rem] font-semibold uppercase leading-4 tracking-[0.06em]">
              <span className="block">{productContent.noRinse.fr}</span>
              <span className="font-normal">{productContent.noRinse.en}</span>
            </span>
          )}

          <ProductActions product={item} />

          {isLotion && (
            <div className="mt-10 max-w-md space-y-6 border-t border-neutral-200 pt-6">
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-[0.08em]">Utilisation</h2>
                <p className="mt-2 text-sm leading-6 text-neutral-700">{productContent.usage.fr}</p>
              </div>
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-[0.08em]">Ingrédients (INCI)</h2>
                <p className="mt-2 text-xs leading-5 text-neutral-600">{productContent.ingredientsInci.join(", ")}</p>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="border-t border-neutral-100 bg-white px-5 py-12 sm:px-10 lg:px-16">
        <h2 className="text-center font-serif text-3xl tracking-[-0.03em] sm:text-4xl">Vous aimerez aussi</h2>
        <div className="mx-auto mt-8 grid max-w-[1600px] gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((relatedProduct) => (
            <ProductCard key={relatedProduct.id} product={relatedProduct} />
          ))}
        </div>
      </section>
    </main>
  );
}
