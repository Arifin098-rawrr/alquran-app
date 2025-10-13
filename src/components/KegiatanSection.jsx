"use client";
import { motion } from "framer-motion";

export default function KegiatanSection() {
  const kegiatan = [
    { 
      title: "Pengajian Rutin", 
      desc: "Pengajian rutin diadakan setiap Senin-Kamis-Jumat untuk memperdalam ilmu agama." 
    },
    { 
      title: "Kajian Remaja", 
      desc: "Kajian khusus remaja untuk menumbuhkan keimanan dan kepedulian sosial." 
    },
    { 
      title: "Bakti Sosial", 
      desc: "Bakti sosial dilakukan tiap Minggu untuk membantu masyarakat sekitar/Memintal amal untuk masjid." 
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
    hover: { scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" },
  };

  return (
    <section className="bg-indigo-100 dark:bg-indigo-900 py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white">Kegiatan Kami</h2>

      <motion.div
        className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {kegiatan.map((item, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            whileHover="hover"
            className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg p-6 rounded-2xl cursor-pointer transition"
          >
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{item.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
