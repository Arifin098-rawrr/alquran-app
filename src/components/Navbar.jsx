import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 shadow-md bg-white dark:bg-gray-800">
      {/* Logo kiri */}
      <div className="w-[51px] h-[51px] rounded-[7px] overflow-hidden">
        <Image
          src="/logo-left.png"
          alt="Logo Kiri"
          width={51}
          height={51}
          className="object-cover"
        />
      </div>

      <h1 className="text-xl font-semibold">Masjid Al-Furqon</h1>

      <div className="flex items-center gap-2">
        <ThemeToggle />
      </div>
    </nav>
  );
}
