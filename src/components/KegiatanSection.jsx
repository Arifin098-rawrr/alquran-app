"use client";
import { motion } from "framer-motion";

export default function KegiatanSection() {
  const kegiatan = [
    { 
      title: "MI HIDAYATURROHMAN", 
      desc: [
        "Terakreditasi A Nomor:038/BAN-SM-Prov/SK/2018",
        "NSM: 111236030242",
        "NPSN: 60721326"
      ]
    },
    { 
      title: "MTs HIDAYATURROHMAN", 
      desc: [
        "Terakreditasi A Nomor:97/BAP-S/M-SK/X/2016",
        "NSM: 121236030192",
        "NPSN: 60729857"
      ]
    },
    { 
      title: "SMA HIRO", 
      desc: [
        "Terakreditasi B Nomor:100/BAP-S/M-SK/XI/2016",
        "NSS: 302300402005",
        "NPSN: 20613545"
      ]
    },
    { 
      title: "PONPES PUTRI HIDAYATURROHMAN", 
      desc: [
        "NSPP: 512280416719",
      ]
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
    hover: { scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" },
  };

  return (
    <section className="bg-indigo-100 dark:bg-indigo-900 py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white">
        Jenjang Pendidikan
      </h2>

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
            className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg p-6 rounded-2xl cursor-pointer transition text-left"
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white text-center">
              {item.title}
            </h3>

            <ul className="space-y-2 text-gray-700 dark:text-gray-300 list-disc list-inside">
              {item.desc.map((line, index) => (
                <li key={index}>{line}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
