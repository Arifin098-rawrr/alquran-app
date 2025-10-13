"use client";

import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import KegiatanSection from "../components/KegiatanSection";
import QuranSection from "../components/QuranSection";
import PrayerTimesSection from "../components/PrayerTimesSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <KegiatanSection />
      <QuranSection />
      <PrayerTimesSection />
      <Footer />
    </>
  );
}
