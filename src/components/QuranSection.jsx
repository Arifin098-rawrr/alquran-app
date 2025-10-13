"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function QuranSection() {
  const [surahs, setSurahs] = useState([]);
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(9); // jumlah surah awal

  useEffect(() => {
    fetch("https://api.quran.gading.dev/surah")
      .then((res) => res.json())
      .then((data) => setSurahs(data.data));
  }, []);

  const filteredSurahs = surahs.filter((surah) =>
    surah.name.transliteration.id.toLowerCase().includes(search.toLowerCase())
  );

  const loadMore = () => {
    setVisibleCount((prev) => prev + 9);
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
    hover: { scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" },
  };

  return (
    <section className="max-w-6xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">
        📖 Baca Al-Qur’an
      </h2>

      {/* Search */}
      <input
        type="text"
        placeholder="Cari surah..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 rounded-lg border bg-white dark:bg-gray-800 dark:text-white mb-8 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
      />

      {/* Surah Grid */}
      <motion.div
        className="grid md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {filteredSurahs.slice(0, visibleCount).map((surah) => (
          <motion.div
            key={surah.number}
            variants={cardVariants}
            whileHover="hover"
            className="cursor-pointer"
          >
            <Link href={`/surah/${surah.number}`}>
              <div className="p-5 rounded-2xl shadow-lg bg-white/90 dark:bg-gray-800/90 transition">
                <h2 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">
                  {surah.number}. {surah.name.transliteration.id}
                </h2>
                <p className="italic text-gray-600 dark:text-gray-300">
                  {surah.name.translation.id}
                </p>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Ayat: {surah.numberOfAyahs}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Load More Button */}
      {visibleCount < filteredSurahs.length && (
        <div className="text-center mt-8">
          <motion.button
            onClick={loadMore}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition"
          >
            Load More
          </motion.button>
        </div>
      )}
    </section>
  );
}
