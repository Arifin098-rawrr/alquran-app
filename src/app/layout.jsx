import "./globals.css";

export const metadata = {
  title: "Masjid Al-Ikhlas",
  description: "Website resmi Masjid Al-Ikhlas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="transition-all duration-300">{children}</body>
    </html>
  );
}
