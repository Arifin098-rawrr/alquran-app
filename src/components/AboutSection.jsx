"use client";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="flex justify-center py-16 px-6 bg-indigo-50 dark:bg-gray-900">
      <motion.div
        className="max-w-5xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg rounded-2xl p-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {/* TENTANG KAMI */}
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">
          Tentang Kami
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg text-justify leading-relaxed mb-10">
          Yayasan Pendidikan Hidayaturrohman berdiri pada tahun 1983 berkat usaha
          K.H.M. Karta. Selain aktif di salah satu partai politik waktu itu, beliau
          ingin memberikan sumbangsih nyata kepada masyarakat sekitar dengan
          menyelenggarakan pengajian-pengajian keagamaan. Pada tahun 1986 secara
          formal berdiri Madrasah Ibtidaiyah (MI) Hidayaturrohman, kemudian
          disusul Madrasah Tsanawiyah (MTs) pada tahun 1998 dan SMA Hiro pada
          tahun 2006.
          <br /><br />
          Sepeninggal K.H.M. Karta, Yayasan Pendidikan Hidayaturrohman terus
          berkembang, baik dari segi kepercayaan masyarakat maupun kualitas
          pendidikan. Saat ini MI Hidayaturrohman memiliki 15 rombel, MTs 23
          rombel, dan SMA Hiro 18 rombel. Pada tahun 2018, berdirilah Pondok
          Pesantren Putri Hidayaturrohman dengan program unggulan Tahfidz Qur’an
          yang terus berkembang dan bermanfaat bagi masyarakat.
          <br /><br />
          Semua keberhasilan ini tercapai berkat komitmen seluruh stakeholder di
          Yayasan Pendidikan Hidayaturrohman dalam mengembangkan kualitas
          pendidikan.
        </p>

        {/* VISI & MISI */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
            Visi & Misi
          </h2>

          {/* VISI */}
          <div className="mb-10 text-center">
            <h3 className="text-2xl font-semibold text-indigo-700 dark:text-indigo-400 mb-4">
              🌟 Visi
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
              Berakhlak mulia, disiplin, terampil, berprestasi, dan peduli lingkungan.
            </p>
          </div>

          {/* MISI */}
          <div>
            <h3 className="text-2xl font-semibold text-indigo-700 dark:text-indigo-400 mb-4 text-center">
              🎯 Misi
            </h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-lg max-w-3xl mx-auto text-justify leading-relaxed space-y-2">
              <li>
                Mengintegrasikan akhlak dan budi pekerti dalam setiap kegiatan
                sekolah, khususnya dalam proses pembelajaran.
              </li>
              <li>
                Membuat peraturan yang dinamis dengan tetap mengedepankan
                norma-norma yang berlaku secara umum, sehingga menumbuhkan
                sikap disiplin.
              </li>
              <li>
                Mengarahkan kegiatan sekolah ke arah sikap kreatif, inovatif,
                dan mandiri untuk menghasilkan lulusan yang siap melanjutkan ke
                jenjang lebih tinggi.
              </li>
              <li>
                Mengupayakan pembelajaran dan bimbingan yang efektif sehingga
                setiap peserta didik mampu mengembangkan potensinya untuk hidup
                bermasyarakat dan melanjutkan pendidikan.
              </li>
              <li>
                Menciptakan kondisi lingkungan sekolah yang mampu memotivasi
                semangat belajar peserta didik.
              </li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
