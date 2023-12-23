import { Color } from "@/types";

const API_URL = `${ process.env.NEXT_PUBLIC_API_URL }`;

const getColors = async (): Promise<Color[]> => {
  const res = await fetch(`${ API_URL }/colors`, { cache: 'no-store' });
  return res.json();
}

export default getColors;