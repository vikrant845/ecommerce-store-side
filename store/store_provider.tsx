"use client";

import { Provider } from "react-redux";
import { store } from "./store";
import { useEffect, useState } from "react";

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  if (!isMounted) return null;
  
  return (
    <Provider store={ store }>
      { children }
    </Provider>
  );
}

export default StoreProvider;