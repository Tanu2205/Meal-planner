import React from "react";
import { useCart } from "../components/CartContext";
import Navbar from "../components/Navbar";
import { NavLink } from "react-router-dom";
const CartPage = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0)
    return (
    <>
    <div className="fixed left-0 top-0 h-full">
          <Navbar />
    </div>
    <h1 className="text-center mt-10 text-2xl">Cart is empty, Add Items from : <NavLink to="/quickbasket" className="font-bold text-green">Quick Basket</NavLink></h1>
    
    </>);
    

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="fixed left-0 top-0 h-full">
          <Navbar />
        </div>
      <h1 className="text-3xl mb-6 text-center">Your Cart</h1>

      <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center mb-4 border-b pb-2"
          >
            <div>
              <p className="font-semibold">{item.name}</p>
              <p>Qty: {item.quantity}</p>
              <p>Price: ₹{item.price * item.quantity}</p>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Remove
            </button>
          </div>
        ))}

        <div className="mt-6 flex justify-between items-center">
          <p className="text-xl font-bold">Total: ₹{totalPrice}</p>
          <button
            onClick={() => {
              alert(`Purchased items worth ₹${totalPrice}`);
              clearCart();
            }}
            className="bg-green text-white px-5 py-3 rounded-lg"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
