"use client"

import React from 'react';
import Link from 'next/link';
import { Cat, ShoppingCart, Search } from 'lucide-react';
import { useProducts } from '@/context/ProductContext';

const Header = () => {
  const { searchQuery, setSearchQuery, cartCount } = useProducts();

  return (
    <nav className="bg-gradient-to-r from-pink-100 to-purple-100 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Brand Name */}
          <div className="flex items-center space-x-2">
            <Cat className="h-10 w-10 text-purple-600" />
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold text-purple-600 font-serif tracking-wide">
                MoopyPsinets
              </h1>
              <p className="text-lg text-purple-400 italic mt-1">
                Purrfect Fashion for Your Feline
              </p>
            </div>
          </div>

          {/* Search and Cart */}
          <div className="flex items-center space-x-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 pl-10 pr-4 py-3 rounded-lg border-2 border-purple-200 
                          focus:outline-none focus:border-purple-400 transition-colors
                          text-purple-800 placeholder-purple-300"
              />
              <Search className="absolute left-3 top-3.5 h-5 w-5 text-purple-400" />
            </div>
            
            <div className="relative cursor-pointer group">
              <ShoppingCart className="h-7 w-7 text-purple-600 group-hover:text-purple-800 transition-colors" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs 
                               rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-purple-600 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center space-x-8 h-12">
            <Link href="/" className="hover:text-pink-200 transition-colors">
              Home
            </Link>
            <Link href="/shop" className="hover:text-pink-200 transition-colors">
              Shop
            </Link>
            <Link href="/new" className="hover:text-pink-200 transition-colors">
              New Arrivals
            </Link>
            <Link href="/about" className="hover:text-pink-200 transition-colors">
              About Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;