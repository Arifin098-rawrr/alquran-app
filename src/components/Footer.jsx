"use client";

import { FaInstagram, FaYoutube, FaFacebook, FaWhatsapp } from "react-icons/fa";

export default function Footer({ darkMode }) {
  return (
    <footer
      className={`py-10 px-6 text-center border-t ${
        darkMode
          ? "bg-gray-900 text-gray-300 border-gray-700"
          : "bg-gray-100 text-gray-700 border-gray-300"
      }`}
    >
      <div className="mb-4 text-lg font-medium">🌐 Ikuti kami di sosial media:</div>

      <div className="flex justify-center gap-6 mb-6">
        {/* Facebook */}
        <a
          href="https://www.facebook.com/hiroteluknaga" // 🔵 Ganti dengan link FB kamu
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-blue-600 hover:scale-110 transition transform"
        >
          <FaFacebook size={24} />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/hiroteluknaga?r=nametag"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-pink-500 hover:scale-110 transition transform"
        >
          <FaInstagram size={24} />
        </a>

        {/* YouTube */}
        <a
          href="https://www.youtube.com/channel/UCkmvfA4BSUu0VuxXpmNGbvg"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-red-600 hover:scale-110 transition transform"
        >
          <FaYoutube size={24} />
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/62 896-5460-4540
          " // 💚 Ganti dengan nomor WA kamu (format internasional tanpa +)
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-green-500 hover:scale-110 transition transform"
        >
          <FaWhatsapp size={24} />
        </a>
      </div>

      {/* Alamat link ke Maps */}
      <p className="text-sm md:text-base">
        📍 Alamat:{" "}
        <a
          href="https://maps.app.goo.gl/ogbrQkoiVN9xUvvk7"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 hover:underline"
        >
          Klik untuk melihat di Maps
        </a>
      </p>
      <p className="text-sm md:text-base mt-2">YAYASAN HIDAYATURROHMAN</p>
    </footer>
  );
}
