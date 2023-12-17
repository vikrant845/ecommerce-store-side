"use client";

import { Product } from "@/types";
import Image from "next/image";
import IconButton from "./icon_button";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "./currency";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { onOpen } from "@/store/slices/previewSlice";
import { addItem } from "@/store/slices/cartSlice";
import { RootState } from "@/store/store";
import useCart from "@/actions/use_cart";

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const cart = useCart();

  const handleClick = () => {
    router.push(`/product/${ data.id }`);
  }

  const onPreview = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    dispatch(onOpen(data));
  }

  const onAddtoCart = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    cart.addItem(data);
  }
  
  return (
    <div onClick={ handleClick } className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image 
          src={ data.images[0].url }
          alt="" 
          fill
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton 
              onClick={ onPreview }
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={ onAddtoCart } 
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>
      <div>
        <p className="font-semibold text-lg">{ data.name }</p>
        <p className="text-sm text-gray-500">{ data.category?.name }</p>
      </div>
      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  );
}

export default ProductCard;