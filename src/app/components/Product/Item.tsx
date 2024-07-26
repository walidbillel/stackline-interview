import { MOCK_API_RESPONSE } from "@/app/data";
import Image from "next/image";
import { useMemo } from "react";

export interface ProductItemProps {
  product: (typeof MOCK_API_RESPONSE)[0];
}

export const ProductDetails: React.FC<ProductItemProps> = ({ product }) => {
  const { title, image, subtitle, brand, reviews, retailer, tags, sales } =
    product;

  const rating = useMemo(() => {
    const total = reviews.reduce((acc, review) => acc + review.score, 0);
    return total / reviews.length;
  }, [reviews]);

  const ratingCount = useMemo(() => reviews.length, [reviews]);

  const totalUnitsSold = useMemo(() => {
    return sales.reduce((acc, sale) => acc + sale.unitsSold, 0);
  }, [sales]);

  return (
    <>
      <div className="relative w-full h-96">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
        />
      </div>

      <div className="p-4 space-y-2">
        <div className="text-xl font-bold">{title}</div>
        <p className="text-sm text-gray-500">{subtitle}</p>
        <div className="flex items-center space-x-2">
          <div
            className={`px-2 py-1 text-sm font-bold rounded-full ${
              totalUnitsSold > 1000 ? "bg-green-500" : "bg-gray-200"
            }`}
          >
            {rating.toFixed(1)}
          </div>
          <div
            className={`text-sm ${
              totalUnitsSold > 1000 ? "text-green-800" : "text-gray-500"
            }`}
          >
            {ratingCount > 1
              ? `${ratingCount} reviews`
              : `${ratingCount} review`}
          </div>
        </div>
        <div className="text-sm text-gray-500 pt-6">
          {brand} - {retailer}
        </div>
        <hr className="w-full border-gray-200" />
        <div className="flex items-center flex-wrap gap-2 py-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-sm border border-gray-200"
            >
              {tag}
            </span>
          ))}
        </div>
        <hr className="w-full border-gray-200" />
      </div>
    </>
  );
};

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <article className="p-4 border border-gray-200 shadow-md rounded-md min-h-[400px]">
      <ProductDetails product={product} />
    </article>
  );
};

export default ProductItem;
