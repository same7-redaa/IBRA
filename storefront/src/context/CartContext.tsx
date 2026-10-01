"use client";

import React, { createContext, useContext, useState } from "react";
import { ProductProps } from "@/components/ui/ProductCard";
import ToastNotification from "@/components/ui/ToastNotification";

interface CartItem extends ProductProps {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  cartCount: number;
  addToCart: (product: ProductProps) => void;
  removeFromCart: (id: string | number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [toastData, setToastData] = useState<{
    visible: boolean;
    productName: string;
  }>({
    visible: false,
    productName: "",
  });

  const addToCart = (product: ProductProps) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });

    // Show Bottom Right Toast Notification
    setToastData({
      visible: true,
      productName: product.name,
    });
  };

  const removeFromCart = (id: string | number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cartItems, cartCount, addToCart, removeFromCart }}
    >
      {children}
      {toastData.visible && (
        <ToastNotification
          productName={toastData.productName}
          onClose={() => setToastData((prev) => ({ ...prev, visible: false }))}
        />
      )}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
