import ProductItem from "./Item";
import Link from "next/link";
import productService from "@/app/services/products";

const ProductList = async () => {
  const products = await productService().getProducts();

  return (
    <section>
      <div className="text-2xl font-bold text-center py-4 bg-gray-200 mb-4">
        Products
      </div>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 p-4">
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${encodeURI(product.title.toLowerCase())}`}>
              <ProductItem product={product} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProductList;
