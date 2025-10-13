"use client";

import React from "react";
import { motion } from "framer-motion";

async function getSurah(id) {
  const res = await fetch(`https://api.quran.gading.dev/surah/${id}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) throw new Error("Gagal mengambil data surah");

  const json = await res.json();
  return json.data;
}

export default async function SurahPage({ params }) {
  const surah = await getSurah(params.id);

  // Variants untuk animasi Framer Motion
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.05 } },
  };

  const ayahVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <main className="min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <h1 className="text-3xl font-bold text-center mb-2 text-gray-900 dark:text-white">
        {surah.name.transliteration.id} ({surah.name.short})
      </h1>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
        {surah.name.translation.id} • {surah.revelation.id} • {surah.numberOfVerses} Ayat
      </p>

      <motion.div
        className="space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {surah.verses.map((ayah) => (
          <motion.div
            key={ayah.number.inSurah}
            variants={ayahVariants}
            className="p-4 bg-white dark:bg-gray-800 shadow rounded-lg hover:shadow-md transition"
          >
            <p className="text-right text-2xl font-arabic mb-2 text-gray-900 dark:text-white">
              {ayah.text.arab}
            </p>
            <p className="text-gray-700 dark:text-gray-300">{ayah.translation.id}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Ayat {ayah.number.inSurah}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}
