import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";

export default function CategoryGrid() {
  const categories = [
    {
      title: "Face",
      desc: "Cosmetic facial procedures, rhinoplasty & lifts",
      img: "/images/home/Doctor_01.webp",
      href: "/services#face",
    },
    {
      title: "Body",
      desc: "Liposuction, tummy tucks & body contouring",
      img: "/images/home/Liposuction-Tummy360.webp",
      href: "/services#body",
    },
    {
      title: "Hair",
      desc: "PRP therapy, transplants & restoration",
      img: "/images/home/Grade-2-for-gynecomastia-treatment.webp",
      href: "/services#hair",
    },
    {
      title: "Non-Surgical",
      desc: "Injectables, Botox & chemical skin peels",
      img: "/images/home/Doctor_01.webp",
      href: "/services#non-surgical",
    },
  ];

  return (
    <section className="py-24 bg-brand-bg text-brand-text border-b border-brand-border/40">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, idx) => (
            <Link
              key={idx}
              href={cat.href}
              className="relative group block aspect-3/4 overflow-hidden border border-brand-border transition-all duration-700"
            >
              <Image
                src={cat.img}
                alt={cat.title}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover group-hover:scale-105 transition-all duration-1000 brightness-40"
              />
              <div className="absolute inset-0 bg-linear-to-t from-brand-bg via-brand-bg/40 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <span className="text-brand-accent text-xs tracking-widest uppercase font-mono mb-2 block">
                  Category
                </span>
                <h3 className="font-serif text-3xl text-brand-text font-light group-hover:text-brand-accent transition-colors duration-300">
                  {cat.title}
                </h3>
                <p className="text-brand-text-sec text-xs mt-2 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {cat.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
