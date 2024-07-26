import { ProductDetails } from "@/app/components/Product/Item";
import SalesTable from "@/app/components/Product/SalesTable";
import productService from "@/app/services/products";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const product = await productService().getProductBySlug(params.slug);

  if (!product) {
    return {
      title: "Product not found",
      description: "Product not found",
      openGraph: {
        images: [],
      },
    };
  }

  return {
    title: product.title,
    description: product.subtitle,
    openGraph: {
      images: [product.image],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const product = await productService().getProductBySlug(slug);

  if (!product) {
    return (
      <main>
        <div className="flex flex-col gap-3 items-center justify-center h-screen bg-red-100 ">
          <h1 className="text-2xl font-bold">
            Product{" "}
            <span className="text-red-500">
              <code>{slug}</code>
            </span>{" "}
            does not exist
          </h1>

          <Link
            href="/products"
            className="p-2 bg-green-700 text-white text-sm rounded-md text-center hover:bg-green-900 transition-colors duration-300 uppercase"
          >
            Go back to products
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="container mx-auto">
      <div className="grid gap-4 bg-gray-200 p-4 sm:grid-cols-1 md:grid-cols-[300px_minmax(0,_1fr)] min-h-screen">
        <div className="p-4 bg-white shadow-md rounded-md ">
          <ProductDetails product={product} />
        </div>

        <div className="flex flex-col gap-4">
          <div className="p-4 bg-white shadow-md rounded-md ">
            <SalesTable sales={product.sales} />
          </div>
        </div>
      </div>
    </main>
  );
}
