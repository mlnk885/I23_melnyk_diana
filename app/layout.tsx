
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "TechStore — магазин техніки",
  description: "Сучасні смартфони, ноутбуки та техніка для кожного.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body>
        <header className="site-header">
          <Link href="/" className="logo">
            <span className="logo-icon">T</span>
            Tech<span>Store</span>
          </Link>

          <nav className="main-nav">
            <Link href="/">Головна</Link>
            <Link href="/catalog">Каталог</Link>
            <Link href="/catalog/smartphones">Смартфони</Link>
            <Link href="/catalog/laptops">Ноутбуки</Link>
            <Link href="/contacts">Контакти</Link>
          </nav>
        </header>

        {children}

        <footer className="site-footer">
          <Link href="/" className="logo">
            Tech<span>Store</span>
          </Link>
          <p>© 2026 TechStore. Магазин сучасної техніки.</p>
        </footer>
      </body>
    </html>
  );
}
