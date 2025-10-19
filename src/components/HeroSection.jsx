"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full h-[80vh] flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Background Image dengan parallax */}
      <div
        className="absolute inset-0"
        style={{
          transform: `translateY(${offsetY * 0.3}px)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <Image
          src="/masjid.png"
          alt="Masjid"
          fill
          className="object-cover brightness-75"
          priority
        />
      </div>

      {/* Overlay gradien */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/50"></div>

      {/* Konten */}
      <div className="relative z-10 text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-3 drop-shadow-lg">
        YAYASAN HIDAYATURROHMAN
        </h1>
        <p className="text-lg md:text-xl drop-shadow-md">
          “Tempat beribadah, belajar, dan berbuat baik.”
        </p>
      </div>
    </section>
  );
}
