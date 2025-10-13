"use client";

import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

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
        {/* TikTok */}
        <a
          href="https://www.tiktok.com/@hirma.al.furqon?_t=8obqbO3cf8y&_r=1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-black hover:scale-110 transition transform"
        >
          <FaTiktok size={24} />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/hirma.alfurqon/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-pink-500 hover:scale-110 transition transform"
        >
          <FaInstagram size={24} />
        </a>

        {/* YouTube */}
        <a
          href="https://www.youtube.com/@hirmaalfurqon?si=l9FeL0_UQ0hiC82V"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-red-600 hover:scale-110 transition transform"
        >
          <FaYoutube size={24} />
        </a>
      </div>

      {/* Alamat link ke Maps */}
      <p className="text-sm md:text-base">
        📍 Alamat:{" "}
        <a
          href="https://maps.app.goo.gl/rFk9qUxsT8qwDNrp9"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 hover:underline"
        >
          Klik untuk melihat di Maps
        </a>
      </p>
      <p className="text-sm md:text-base mt-2">Masjid Al-Furqon</p>
    </footer>
  );
}
