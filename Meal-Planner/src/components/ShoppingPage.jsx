import React from 'react';
import { useCart } from '../components/CartContext';
import { useNavigate } from 'react-router-dom';
import items from '../components/CartItems';

const ShoppingPage = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();  // Initialize useNavigate

  const handleAddToCart = (item) => {
    addToCart(item);              // Add item to cart
    navigate('/cart');            // Navigate to Cart page immediately
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Food & Grains Store</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {items.map(item => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img className="w-full h-48 object-cover" src={item.image} alt={item.name} />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="text-gray-700">{item.description}</p>
              <p className="text-green-500 font-bold mt-2">{item.price} &#8377;</p>
              <button 
                onClick={() => handleAddToCart(item)}  // Use our custom handle function
                className="mt-4 bg-blue text-white px-4 py-2 rounded-3xl hover:bg-blue-600"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingPage;
