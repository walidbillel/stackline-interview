import Hero from "./components/Hero";
import ProductList from "./components/Product/List";

export default function Home() {
  return (
    <main className="container mx-auto">
      <Hero />
      <ProductList />
    </main>
  );
}
