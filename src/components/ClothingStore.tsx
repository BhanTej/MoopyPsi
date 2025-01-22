"use client"

import React, { useState } from 'react';
import { Search, ShoppingCart } from 'lucide-react';

const ClothingStore = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [cartCount, setCartCount] = useState(0);
  
  // Mock product data
  const products = [
    { id: 1, name: 'Classic White T-Shirt', price: 29.99, category: 'T-Shirts', 
      image: '/api/placeholder/200/250' },
    { id: 2, name: 'Black Hoodie', price: 59.99, category: 'Hoodies', 
      image: '/api/placeholder/200/250' },
    { id: 3, name: 'Denim Jacket', price: 89.99, category: 'Jackets', 
      image: '/api/placeholder/200/250' },
    { id: 4, name: 'Cargo Pants', price: 69.99, category: 'Pants', 
      image: '/api/placeholder/200/250' },
    { id: 5, name: 'Graphic Print T-Shirt', price: 34.99, category: 'T-Shirts', 
      image: '/api/placeholder/200/250' },
    { id: 6, name: 'Zip-up Hoodie', price: 64.99, category: 'Hoodies', 
      image: '/api/placeholder/200/250' },
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Search and Cart */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="pl-8 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-2 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              
              <div className="relative">
                <ShoppingCart className="h-6 w-6 text-gray-600" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600">${product.price}</p>
                <button
                  onClick={addToCart}
                  className="mt-4 w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ClothingStore;