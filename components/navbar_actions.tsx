"use client";

import { ShoppingBag } from 'lucide-react';
import { useEffect, useState } from "react";
import Button from "./ui/button";
import { useRouter } from 'next/navigation';
import useCart from '@/actions/use_cart';

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();
  const cart = useCart();

  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  if (!isMounted) return null;
  
  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button onClick={ () => router.push('/cart') } className="flex items-center rounded-full bg-black px-4 py-2">
        <ShoppingBag
          size={20}
          color="white"
        />
        <span className="ml-2 text-sm font-medium text-white"></span>
      </Button>
    </div>
  );
}

export default NavbarActions;