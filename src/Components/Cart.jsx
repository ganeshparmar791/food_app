import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import ItemCard from "./ItemCard";
import { useState } from "react";

const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);
  const cartItems = useSelector((state) => state.cart.cart);
  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );
  const navigate = useNavigate();

  return (
    <>
      {/* Cart Drawer */}
      <div
        className={`fixed right-0 top-0 w-full lg:w-[30%] h-full p-4 bg-slate-100 ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 z-50`}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">My Order</h2>
          <IoMdClose
            onClick={() => setActiveCart(!activeCart)}
            className="text-gray-600 hover:text-red-500 text-2xl cursor-pointer"
          />
        </div>

        {/* Scrollable Items */}
        <div className="h-[calc(100%-8rem)] overflow-y-auto pr-2">
          {cartItems.length > 0 ? (
            cartItems.map((food) => (
              <ItemCard
                key={food.id}
                id={food.id}
                name={food.name}
                price={food.price}
                img={food.img}
                qty={food.qty}
              />
            ))
          ) : (
            <h3 className="text-center text-lg font-semibold text-gray-700">
              Your cart is empty
            </h3>
          )}
          {/* Added bottom padding for non-overlapping */}
          <div className="h-16"></div>
        </div>

        {/* Fixed Footer */}
        <div className="absolute bottom-0 left-0 w-full bg-slate-200 p-4">
          <h3 className="text-gray-800 font-semibold">Items: {totalQty}</h3>
          <h3 className="text-gray-800 font-semibold">
            Total Amount: ₹{totalPrice}
          </h3>
          <button
            onClick={() => navigate("/success")}
            className="mt-4 bg-green-500 text-white font-bold w-full py-2 rounded-lg hover:bg-green-600"
          >
            Checkout
          </button>
        </div>
      </div>

      {/* Floating Cart Button */}
      <div className="fixed bottom-4 right-4">
        <FaShoppingCart
          onClick={() => setActiveCart(!activeCart)}
          className="rounded-full bg-white shadow-lg text-4xl p-3 cursor-pointer"
        />
        {totalQty > 0 && (
          <span className="absolute bottom-10 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            {totalQty}
          </span>
        )}
      </div>
    </>
  );
};

export default Cart;
