// src/context/ProductContext.tsx
"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react';

// Types
export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
}

interface ProductContextType {
  products: Product[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  cartCount: number;
  setCartCount: (count: number) => void;
  filteredProducts: Product[];
  addToCart: () => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

// Mock data - Later this will come from your backend
const initialProducts = [
  { id: 1, name: 'Cat Sweater', price: 29.99, category: 'Sweaters', 
    image: '/tempimages/FatCatSweater.jpg' },
  { id: 2, name: 'Cat Hoodie', price: 59.99, category: 'Hoodies', 
    image: '/tempimages/CatHoodie.jpg' },
  { id: 3, name: 'Cat Tutu', price: 89.99, category: 'Dresses', 
    image: '/tempimages/CatTutu.jpg' },
];

export function ProductProvider({ children }: { children: ReactNode }) {
  const [products] = useState<Product[]>(initialProducts);
  const [searchQuery, setSearchQuery] = useState('');
  const [cartCount, setCartCount] = useState(0);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <ProductContext.Provider value={{
      products,
      searchQuery,
      setSearchQuery,
      cartCount,
      setCartCount,
      filteredProducts,
      addToCart
    }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
}