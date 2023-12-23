import { Product } from "@/types";

const API_URL = `${ process.env.NEXT_PUBLIC_API_URL }/products`;
const getProduct = async (productId: string): Promise<Product> => {
  const response = await fetch(`${ API_URL }/${ productId }`, { cache: 'no-store' });
  return response.json();
}

export default getProduct;