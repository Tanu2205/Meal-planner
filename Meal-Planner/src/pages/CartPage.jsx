import React from 'react';
import { useCart } from '../components/CartContext';
import { NavLink } from 'react-router-dom';

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Your Cart</h1>
      {cartItems.length > 0 ? (
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b py-4">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
              <div className="flex-1 px-4">
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-gray-700">Quantity: {item.quantity}</p>
                <p className="text-green-500 font-bold">{item.price * item.quantity*10}&#8377;</p>
              </div>
              <div className='flex flex-col gap-1'>
              <button 
                onClick={() => removeFromCart(item.id)}
                className="bg-orange text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Remove
              </button>
              <button 
                
                className="bg-green text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Buy Now
              </button>
              </div>
            </div>
          ))}
          <div className="text-right mt-4 font-bold text-xl">
            Total: {cartItems.reduce((total, item) => total + item.price * item.quantity*10, 0) }&#8377;
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500 text-xl">Your cart is empty. Add items to your cart by <NavLink to="/quickbasket" className="text-blue font-bold font-sans text-2xl hover:text-gray-200">Quick basket !!</NavLink>
</p>
      )}
    </div>
  );
};

export default CartPage;
