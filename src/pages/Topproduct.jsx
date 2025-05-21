import React from 'react';
import topProducts from '../assets/DataTP.json';

const TopProductGrid = () => {
  return (
    <div className="p-6 bg-pink-50 min-h-screen">
      <h2 className="text-3xl font-extrabold text-pink-700 mb-6 text-center">Top Produk</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {topProducts.map(product => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-lg shadow-pink-200 hover:shadow-pink-300 transition transform hover:-translate-y-1 hover:scale-[1.02] p-4"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
            <p className="text-pink-600 font-bold text-base">Rp {product.price.toLocaleString('id-ID')}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProductGrid;
