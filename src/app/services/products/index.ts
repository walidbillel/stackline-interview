import { MOCK_API_RESPONSE } from "../../data";

const productService = () => {
  // This is where we get the products whether from an API that we set locally in our app, a third party service, or a database. It won't matter to the rest of the app where the data comes from.

  const getProducts = async () => {
    return MOCK_API_RESPONSE;
  };

  const getProductBySlug = async (slug: string) =>
    MOCK_API_RESPONSE.find(
      (product) => encodeURI(product.title.toLowerCase()) === slug
    );

  return {
    getProducts,
    getProductBySlug,
  };
};

export default productService;
