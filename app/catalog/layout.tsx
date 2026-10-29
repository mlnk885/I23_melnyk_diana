
import Link from "next/link";

export default function CatalogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="catalog-layout">
      <div className="catalog-menu">
        <Link href="/catalog">Усі товари</Link>
        <Link href="/catalog/smartphones">Смартфони</Link>
        <Link href="/catalog/laptops">Ноутбуки</Link>
      </div>

      {children}
    </section>
  );
}
