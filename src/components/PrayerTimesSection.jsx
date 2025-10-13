"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function PrayerTimesSection() {
  const [times, setTimes] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (pos) => {
        const { latitude, longitude } = pos.coords;
        const res = await fetch(
          `https://api.aladhan.com/v1/timings?latitude=${latitude}&longitude=${longitude}&method=2`
        );
        const data = await res.json();
        setTimes(data.data.timings);
        setLoading(false);
      });
    } else {
      alert("Izin lokasi diperlukan untuk menampilkan waktu shalat.");
      setLoading(false);
    }
  }, []);

  const displayed = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];

  return (
    <section className="bg-green-100 dark:bg-green-900 py-16 px-6">
      <h2 className="text-3xl font-bold mb-8 text-center">🕋 Waktu Shalat Hari Ini</h2>

      {loading ? (
        <p className="text-center text-gray-600 dark:text-gray-300">Memuat waktu shalat...</p>
      ) : times ? (
        <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {displayed.map((key, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="p-4 rounded-2xl shadow-lg bg-white/90 dark:bg-gray-800/90 hover:scale-105 hover:shadow-2xl transition cursor-pointer">
                <h3 className="text-lg font-semibold mb-2">{key}</h3>
                <p className="text-green-700 dark:text-green-300 font-bold text-xl">{times[key]}</p>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <p className="text-center text-red-500">Gagal memuat waktu shalat.</p>
      )}
    </section>
  );
}
