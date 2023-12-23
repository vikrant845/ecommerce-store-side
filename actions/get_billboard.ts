import { Billboard } from "@/types";

const API_URL = `${ process.env.NEXT_PUBLIC_API_URL }/billboards`;

const getBillboard = async (id: string): Promise<Billboard> => {
  const response = await fetch(`${ API_URL }/${ id }`, { cache: 'no-store' });
  return response.json();
}

export default getBillboard;