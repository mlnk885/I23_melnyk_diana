
import ProductSearch from "../components/ProductSearch";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  category: string;
};

async function getProducts(): Promise<Product[]> {
  const response = await fetch(
    "https://dummyjson.com/products?limit=30",
    {
      next: { revalidate: 3600 },
    }
  );

  if (!response.ok) {
    throw new Error("Не вдалося завантажити товари");
  }

  const data: { products: Product[] } = await response.json();

  return data.products;
}

export default async function CatalogPage() {
  const products = await getProducts();

  return (
    <main className="catalog-page">
      <span className="eyebrow">НАШ АСОРТИМЕНТ</span>

      <h1>Каталог товарів</h1>

      <p className="catalog-description">
        Обирай сучасну техніку та інші товари для себе.
      </p>

      <ProductSearch products={products} />
    </main>
  );
}
