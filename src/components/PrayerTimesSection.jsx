"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function PrayerTimesSection() {
  const [times, setTimes] = useState(null);
  const [city, setCity] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLocationAndTimes() {
      try {
        if (!navigator.geolocation) {
          alert("Browser tidak mendukung geolokasi.");
          setLoading(false);
          return;
        }

        navigator.geolocation.getCurrentPosition(async (pos) => {
          const { latitude, longitude } = pos.coords;

          // 🔹 Dapatkan nama kota via Reverse Geocoding (OpenStreetMap)
          const geoRes = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          );
          const geoData = await geoRes.json();

          // Ambil nama kota dari hasil geocoding
          const detectedCity =
            geoData.address.city ||
            geoData.address.town ||
            geoData.address.village ||
            geoData.address.county ||
            "Jakarta";

          setCity(detectedCity);

          // 🔹 Ambil waktu shalat pakai MUI (method=20)
          const timeRes = await fetch(
            `https://api.aladhan.com/v1/timingsByCity?city=${detectedCity}&country=Indonesia&method=20`
          );
          const timeData = await timeRes.json();

          setTimes(timeData.data.timings);
          setLoading(false);
        });
      } catch (err) {
        console.error("Gagal ambil waktu shalat:", err);
        setLoading(false);
      }
    }

    fetchLocationAndTimes();
  }, []);

  const displayed = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];

  return (
    <section className="bg-green-100 dark:bg-green-900 py-16 px-6">
      <h2 className="text-3xl font-bold mb-8 text-center">🕋 Waktu Shalat Hari Ini</h2>

      {loading ? (
        <p className="text-center text-gray-600 dark:text-gray-300">
          Memuat lokasi & waktu shalat...
        </p>
      ) : times ? (
        <>
          <p className="text-center mb-6 text-gray-700 dark:text-gray-300">
            Lokasi terdeteksi: <strong>{city}</strong>
          </p>

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
                  <p className="text-green-700 dark:text-green-300 font-bold text-xl">
                    {times[key]}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </>
      ) : (
        <p className="text-center text-red-500">
          Gagal memuat waktu shalat. Pastikan izin lokasi aktif.
        </p>
      )}
    </section>
  );
}
