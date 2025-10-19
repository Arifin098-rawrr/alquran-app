import "./globals.css";

export const metadata = {
  title: "YAYASAN HIDAYATURROHMAN",
  description: "Website resmi Yayasan Hidayaturrohman",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/Logo.png" type="image/png" sizes="32x32" />
      </head>
      <body className="transition-all duration-300">{children}</body>
    </html>
  );
}
