import { Category } from "@/types";

const API_URL = `${ process.env.NEXT_PUBLIC_API_URL }/categories`;

const getCategory = async (id: string): Promise<Category> => {
  const res = await fetch(`${ API_URL }/${ id }`, { cache: 'no-store' });
  return res.json();
}

export default getCategory;