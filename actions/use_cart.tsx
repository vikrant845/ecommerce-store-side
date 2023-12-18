import { Product } from "@/types";
import toast from "react-hot-toast";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface UseCartProps {
  items: Product[];
  addItem: (product: Product) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<UseCartProps>((set, get) => ({
    items: [],
    addItem: (data: Product) => {
      const currentItem = get().items;
      const existingItem = currentItem.find(item => item.id === data.id);

      if (existingItem) return toast('Item already present in the cart');
      set({ items: [...currentItem, data] });
      toast.success('Item added to cart');
    },
    removeItem: (id: string) => {
      const currentItems = get().items;
      set({ items: [...currentItems.filter(item => item.id !== id)] })
    },
    removeAll: () => {
      set({ items: [] })
    }
  }), {
    name: 'cart-storage',
    storage: createJSONStorage(() => localStorage)
  })
);

export default useCart;