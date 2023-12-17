"use client";

import Button from "@/components/ui/button";
import { cn } from "@/lib/urils";
import { Color, Size } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";

interface FilterProps {
  data: (Size | Color)[];
  name: string;
  valueKey: string;
}

const Filter: React.FC<FilterProps> = ({
  data,
  name,
  valueKey
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedValue = searchParams.get(valueKey);

  const handleClick = (id: string) => {
    const current = qs.parse(searchParams.toString());
    const query = {
      ...current,
      [valueKey]: id
    };

    if (current[valueKey] === id) query[valueKey] = null;

    const url = qs.stringifyUrl({
      url: window.location.href,
      query
    }, { skipNull: true });

    router.push(url);
  }

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">
        {name}
      </h3>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-2">
        { data.map(dataItem => (
          <div key={ dataItem.id } className="flex items-center">
            <Button
              className={cn(
                'rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300',
                selectedValue === dataItem.id && 'bg-black text-white'
              )}
              onClick={ () => handleClick(dataItem.id) }
            >
              { dataItem.name }
            </Button>
          </div>
        )) }
      </div>
    </div>
  );
}

export default Filter;