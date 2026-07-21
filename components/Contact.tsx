import { ArrowRight, AtSign, Clock3, Leaf, Mail, MapPin, Music2, Phone, Share2, ShieldCheck } from "lucide-react";
import Image from "next/image";

import image from "@/app/assets/img1.png";

const contactDetails = [
  { icon: Mail, title: "Email", lines: ["contact@capipousse.com", "Nous répondons sous 24h"] },
  { icon: Phone, title: "Téléphone", lines: ["+212 6 00 00 00 00", "Lun – Ven : 9h00 – 18h00"] },
  { icon: MapPin, title: "Adresse", lines: ["Coopérative Konouz Watany", "232 Loudaya, Marrakech, Maroc"] },
  { icon: Clock3, title: "Horaires", lines: ["Lundi – Vendredi : 9h00 – 18h00", "Samedi : 9h00 – 14h00", "Dimanche : Fermé"] },
];

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#f8f8f6] px-5 py-10 sm:px-10 lg:px-16 lg:py-12">
      <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-52 overflow-hidden xl:block"><Image src={image} alt="" fill className="object-cover object-[68%_center] opacity-15" /><div className="absolute inset-0 bg-gradient-to-r from-[#f8f8f6]/45 via-[#f8f8f6]/75 to-[#f8f8f6]" /></div>
      <div className="relative mx-auto grid max-w-[1600px] items-start gap-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="min-w-0 px-2 py-4 xl:pl-24">
          <p className="text-sm font-semibold uppercase tracking-[0.24em]">Nous sommes là pour vous</p>
          <h2 className="mt-3 font-serif text-4xl leading-none tracking-[-0.05em] sm:text-5xl lg:text-[3.5rem]">Contactez-nous</h2>
          <span className="mt-4 block h-px w-11 bg-black" />
          <p className="mt-5 max-w-md text-sm leading-6">Une question, un conseil ou une demande particulière ?<br />Notre équipe est à votre écoute et vous répondra dans les plus brefs délais.</p>
          <div className="mt-7 max-w-md space-y-5">{contactDetails.map(({ icon: Icon, title, lines }, index) => <div key={title} className={`flex gap-4 ${index > 2 ? "border-t border-neutral-300 pt-5" : ""}`}><span className="grid size-15 shrink-0 place-items-center rounded-full bg-white shadow-sm"><Icon size={28} strokeWidth={1.3} /></span><div><h3 className="text-sm font-semibold uppercase">{title}</h3>{lines.map((line) => <p key={line} className="mt-0.5 text-sm leading-5">{line}</p>)}</div></div>)}</div>
        </div>

        <div className="min-w-0 rounded-xl border border-neutral-200 bg-white p-5 shadow-sm sm:p-7"><h3 className="text-base font-semibold uppercase tracking-[0.06em]">Envoyez-nous un message</h3><form className="mt-6"><div className="grid gap-4 sm:grid-cols-2"><label className="sr-only" htmlFor="name">Nom complet</label><input id="name" required placeholder="Nom complet *" className="h-11 rounded border border-neutral-300 px-3 text-sm outline-none focus:border-black" /><label className="sr-only" htmlFor="email">Email</label><input id="email" type="email" required placeholder="Email *" className="h-11 rounded border border-neutral-300 px-3 text-sm outline-none focus:border-black" /><label className="sr-only" htmlFor="phone">Téléphone</label><input id="phone" placeholder="Téléphone" className="h-11 rounded border border-neutral-300 px-3 text-sm outline-none focus:border-black" /><label className="sr-only" htmlFor="subject">Sujet</label><input id="subject" placeholder="Sujet" className="h-11 rounded border border-neutral-300 px-3 text-sm outline-none focus:border-black" /></div><label className="mt-4 block text-sm font-medium" htmlFor="message">Votre message *</label><textarea id="message" required maxLength={500} placeholder="Décrivez votre demande en quelques lignes..." className="mt-2 h-36 w-full resize-none rounded border border-neutral-300 p-3 text-sm outline-none focus:border-black" /><button type="submit" className="mt-5 flex w-full items-center justify-center gap-5 bg-black py-4 text-sm font-medium uppercase tracking-[0.08em] text-white">Envoyer le message <ArrowRight size={22} strokeWidth={1.3} /></button></form><div className="mt-7 grid gap-4 border-t border-neutral-200 pt-6 sm:grid-cols-3">{[{ icon: Clock3, title: "Réponse rapide", text: "Sous 24h ouvrées" }, { icon: ShieldCheck, title: "Service client dédié", text: "À votre écoute" }, { icon: Leaf, title: "Satisfaction garantie", text: "Nous vous accompagnons" }].map(({ icon: Icon, title, text }, index) => <div key={title} className={`text-center ${index > 0 ? "sm:border-l sm:border-neutral-200" : ""}`}><Icon className="mx-auto" size={31} strokeWidth={1.3} /><p className="mt-2 text-[0.65rem] font-semibold uppercase">{title}</p><p className="mt-1 text-xs">{text}</p></div>)}</div></div>
      </div>
      <div className="relative mx-auto mt-8 grid max-w-[1600px] items-center gap-6 rounded-xl border border-neutral-200 bg-white px-6 py-5 lg:grid-cols-[1.2fr_1fr_auto]"><div className="flex items-center gap-5"><span className="grid size-16 shrink-0 place-items-center rounded-full bg-neutral-100"><Mail size={34} strokeWidth={1.25} /></span><div><h3 className="text-sm font-semibold uppercase tracking-[0.05em]">Restez connecté</h3><p className="mt-1 text-sm leading-5">Inscrivez-vous à notre newsletter et recevez des conseils, des offres exclusives et nos nouveautés.</p></div></div><form className="flex overflow-hidden rounded border border-neutral-300"><label className="sr-only" htmlFor="newsletter">Votre adresse email</label><input id="newsletter" type="email" placeholder="Votre adresse email" className="min-w-0 flex-1 px-4 py-3 text-sm outline-none" /><button type="submit" className="bg-black px-6 text-xs font-semibold uppercase tracking-[0.05em] text-white">S’inscrire</button></form><div className="border-t border-neutral-200 pt-4 text-center lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0"><p className="text-xs font-semibold uppercase tracking-[0.06em]">Suivez-nous</p><div className="mt-3 flex justify-center gap-4"><a href="#" aria-label="Instagram"><AtSign size={25} /></a><a href="#" aria-label="Facebook"><Share2 size={25} /></a><a href="#" aria-label="TikTok"><Music2 size={25} /></a></div></div></div>
    </section>
  );
}
