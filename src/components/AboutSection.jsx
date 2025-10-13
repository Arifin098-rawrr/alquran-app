"use client";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="flex justify-center py-16 px-6 bg-indigo-50 dark:bg-gray-900">
      <motion.div
        className="max-w-4xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg rounded-2xl p-10 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold mb-6">Tentang Kami</h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Masjid Al-Furqon adalah tempat ibadah dan pusat kegiatan umat Islam yang
          berfokus pada dakwah, pendidikan, dan sosial. Kami berkomitmen untuk
          menjadi wadah kebaikan dan kebersamaan bagi masyarakat sekitar.
        </p>
      </motion.div>
    </section>
  );
}
